import React from 'react';
import HeaderCatatan from './components/HeaderCatatan';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArsipPage from './pages/ArsipPage';
import DetailPage from './pages/DetailPage';
import HalamanKosong from './pages/HalamanKosong';
import TambahPage from './pages/TambahPage';

function App() {
  return (
    <div className="app-container">
      <header>
        <HeaderCatatan />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catatan/input" element={<TambahPage />} />
          <Route path="/catatan/:id" element={<DetailPage />} />
          <Route path="/arsip" element={<ArsipPage />} />
          <Route path="*" element={<HalamanKosong />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
