import { css } from 'glamor';
import { modularScale } from 'polished';

css.global('html', {
    fontSize: '62.5%',
    fontWeight: 'normal',
});

css.global('body', {
    fontSize: '1.6rem',
    lineHeight: '1.45'
})

css.global('html, body, #app', {
    width: '100vw',
    height: '100vh',
    padding: 0,
    margin: 0
});

css.global('p', {
    fontSize: 'inherit',
    marginBottom: '1.3rem'
});

css.global('h1, h2, h3, h4', {
    margin: '1.414em 0 0.5em',
    fontWeight: 'inherit',
    lineHeight: '1.2',
})

css.global('h1', {
    marginTop: 0,
    marginBottom: 0,
    // fontSize: '10.966rem',
    fontSize: modularScale(4.8, 1.68)
});

css.global('h2', {
    fontSize: '6.766rem'
});

css.global('h3', {
    fontSize: '2.618rem'
});

css.global('h4', {
    fontSize: '1.8688rem'
});

css.global('small', {
    fontSize: '0.988rem'
});