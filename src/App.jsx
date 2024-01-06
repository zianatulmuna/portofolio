import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import Footer from './layouts/Footer';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/project/:id" Component={ProjectPage} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
