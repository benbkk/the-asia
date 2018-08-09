import styled from 'react-emotion';
import propStyles from 'prop-styles';
import { mediaQueries } from 'css/variables';
import {
    listNone,
    listBullet,
    listSquare,
    block,
    inlineBlock,
    center,
    left,
    right,
    justify,
} from 'css/utilities';

export const List = styled('ul')`
    ${propStyles({
        none: [listNone],
        bullet: [listBullet],
        square: [listSquare],
    })}

    margin-left: 0;
    padding-left: 0;
    margin-bottom: 18px;
`;

export const ListItem = styled('li')`
    ${propStyles({
        block: [block],
        inline: [inlineBlock],
    })}

    margin-bottom: 18px;
    font-size: inherit;
`;

export const Container = styled('div')`
    padding: 0 2rem;
    margin: auto;
    min-height: inherit;
    ${mediaQueries.laptop} {
        max-width: 1170px;
    }
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
    })};
`;
