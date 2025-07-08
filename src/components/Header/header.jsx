
import logo from "../../img/oversoftLogo.png"
import { ContainerNavbar, ContainerLogo, ContainerLinks, ContainerButton } from "./headerStyles"

const header = () => {
  
  return (
   <ContainerNavbar>
    <ContainerLogo>
      <img src={logo} alt="imagen del logo" />
    </ContainerLogo>
    <ContainerLinks>
      <ul>
        <li>Home</li>
        <li>Nosotros</li>
        <li>Servicios</li>
        <li>Oversoft [e] </li>
        <li>Servicios</li>
        <li>Contacto</li>
      </ul>
    </ContainerLinks>
    <ContainerButton>
      <button>Soporte Técnico</button>
    </ContainerButton>
   </ContainerNavbar>
  )
}


export default header
