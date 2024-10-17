import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import Home from "./pages/home";
import Detalhes from "./pages/detalhes/detalhes";
import Concursos from "./pages/concursos/concursos";
import Logar from "./pages/logar/logar";
import Cadastro from "./pages/cadastro/cadastro";
import LogarAdmin from "./pages/logar-admin/logar-admin";
import TelaDoUsuario from "./pages/tela do usuario/tela-do-usuario";
import TelaDoAdmin from "./pages/tela do admin/tela-do-admin";
import ResultadosDoUsuario from "./pages/resultados do usuario/resultados-do-usuario";

function AppRoutes() {
    return (
        <BrowserRouter >
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/detalhes" element={<Detalhes />}></Route>
                <Route path="/concursos" element={<Concursos />}></Route>
                <Route path="/logar" element={<Logar />}></Route>
                <Route path="/cadastro" element={<Cadastro />}></Route>
                <Route path="/logar-admin" element={<LogarAdmin />}></Route>
                <Route path="/tela-do-usuario" element={<TelaDoUsuario />}></Route>
                <Route path="/tela-do-admin" element={<TelaDoAdmin />}></Route>
                <Route path="/resultados-do-usuario" element={<ResultadosDoUsuario />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes