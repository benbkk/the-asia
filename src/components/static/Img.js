import styled, { css } from 'react-emotion';
import { mediaQueries } from 'css/variables';

export const Img = css`
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: top;
`;

export const ImageWrapper = styled('span')`
    display: table-cell;
    vertical-align: middle;
    position: relative;
    z-index: 3;
    overflow: hidden;
    vertical-align: middle;
    width: 54%;
    height: 380px;
    border-radius: 4px;
    box-shadow: 30px 0px 50px 0 rgba(1,121,255,.1), 10px 0px 50px 0 rgba(0,0,0,.2);
    
    ${mediaQueries.tabletS} {
        display: block;
        width: 100%;
        border-radius: 6px 6px 0 0;
    }
`;
