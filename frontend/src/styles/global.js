import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Oswald', sans-serif;
        font-size: 100%;
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
        height: 100vh;
        background: linear-gradient(0deg, rgba(187,187,187,1) 0%, rgba(233,232,232,1) 100%);
    }

    a {
        text-decoration: none;
        color: #333;
    }
`;

export default GlobalStyle;
