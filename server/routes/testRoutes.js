import express from 'express';
import { testService } from '../services/testService.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const tests = await testService.getAllTests();
    res.json(tests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const test = await testService.createTest(req.body);
    res.status(201).json(test);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const test = await testService.updateTest(req.params.id, req.body);
    res.json(test);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await testService.deleteTest(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export { router as testRoutes };