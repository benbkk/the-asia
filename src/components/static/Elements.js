import styled, { css } from 'react-emotion';
import propStyles from 'prop-styles';
import { mediaQueries } from 'css/variables';
import { position, clearFix } from 'polished';
import {
    block,
    inlineBlock,
    center,
    left,
    right,
    justify,
    textSm,
    lsNone,
    lsBullet,
    lsSquare,
} from 'css/utilities';

export const CarouselWrapper = styled('div')`
    position: relative;
    max-width: 100%;
    overflow: hidden;
    min-height: 480px;
    margin: 36px 0;

    ${mediaQueries.tabletS} {
        overflow: initial;
    }
`;

export const h100 = css`
    ${clearFix()};
    overflow: hidden;
`;

export const absolute = css`
    position: absolute;
    top: 0;
    padding: 36px 45px;
`;

export const slideHidden = css`
    width: 0;
    height: 0;
    opacity: 0;
    overflow: hidden;
    transition:  opacity 0.3s ease-in-out;
`;

export const slideVisible = css`
    width: auto;
    opactity: 1;
    transition:  opacity 0.3s ease-in-out;
`;

export const Container = styled('div')`
    padding: 0 2rem;
    margin: auto;
    min-height: inherit;
    ${mediaQueries.laptop} {
        max-width: 1170px;
    }
`;
export const List = styled('ul')`
    ${propStyles({
        none: [lsNone],
        bullet: [lsBullet],
        square: [lsSquare],
    })}
    max-width: 100%;
    overflow-x: hidden;
    margin-left: 0;
    padding-left: 0;
    margin-bottom: 18px;
`;

export const ListItem = styled('li')`
    ${propStyles({
        block: [block],
        inlineBlock: [inlineBlock],
    })}

    margin-bottom: 18px;
    font-size: inherit;

    {...props};
`;


export const Img = styled('img')`
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: 50%;
`;

export const Text = styled('p')`
    ${propStyles({
        textCenter: [center],
        textLeft: [left],
        textRight: [right],
        textJustify: [justify],
        small: [textSm],
    })};
`;

export const Wrapper = styled('span')`
    display: block;
    ${clearFix()};

`;
