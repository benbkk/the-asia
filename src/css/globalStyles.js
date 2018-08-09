import WebFont from 'webfontloader';
import { injectGlobal } from 'emotion';
import { family } from 'css/variables';
import { normalize, rem } from 'polished';
import { palette } from './variables';

WebFont.load({
    google: {
        families: [
            'Noto+Sans|Raleway|Roboto',
        ],
    },
});

injectGlobal`
    ${normalize()};

    * {
        box-sizing: border-box;
    }
    html {
        height: 100%;
        font-size: ${rem('16px', '16px')};
        min-width: 320px;
        ${family.raleway};
        -webkit-font-smoothing: auto;
        -moz-osz-font-smoothing: auto;
        text-rendering: optimizedLegibility;
    }

    body {
        height: inherit;
        min-width: inherit;
        color: ${palette.bodyText};
    }

    h1,
    h2,
    h3,
    h4 {
        ${family.raleway};
    }

    h1 {
        font-size: ${rem('47px', '16px')};
    }

    h2 { 
        font-size: ${rem('29px', '16px')};
    }

    h3 {
        font-size: ${rem('23px', '16px')};
    }

    p,
    li {
        margin: 0 0 ${rem('18px', '16px')} 0;
        line-height: 1.45;
    }

    a, button {
        &:active,
        &:focus {
            outline: none;
        }
    }

    figure {
        margin: 0;
    }
`;
