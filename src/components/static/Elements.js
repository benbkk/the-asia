import styled from 'react-emotion';
import { clearFix } from 'polished';
import propStyles from 'prop-styles';
import { mediaQueries } from 'css/variables';
import {
    center,
    left,
    right,
    justify,
    textSm,
} from 'css/utilities';

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
        small: [textSm],
    })};
`;

export const Wrapper = styled('span')`
    display: block;
    ${clearFix()};
`;
