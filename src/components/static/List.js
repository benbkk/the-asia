import styled from 'react-emotion';
import propStyles from 'prop-styles';
import { lsNone, lsBullet, lsSquare } from 'config/cssVars'; 

export default styled('ul')`
    ${propStyles({
        none: [lsNone],
        bullet: [lsBullet],
        square: [lsSquare]
    })}

    margin-left: 0;
    padding-left: 0;
    margin-bottom: 18px;
`