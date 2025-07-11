import {createGlobalStyle} from "styled-components"

const GlobalStyles = createGlobalStyle`
*{
margin:0;
padding: 0;
box-sizing: border-box;

}
body{
font-family: 'Segoe UI', sans-serif;
    background-color: #001f3f;
    color:rgb(212, 212, 212);
    display: flex;
    flex-direction: column;
    align-items: center;
    //min-height: 100vh;
    text-align: center;
}
`;

export default GlobalStyles;
