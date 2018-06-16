import 'typeface-montserrat';
import glamorous from 'glamorous';
import { css } from 'glamor';
import { modularScale } from 'polished';
import { palette } from 'config/cssVars';
import { mediaQueries } from 'config/cssVars';

css.global('*', {
    boxSizing: 'border-box',
});
css.global('html', {
    fontSize: '1.125rem',
    fontWeight: 'normal',
    width: '100vw',
    height: '100vh'
});

css.global('body', {
    fontSize: 'inherit',
    height: 'inherit',
    width: 'inherit',
    lineHeight: '1.45',
    color: `${palette.black}`,
    fontFamily: '"Montserrat", Arial, Helvetica, sans-serif'
});

css.global('html, body', {
    padding: 0,
    margin: 0
});

css.global('p', {
    fontSize: 'inherit',
    lineHeight: '1.45',
    margin: 0
});

css.global('h1, h2, h3, h4', {
    fontWeight: '700',
    lineHeight: '1.2',
    fontFamily: "'Montserrat', Arial, Helvetica, sans-serif",
    
})

css.global('h1', {
    marginTop: 0,
    marginBottom: 0,
    fontSize: '4rem'
    // fontSize: '63.998px',
    // fontSize: modularScale(4, 1.618),
});


css.global('h2', {
    fontSize: '45.232px',
    fontSize: '2.827rem'
});

css.global('h3', {
    fontSize: '31.984px'
});

css.global('h4', {
    fontSize: '22.624px'
});

css.global('small', {
    fontSize: '11.312px'
});