import 'typeface-montserrat';
import { injectGlobal } from 'emotion';
import { palette } from 'css/variables';

injectGlobal`
    * {
        box-sizing: border-box;
    }

    html {
        font-size: 18px;
        font-weight: normal;
        width: 100vw;
        height: 100vh;
        min-height: 100vh;
    }

    body {
        font-size: inherit;
        height: inherit;
        min-height: inherit;
        width: inherit;
        line-height: 1.45;
        color: ${palette.black};
        font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    }

    html, body {
        padding: 0;
        margin: 0;
    }

    p {
        font-size: inherit;
        line-height: 1.45;
        margin: 0;
    }

    h1, h2, h3, h4 {
        font-weight: 700;
        line-height: 1.2;
        font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    }

    h1 {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 72px;
    }

    h2 {
        font-size: 45.232px;
    }

    h3 {
        font-size: 31.984px;
    }

    h4 {
        font-size: 22.624px;
    }

    small {
        font-size: 11.312px;
    }

    #app, .app-wrapper {
        min-height: inherit;
    }
`;
