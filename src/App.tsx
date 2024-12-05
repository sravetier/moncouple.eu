import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import Home from './pages/Home';
import Assessment from './pages/Assessment';
import Separation from './pages/Separation';
import Rebuild from './pages/Rebuild';
import SaveRelationship from './pages/SaveRelationship';
import Forum from './pages/Forum';
import Library from './pages/Library';
import TestPage from './pages/TestPage';
import TestResult from './pages/TestResult';
import Login from './pages/Login';
import AdminLayout from './components/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import TestManager from './pages/admin/TestManager';
import GuideManager from './pages/admin/GuideManager';
import ForumManager from './pages/admin/ForumManager';
import Settings from './pages/admin/Settings';
import PracticalGuidePage from './pages/PracticalGuidePage';

//Nouveaux imports pour la bibliothèque d'articles
import {LibraryArticle} from './pages/LibraryArticle';
import {ArticleGuidePage} from './pages/ArticleGuidePage';


export default function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Routes>
        {/* Routes publiques */}
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/assessment" element={<Assessment />} />
                  <Route path="/test/:testId" element={<TestPage />} />
                  <Route path="/test-result/:testId" element={<TestResult />} />
                  <Route path="/separation" element={<Separation />} />
                  <Route path="/rebuild" element={<Rebuild />} />
                  <Route path="/save-relationship" element={<SaveRelationship />} />
                  <Route path="/library" element={<Library />} />
                  <Route path="/forum" element={<Forum />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/guide/:guideId" element={<PracticalGuidePage />} />

                  {/* Nouvelles routes pour la librairie d'articles */}
                  <Route path="/library-articles" element={<LibraryArticle />} />
                  <Route path="/article/:articleId" element={<ArticleGuidePage />} />
                </Routes>
              </main>
              <Footer />
              <ChatBot />
            </>
          }
        />

        {/* Routes admin */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="tests" element={<TestManager />} />
          <Route path="guides" element={<GuideManager />} />
          <Route path="forum" element={<ForumManager />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
}