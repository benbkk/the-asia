import { css } from 'emotion';

export const palette = {
    black: '#000000',
    green: '#22BD81',
    greenDarker: '#4bab86',
    white: '#ffffff',
    bodyText: '#363436',
    grayLightest: '#ebeff1',
    orange: '#e67a2e',
    red: '#fa4258',
};

export const mediaQueries = {
    desktop: '@media only screen and (min-width:1920px)',
    laptop: '@media screen and (min-width: 1025px)',
    tablet: '@media only screen and (max-width:1024px)',
    tabletS: '@media only screen and (max-width:768px)',
    mobile: '@media screen and (max-width:640px)',
};

export const family = {
    roboto: css`
        font-family: 'Roboto', sans-serif;
        `,
    notoSans: css`
        font-family: 'Noto Sans', sans-serif;
        `,
    raleway: css`
        font-family: 'Raleway', sans-serif;
        `,
};
