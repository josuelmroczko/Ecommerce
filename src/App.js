import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homeeapp from './pages/home/index.jsx';
import Entrar from './pages/entrar/index.jsx';
import Contatos from './pages/contatos/contatos.jsx';
import { ImageProvider } from '../src/imagemProvider/imagemProvider.jsx';
import Sobre from './pages/sobre/sobre.jsx';
import './App.css'
function App() {
  return (
    <ImageProvider>
      <Router>
        <Routes>
          {/* 
  Esta é a rota para a página inicial.
  Quando a URL corresponder a "/", o componente Homeeapp será renderizado.
*/}
          <Route path="/" element={<Homeeapp />} />
          <Route path="/entrar" element={<Entrar />} />
          <Route path="/contato" element={<Contatos />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </Router>
    </ImageProvider>
  );
}

export default App;
