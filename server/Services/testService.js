import pool from '../lib/db.js';

export const testService = {
  async getAllTests() {
    const [tests] = await pool.query('SELECT * FROM tests');
    const testsWithDetails = await Promise.all(
      tests.map(async (test) => {
        const [questions] = await pool.query(
          'SELECT * FROM questions WHERE test_id = ?',
          [test.id]
        );
        
        const [scoreRanges] = await pool.query(
          'SELECT * FROM score_ranges WHERE test_id = ?',
          [test.id]
        );

        const questionsWithOptions = await Promise.all(
          questions.map(async (question) => {
            const [options] = await pool.query(
              'SELECT * FROM question_options WHERE question_id = ?',
              [question.id]
            );
            return { ...question, options };
          })
        );

        return {
          ...test,
          questions: questionsWithOptions,
          scoreRanges,
          getAnalysis: (score) => {
            const range = scoreRanges.find(
              r => score >= r.min_score && score <= r.max_score
            );
            return range?.analysis || "Aucune analyse disponible";
          }
        };
      })
    );

    return testsWithDetails;
  },

  async createTest(test) {
    const connection = await pool.getConnection();
    try {
      await connection.beginTransaction();

      const [result] = await connection.query(
        'INSERT INTO tests (title, description, image, category) VALUES (?, ?, ?, ?)',
        [test.title, test.description, test.image, test.category]
      );
      const testId = result.insertId;

      for (const question of test.questions) {
        const [questionResult] = await connection.query(
          'INSERT INTO questions (test_id, text) VALUES (?, ?)',
          [testId, question.text]
        );
        const questionId = questionResult.insertId;

        for (const option of question.options) {
          await connection.query(
            'INSERT INTO question_options (question_id, text, value) VALUES (?, ?, ?)',
            [questionId, option.text, option.value]
          );
        }
      }

      for (const range of test.scoreRanges) {
        await connection.query(
          'INSERT INTO score_ranges (test_id, min_score, max_score, analysis) VALUES (?, ?, ?, ?)',
          [testId, range.minScore, range.maxScore, range.analysis]
        );
      }

      await connection.commit();
      return { id: testId, ...test };
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  },

  async updateTest(testId, test) {
    const connection = await pool.getConnection();
    try {
      await connection.beginTransaction();

      await connection.query(
        'UPDATE tests SET title = ?, description = ?, image = ?, category = ? WHERE id = ?',
        [test.title, test.description, test.image, test.category, testId]
      );

      // Supprimer les anciennes données
      await connection.query('DELETE FROM score_ranges WHERE test_id = ?', [testId]);
      const [questions] = await connection.query('SELECT id FROM questions WHERE test_id = ?', [testId]);
      for (const question of questions) {
        await connection.query('DELETE FROM question_options WHERE question_id = ?', [question.id]);
      }
      await connection.query('DELETE FROM questions WHERE test_id = ?', [testId]);

      // Insérer les nouvelles données
      for (const question of test.questions) {
        const [questionResult] = await connection.query(
          'INSERT INTO questions (test_id, text) VALUES (?, ?)',
          [testId, question.text]
        );
        const questionId = questionResult.insertId;

        for (const option of question.options) {
          await connection.query(
            'INSERT INTO question_options (question_id, text, value) VALUES (?, ?, ?)',
            [questionId, option.text, option.value]
          );
        }
      }

      for (const range of test.scoreRanges) {
        await connection.query(
          'INSERT INTO score_ranges (test_id, min_score, max_score, analysis) VALUES (?, ?, ?, ?)',
          [testId, range.minScore, range.maxScore, range.analysis]
        );
      }

      await connection.commit();
      return { id: testId, ...test };
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  },

  async deleteTest(testId) {
    const connection = await pool.getConnection();
    try {
      await connection.beginTransaction();

      await connection.query('DELETE FROM score_ranges WHERE test_id = ?', [testId]);
      const [questions] = await connection.query('SELECT id FROM questions WHERE test_id = ?', [testId]);
      for (const question of questions) {
        await connection.query('DELETE FROM question_options WHERE question_id = ?', [question.id]);
      }
      await connection.query('DELETE FROM questions WHERE test_id = ?', [testId]);
      await connection.query('DELETE FROM tests WHERE id = ?', [testId]);

      await connection.commit();
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  }
};