import styled, { css } from 'react-emotion';
import { mediaQueries, palette } from 'css/variables';
import { darken } from 'polished';

export const Img = css`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display:inline-block;
    vertical-align: middle;
    transition: opacity 0.3s ease-in-out;
`;

export const ImageWrapper = styled('div')`
    position: relative;
    z-index: 2;
    overflow: hidden;
    vertical-align: middle;
    height: 380px;
    border-radius: 4px;
    box-shadow: 30px 0px 50px 0 rgba(1,121,255,.1), 10px 0px 50px 0 rgba(0,0,0,.2);
    backface-visibility: hidden;
    transform: translateX(0);
    background-color: ${darken(0.2, palette.green)};
    
    ${mediaQueries.tabletS} {
        display: block;
        width: 100%;
        border-radius: 6px 6px 0 0;
    }
`;
