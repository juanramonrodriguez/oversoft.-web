import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from "./components/Header/header"
import Footer from "./components/Footer/footer";
import Home from "./pages/Home/home";
import Servicios from "./pages/Servicios/servicios";
import Soluciones from "./pages/Soluciones/soluciones";
import Empresa from "./pages/Empresas/empresa";
import Blog from "./pages/Blog/blog";
import Contacto from "./pages/Contacto/contacto";



function App() {

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/servicios" element={<Servicios/>}/>
      <Route path="/soluciones" element={<Soluciones/>}/>
      <Route path="/empresa" element={<Empresa/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/contacto" element={<Contacto/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}
export default App
