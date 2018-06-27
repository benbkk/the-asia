import styled from 'react-emotion';
import {
    dsBlock,
    dsInlineBlock,
} from 'config/cssVars';
import propStyles from 'prop-styles';

export default styled('li')`

    ${propStyles({
        block: [dsBlock],
        inline: [dsInlineBlock],
    })}

    margin-bottom: 16px;
    font-size: inherit;
`;
