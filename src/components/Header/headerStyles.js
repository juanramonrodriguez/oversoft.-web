import styled from "styled-components"

export const ContainerNavbar = styled.div`
display: flex;
position: sticky;
position: relative;
width: 100vw;
height: 80px;
padding:0 50px ;
justify-content: space-around;
gap: 50px;
align-items: center;
margin-top: 30px;
background: rgba(231, 228, 228, 0.17);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(7.6px);
-webkit-backdrop-filter: blur(7.6px);
border-top:1px solid rgba(255, 255, 255, 0.83);
border-bottom:1px solid rgba(255, 255, 255, 0.83);
`
export const ContainerLogo = styled.div`
display: flex;
`
export const ContainerLinks = styled.div`
display: flex;
color: white;

ul{
    display: flex;
    gap: 40px;
    list-style: none;
    padding-bottom: 4px;
}
li{
    position: relative;
    cursor: pointer;
    font-size: 17px;
    padding:  4px 0;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: darkorange;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease-in-out;
    }

    &:hover::after {
      transform: scaleX(1);
    }
 
}
`
export const ContainerButton = styled.div`
display: flex;
button{
    cursor: pointer;
    color: white;
    font-size: 17px;
    background-color: transparent;
    width: 150px;
    height: 40px;
    border: 1px solid white;
    background: rgba(255, 255, 255, 0.11);
    border-radius: 8px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(9px);
    -webkit-backdrop-filter: blur(9px);
    border: 1px solid rgba(255, 255, 255, 0.39);

    &:hover{
        background-color: darkorange;
        transition: 0.8s ease;
    }
}
`