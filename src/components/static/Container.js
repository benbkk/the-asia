import styled from 'react-emotion';
import { mediaQueries } from 'css/variables';

export default styled('div')`
    padding: 0 2rem;
    margin: auto;
    min-height: inherit;
    ${mediaQueries.laptop} {
        max-width: 1170px;
    }
`;
