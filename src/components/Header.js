import React from 'react';
import { bgWhite, paddingDefault } from 'css/utilities';
import { css } from 'react-emotion';
import Logo from 'static/Logo';
import { palette } from '../css/variables';

const headerStyle = css`
    ${bgWhite};
    ${paddingDefault};
    position: relative;
    box-shadow: 0px 1px 0px ${palette.grayLightest};
`;

export default () => (
    <header className={`app-header ${headerStyle}`}>
        <Logo />
    </header>
);
