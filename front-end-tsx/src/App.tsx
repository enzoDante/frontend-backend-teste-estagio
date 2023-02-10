import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import { CSSGeral } from './components/Styles/CSSGeral';
import Contato from './pages/Contato/Contato';
import Home from './pages/Home/Home';
import Missaovalores from './pages/missao-valores/missaovalores';
import Solucoes from './pages/NossasSolucoes/Solucoes';
import Quemsomos from './pages/Quem-somos/Quemsomos';

function App() {
  return (
    <Router>
      <CSSGeral />
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route> {/* exact="true" */}

        <Route path="/quem-somos" element={<Quemsomos />}></Route>
        <Route path="/missao-e-valores" element={ <Missaovalores />}></Route>
        <Route path="/solucoes" element={<Solucoes />}></Route>
        <Route path="/contato" element={<Contato />}></Route>

      </Routes>


    </Router>
  );
}

export default App;
