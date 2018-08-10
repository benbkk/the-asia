import { css } from 'react-emotion';
import {
    size, rem, position, darken,
} from 'polished';
import { palette, mediaQueries } from 'css/variables';

export const textSm = css`
    font-size: ${rem('14px', '16px')};
`;

export const absCenter = css`
    ${position('absolute', 0)};
`;

export const paddingDefault = css`
    padding: ${rem('18px', '16px')} ${rem('36px', '16px')};
`;

export const mt0 = css`
    margin-top: 0;
`;

export const mb0 = css`
    margin-bottom: 0;
`;

export const iconSm = css`
    ${size('12px')};
`;

export const iconDefault = css`
    ${size('18px')};
`;

export const iconLg = css`
    ${size('24px')};  
`;

export const bgGrayLightest = css`
    background-color: ${palette.grayLightest};
    &:hover,
    &:active,
    &:focus {
        background-color: ${darken(0.1, palette.grayLightest)};
    }
`;

export const btnTransparent = css`
    background-color: transparent;
    border-color: transparent;
    &:hover,
    &:active,
    &:focus {
        background-color: transparent;
        border-color: transparent;
    }
`;

export const bgWhite = css`
    background-color: ${palette.white};
`;

export const bgOrange = css`
    background-color: ${palette.orange};
`;

export const bgGreen = css`
    background-color: ${palette.green};
    &:hover,
    &:active,
    &:focus {
        background-color: ${darken(0.1, palette.green)};
    }
`;

export const outlineGreen = css`
    background-color: transparent;
    border: 1px solid ${palette.green};
    color: ${palette.green};
    &:hover,
    &:active,
    &:focus {
        border-color: ${darken(0.1, palette.green)};
        color: ${darken(0.1, palette.green)};
    }
`;

export const outlineGrayLightest = css`
    background-color: transparent;
    border: 1px solid ${palette.grayLightest};
    color: ${palette.grayLightest};
`;

export const bgBlack = css`
    background-color: ${palette.black};
`;

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

export const lsNone = css`
    list-style: none;
    margin-left: 0;
    padding-left: 0;
`;

export const lsBullet = css`
    list-style: bullet;
`;

export const lsSquare = css`
    list-style: square;
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

export const listNone = css`
    list-style:none;
`;

export const listBullet = css`
    list-style: bullet;
`;

export const listSquare = css`
    list-style: square;
`;

export const block = css`
    display: block;
`;

export const inlineBlock = css`
    display: inline-block;
`;

export const fillBlack = css`
    fill: ${palette.black};
`;

export const fillWhite = css`
    fill: ${palette.white};
`;

export const gradientPseudo = css`
    &:before {
        content: '';
        display: block;
        width: inherit;
        position: absolute;
        height: 40px;
        bottom: -10px;
        left: 0;
        right: 0;
        z-index:4;

        background-image: -webkit-linear-gradient(-90deg, rgba(255,255,255,0) 0, rgba(255,255,255,1) 100%);
        background-image: -moz-linear-gradient(180deg, rgba(255,255,255,0) 0, rgba(255,255,255,1) 100%);
        background-image: linear-gradient(180deg, rgba(255,255,255,0) 0, rgba(255,255,255,1) 100%);
        background-position: 50% 50%;
        -webkit-background-origin: padding-box;
        background-origin: padding-box;
        -webkit-background-clip: border-box;
        background-clip: border-box;
        -webkit-background-size: auto auto;
        background-size: auto auto;
    }
`;
