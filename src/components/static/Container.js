import glamorous from 'glamorous';
import { mediaQueries } from 'config/cssVars';

export default glamorous.div({
    padding: '0 2rem',
    margin: 'auto',
    minHeight: 'inherit',
    [mediaQueries.laptop]: {
        maxWidth: '1170px',
    },
})