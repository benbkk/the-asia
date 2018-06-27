import { css } from 'emotion';

export const palette = {
    black: '#333333',
    blue: '#4262E8',
    purple: '#7949FF',
    lightBlue: '#55C2FF',
    turquoise: '#42E8D9',
    green: '#2DFF87',
    white: '#ffffff',
};

export const bgBlue = css`
    background-color: ${palette.blue};
`;

export const mediaQueries = {
    desktop: '@media only screen and (min-width:1920px)',
    laptop: '@media screen and (min-width: 1025px)',
    tablet: '@media only screen and (max-width:1024px)',
    tabletS: '@media only screen and (max-width:768px)',
    mobile: '@media screen and (max-width:640px)',
};

export const left = css`
    text-align: left;
`;

export const center = css`
    text-align: center;
    ${mediaQueries.mobile} {
        text-align: left;
    }
`;

export const right = css`
    text-align: right;
    ${mediaQueries.mobile} {
        text-align: left;
    }
`;

export const justify = css`
    text-align: justify;
`;

export const uppercase = css`
    text-transform: uppercase;
`;

export const blend = css`
    background-color: inherit;
    -webkit-background-clip: text;
    background-clip: text;
    filter: invert(1) grayscale(100%) contrast();
    mix-blend-mode: invert;
`;

export const vbottom = css`
    vertical-align: bottom;
`;

export const vtop = css`
    vertical-align: top;
`;

export const vmiddle = css`
    vertical-align: middle;
`;

export const lsNone = css`
    list-style:none;
`;

export const lsBullet = css`
    list-style: bullet;
`;

export const lsSquare = css`
    list-style: square;
`;

export const dsBlock = css`
    display: block;
`;

export const dsInlineBlock = css`
    display: inline-block;
`;
