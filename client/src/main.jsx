import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App.jsx';
import SanctuaryFlow from './pages/SanctuaryFlow.jsx';
import EchoBox from './pages/EchoBox.jsx';
import AffirmationLibrary from './pages/Affirmations.jsx';
import WhisperThread from './pages/WhisperThread.jsx';
import SoftGate from './pages/SoftGate.jsx';
import './styles/index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Navigate to="/safety" replace />} />
          <Route path="journal" element={<SanctuaryFlow />} />
          <Route path="audio" element={<EchoBox />} />
          <Route path="affirmations" element={<AffirmationLibrary />} />
          <Route path="community" element={<WhisperThread />} />
          <Route path="safety" element={<SoftGate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
