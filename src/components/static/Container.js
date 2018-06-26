import styled, { css } from 'react-emotion';
import { mediaQueries } from 'config/cssVars';

export default styled('div')`
    padding: 0 2rem;
    margin: auto;
    min-height: inherit;
    ${mediaQueries.laptop} {
        max-width: 1170px;
    }
`;
