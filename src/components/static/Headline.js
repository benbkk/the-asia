import styled, { css } from 'react-emotion';
import propStyles from 'prop-styles';
import { palette, center, left, right, uppercase, blend, mediaQueries} from 'config/cssVars';

export default styled('h1')`
    ${propStyles({
        center: [center], 
        left: [left],
        right: [right],
        uppercase: [uppercase],
        blend: [blend],
        white: [palette.white]
    })}

    ${mediaQueries.tablet} {
        font-size: 64px;
    }

    ${mediaQueries.mobile} {
        font-size: 48px;
    }
`;