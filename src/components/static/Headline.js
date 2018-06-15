import glamorous from 'glamorous';
import propStyles from 'prop-styles';
import { palette, textCenter, textLeft, textRight, upperCase, colorBlend, mediaQueries } from 'config/cssVars';

export default glamorous.h1(
    propStyles({
        center: [textCenter], 
        left: [textLeft],
        right: [textRight],
        uppercase: [upperCase],
        blend: [colorBlend],
        white: [palette.white]
    })
);