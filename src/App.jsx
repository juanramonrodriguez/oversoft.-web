import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home/home";
import Servicios from "./pages/Servicios/servicios";
import Soluciones from "./pages/Soluciones/soluciones";
import Empresa from "./pages/Empresas/empresa";
import Blog from "./pages/Blog/blog";
import Contacto from "./pages/Contacto/contacto";
import Layout from "./components/Layout/layout";



function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="/servicios" element={<Servicios/>}/>
      <Route path="/soluciones" element={<Soluciones/>}/>
      <Route path="/empresa" element={<Empresa/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/contacto" element={<Contacto/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}
export default App
