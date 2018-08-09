import React from 'react';
import styled from 'react-emotion';
import propStyles from 'prop-styles';
import {
    iconSm, iconLg, fillBlack, fillWhite,
} from 'css/utilities';
import { size } from 'polished';

const getIconPath = (name) => {
    switch (name) {
    case 'back':
        return (
            'M155.8 256L387 24.8c5.7-5.7 5.7-14.8 0-20.5-5.7-5.7-14.8-5.7-20.5 0L125 245.8c-5.7 5.7-5.7 14.8 0 20.5l241.5 241.4c2.8 2.8 6.5 4.3 10.2 4.3s7.4-1.4 10.2-4.3c5.7-5.7 5.7-14.8 0-20.5L155.8 256z'
        );
    case 'next':
        return (
            'M125.1 487.2c-5.7 5.7-5.7 14.8 0 20.5 2.8 2.9 6.5 4.3 10.2 4.3s7.4-1.5 10.2-4.3L387 266.3c5.7-5.7 5.7-14.8 0-20.5L145.5 4.3c-5.7-5.7-14.8-5.7-20.5 0-5.7 5.7-5.7 14.8 0 20.5L356.2 256 125.1 487.2z'
        );
    default:
        return <path />;
    }
};

const I = styled('i')`
    ${size('18px')};
    display: inline-block;
    vertical-align: middle;
    ${propStyles({
        iconSm: [iconSm],
        iconLg: [iconLg],
        black: [fillBlack],
        white: [fillWhite],
    })};
`;

const Path = styled('path')`
    ${propStyles({
        black: [fillBlack],
        white: [fillWhite],
    })};
`;

const Svg = styled('svg')`
    display: inline-block;
    width: 100%;
    max-width: 100%;
    height: auto;
    vertical-align: middle;
`;

const Icon = ({ name, ...props }) => (
    <I {...props}>
        <Svg viewBox="0 0 512 512">
            <Path
                d={getIconPath(name)}
                {...props}
            />
        </Svg>
    </I>
);

export default Icon;
