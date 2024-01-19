import { createGlobalStyle} from "styled-components";


export const StylesGlobal = createGlobalStyle`
*, *::before, *::after{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
}
:root{
    font-size: 62.5%;
}
body, input{
    scroll-behavior: smooth;
    font-family: 'Sunflower', sans-serif;
    font-size: 1.6rem;
    background-color: #fbfbfb;
    font-weight: 300;
}
a{
    text-decoration: none;
}
ul{
    list-style: none;
}
img{
    max-width: 100%;
    display: block;
}
`