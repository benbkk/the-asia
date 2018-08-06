import propStyles from 'prop-styles';
import styled from 'react-emotion';
import {
    center, left, right, justify, blend,
} from 'css/variables';

export default styled('p')`
    ${propStyles({
        center: [center],
        left: [left],
        right: [right],
        justify: [justify],
        blend: [blend],
    })}
`;
