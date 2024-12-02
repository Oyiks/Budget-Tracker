import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    /* * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    } */

    body {
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;
        height: 100vh;
        
    }

    @media (max-width: 450px) {
            body {
                padding: 0;
                margin: 0;
                height: 100vh;
            }
        }


`;

export default GlobalStyles;