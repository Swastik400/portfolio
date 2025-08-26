import { createGlobalStyle } from "styled-components";




const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Pacifico&display=swap');

*,*::before,*::after,h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
h1,h2,h3,h4,h5,h6{
    display: inline-block;
}

html {
    scroll-behavior: smooth;
}

body{
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Inter', sans-serif;
    background-color: #0f0f23;
    color: #ffffff;
    line-height: 1.6;
}

a {
    color: inherit;
    text-decoration: none;
}

`

export default GlobalStyle;