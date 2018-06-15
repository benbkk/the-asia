import glamorous from 'glamorous';
import propStyles from 'prop-styles';
import {textCenter, textLeft, textRight, textJustify, colorBlend} from 'config/cssVars';

export default glamorous.p(
    propStyles({
        center: [textCenter],
        left: [textLeft],
        right: [textRight],
        justify: [textJustify],
        blend: [colorBlend]
    })
);