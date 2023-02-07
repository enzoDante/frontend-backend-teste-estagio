import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { CSSGeral } from "./components/Styles/CSSGlobal";
import Missaovalores from "./pages/missao-valores/missaovalores";
import Quemsomos from "./pages/Quem-somos/Quemsomos";

function App() {
  return (
    <Router>
      <CSSGeral />
      <Header />


      <Routes>
        <Route exact='true' path="/" element={''}></Route>

        <Route path="/quem-somos" element={<Quemsomos />}></Route>
        <Route path="/missao-e-valores" element={ <Missaovalores />}></Route>
        <Route path="/solucoes" element={''}></Route>
        <Route path="/contato" element={''}></Route>

      </Routes>

    </Router>
  );
}

export default App;
