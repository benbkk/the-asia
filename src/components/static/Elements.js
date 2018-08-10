import styled from 'react-emotion';
import { clearFix } from 'polished';
import propStyles from 'prop-styles';
import { mediaQueries } from 'css/variables';
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
