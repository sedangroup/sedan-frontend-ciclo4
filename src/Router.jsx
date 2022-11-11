import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AdminHome from "./pages/administrador/Home";
import ClienteHome from "./pages/cliente/Home";
import ColaboradorHome from "./pages/colaborador/Home";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="*" element={<h1>Error 404 not found</h1>}/>
        <Route path="/administrador/">
            <Route path="home" element={<AdminHome/>}/>
            <Route path="graficos" element={<h1>hola sedan</h1>}/>
            <Route path="perfil" element={<h1>hola sedan</h1>}/>
        </Route>
        <Route path="/colaborador/">
            <Route path="home" element={<ColaboradorHome/>}/>
        </Route>
        <Route path="/cliente/">
            <Route path="home" element={<ClienteHome/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
