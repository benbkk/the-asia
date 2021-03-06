import React from 'react';
import styled from 'react-emotion';
import propStyles from 'prop-styles';
import PropTypes from 'prop-types';
import {
    iconSm, iconLg, iconXlg, iconHuge, fillBlack, fillWhite, fillGreen,
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
    case 'sunny':
    case 'clear':
        return (
            'M344.8 165.2c-23-23.1-55.5-37.9-90.8-37.9s-67.7 14.2-90.8 37.9c-23.1 23.1-37.9 55.6-37.9 90.8s14.9 67.7 37.9 90.8 55.6 38 90.8 38 67.7-14.2 90.8-38c23-23 38-55.5 38-90.8s-14.3-67.7-38-90.8zm-24.4 157.2c-17 17-40.6 27.1-66.4 27.1s-49.4-10.1-66.4-27.1-27.1-40.6-27.1-66.4 10.1-49.4 27.1-66.4 40.6-27.1 66.4-27.1 49.5 10.1 66.4 27.1 27.1 40.6 27.1 66.4-10.2 49.5-27.1 66.4zm172-84h-52.1c-9.5 0-17.6 8.1-17.6 17.6 0 9.5 8.1 17.6 17.6 17.6h52.1c9.5 0 17.6-8.1 17.6-17.6s-8.1-17.6-17.6-17.6zM254 424.6c-9.5 0-17.6 8.1-17.6 17.6v52.1c0 9.5 8.1 17.6 17.6 17.6s17.6-8.1 17.6-17.6v-52.1c0-9.4-8.1-17.6-17.6-17.6zm143.6-49.4c-6.1-6.8-17.6-6.8-24.4 0s-6.8 17.6 0 24.4l37.2 37.2c6.8 6.8 17.6 6.8 24.4 0 6.8-6.8 6.8-17.6 0-24.4l-37.2-37.2zM254 87.3c9.5 0 17.6-8.2 17.6-17.6V17.6C271.6 8.1 263.5 0 254 0s-17.6 8.1-17.6 17.6v52.2c0 9.4 8.1 17.5 17.6 17.5zm144.2 49.5l37.2-37.2c6.8-6.8 6.8-17.6 0-24.4-6.8-6.8-17.6-6.8-24.4 0l-37.2 37.2c-6.8 6.8-6.8 17.6 0 24.4 6.2 6.8 17.7 6.8 24.4 0zM85.3 256c0-9.5-8.2-17.6-17.6-17.6H15.6C6.2 238.4-2 246.5-2 256s7.4 17.6 17.6 17.6h52.2c9.4 0 17.5-8.1 17.5-17.6zm24.5 119.2l-37.2 37.2c-6.8 6.8-6.8 17.6 0 24.4 6.8 6.8 17.6 6.8 24.4 0l37.2-37.2c6.8-6.8 6.8-17.6 0-24.4-6.2-6.8-17.7-6.8-24.4 0zm0-238.4c6.8 6.8 17.6 6.8 24.4 0s6.8-17.6 0-24.4L96.9 75.2c-6.8-6.8-17.6-6.8-24.4 0-6.8 6.8-6.8 17.6 0 24.4l37.3 37.2z'
        );
    case 'rain':
        return (
            'M157.5 120.4c8.1 0 15-6.3 15-15V63.9c0-8.1-6.3-15-15-15-8.6.6-15 6.9-15 15v41.5c0 8.1 6.4 15 15 15zM404.6 159c8.6 0 15-6.3 15-15V15c-.6-8.1-6.9-15-15-15s-15 6.3-15 15v129c0 8 6.4 15 15 15zM205.9 117.5c8.1 0 15-6.3 15-15V15c0-8.1-6.9-15-15-15s-15 6.3-15 15v87.5c0 8.1 6.4 15 15 15zM106.8 159c8.6 0 15-6.3 15-15V15c0-8.1-6.3-15-15-15s-15 6.9-15 15v129c.1 8 6.4 15 15 15zM403.4 179.1c-39.7-36.9-91-59.9-148-59.9-58.2 0-110.6 23.6-148.6 61.6s-61 89.8-61.6 147.4v.6c0 8.1 6.9 15 15 15s15-6.9 15-15c0-9.2 4-17.9 9.8-24.2 6.3-6.3 14.4-9.8 24.2-9.8 9.2 0 17.9 4 24.2 9.8 6.3 6.3 9.8 14.4 9.8 24.2 0 8.1 6.9 15 15 15s15-6.9 15-15c0-9.2 4-17.9 9.8-24.2 6.3-6.3 14.4-9.8 24.2-9.8 9.2 0 17.9 4 24.2 9.8 6.3 6.3 9.8 14.4 9.8 24.2v140.6c0 11.5 4.6 22.5 12.7 29.9 7.5 7.5 18.4 12.7 29.9 12.7s22.5-4.6 29.9-12.7c7.5-7.5 12.7-18.4 12.7-29.9 0-8.1-6.9-15-15-15s-15 6.9-15 15c0 3.5-1.2 6.9-3.5 9.2-2.3 2.3-5.2 3.5-8.6 3.5-3.5 0-6.9-1.2-8.6-3.5-2.3-2.3-3.5-5.2-3.5-8.6V329.4c0-9.2 4-17.9 9.8-24.2 6.3-6.3 14.4-9.8 24.2-9.8 9.2 0 17.9 4 24.2 9.8 6.3 6.3 9.8 14.4 9.8 24.2 0 8.1 6.9 15 15 15s15-6.9 15-15c0-9.2 4-17.9 9.8-24.2 6.3-6.3 14.4-9.8 24.2-9.8 8.6 0 16.7 3.5 22.5 8.6 6.3 5.2 10.4 12.7 10.9 21.3 1.2 7.5 7.5 13.2 15 13.2 8.1 0 14.4-6.9 14.4-15-1.9-56.3-26.1-107.5-63.6-144.4zm-1.1 86.4c-17.3 0-33.4 6.9-44.9 18.4l-4 4c-1.2-1.7-2.3-2.9-4-4-11.5-11.5-27.6-18.4-44.9-18.4-17.3 0-33.4 6.9-44.9 18.4l-4 4c-1.2-1.7-2.3-2.9-4-4-11.5-11.5-27.6-18.4-44.9-18.4s-33.4 6.9-44.9 18.4l-4 4c-1.2-1.7-2.3-2.9-4-4-11.5-11.5-27.6-18.4-44.9-18.4-8.6 0-16.7 1.7-24.2 4.6 9.2-25.9 23.6-49.5 43.2-68.5 32.8-32.8 77.8-53 127.3-53 49 0 93.3 19.6 125.6 50.7 20.2 19.6 35.7 43.8 44.9 70.3-7.3-2.4-15.4-4.1-23.4-4.1zM353.3 120.9c8.1 0 15-6.9 15-15V64.5c0-8.6-6.3-15-15-15-8.1 0-15 6.9-15 15V106c.1 8 7 14.9 15 14.9zM254.3 108.9c8.1 0 15-6.9 15-15V52.4c0-8.1-6.9-15-15-15s-15 6.9-15 15v41.5c0 8 6.9 15 15 15zM305.5 117.5c8.1 0 15-6.3 15-15V14.4C319.9 6.9 313.6.6 306.1 0h-.6c-8.1 0-15 6.3-15 15v87.5c.1 8.1 6.4 15 15 15z'
        );
    case 'clouds':
        return (
            'M340.2 135.8c6.4 0 11.8-5.5 11.8-11.8V89c.1-6.3-5.4-11.8-11.8-11.8s-11.8 5-11.8 11.4v35.5c0 6.2 5.4 11.7 11.8 11.7zM436.5 168.6l25-25c4.5-4.6 4.5-11.8 0-16.4-4.6-4.6-11.8-4.6-16.4 0l-25 25c-4.6 4.6-4.6 11.8 0 16.4 4.6 4.6 11.9 4.5 16.4 0zM436.5 329.1c-4.6-4.6-11.8-4.6-16.4 0-4.6 4.6-4.6 11.8 0 16.4l25 25c4.6 4.6 11.8 4.6 16.4 0 4.5-4.6 4.5-11.8 0-16.4l-25-25zM500.2 237.3h-35c-6.4 0-11.8 5.5-11.8 11.8 0 6.3 5.5 11.8 11.8 11.8h35c6.4 0 11.8-5.5 11.8-11.8 0-6.8-5.5-11.8-11.8-11.8zM418.8 282.6c4.5-10.4 6.8-22.2 6.8-33.6 0-23.7-9.6-45.5-25.5-61-15.5-15.5-37.3-25.5-61-25.5-15.9 0-31.4 4.6-44.6 12.3-9.6 5.9-18.2 13.7-25 22.8-1.8-1.4-4.1-3.2-5.9-4.6-20-14.1-44.1-21.9-69.6-21.9-30 0-58.2 10.9-79.6 29.6-19.1 16.4-33.2 39.1-39.6 65-19.6 2.3-36.9 10.9-50 24.1-15.5 15.5-25 36.4-25 60 0 23.2 9.6 44.6 25 60 15.5 15.5 36.4 25 60 25h228.6c27.3-.5 51.4-10.9 68.7-28.7 17.3-17.3 28.2-41.4 28.2-68.2 0-11.4-1.8-22.8-5.9-32.8 6.2-6.6 11.2-14.3 14.4-22.5zm-54.1 109.2c-13.2 13.2-31.4 21.4-51.9 21.4H86.1c-17.3-1.8-32.3-8.7-43.7-20-10.9-10.9-18.2-26.4-18.2-43.2 0-16.8 6.8-32.3 18.2-43.2 10.9-10.9 26.4-18.2 43.2-18.2 1.8 0 4.1-.5 5.5-1.4 2.8-1.8 4.6-4.6 5-7.8 3.7-24.1 15.9-45 33.2-60s40-23.7 64.6-23.7c20.5 0 40 6.4 56.4 17.8 12.8 8.7 23.7 20.9 30.9 35-2.8.9-5 1.8-7.3 3.2-12.3 5.5-23.7 13.7-32.8 24.1-4.1 5-3.7 12.3.9 16.4 5 4.1 12.3 3.7 16.4-.9 6.8-7.8 15.5-14.1 24.6-18.2 9.1-4.1 19.6-6.4 30-6.4 20 0 38.7 8.2 51.9 21.4 13.2 13.2 21.4 31.4 21.4 51.9-.3 20.4-8.4 38.6-21.6 51.8zm33.1-118.7c-1.4 3.2-2.8 5.9-4.6 9.1-3.2-4.6-6.8-8.7-10.5-12.3-17.3-17.3-41.4-28.2-68.2-28.2-2.8 0-5.9 0-8.7.5-4.6-10.5-10.9-19.6-18.2-28.2 5-7.8 11.8-14.1 19.6-19.1 9.6-5.9 20.9-9.1 32.8-9.1 17.3 0 33.2 6.8 44.6 18.2 11.4 11.4 18.2 27.3 18.2 44.6 0 8.6-1.8 16.8-5 24.5z'
        );
    case 'mist':
    case 'haze':
        return (
            'M477.1 214.8c-21.8-21.8-51.9-34.9-85.2-34.9-3.8 0-7.6 0-11.5.5-11.5-25.1-29.5-45.9-51.3-61.1C304 101.8 274 92 242.4 92c-37.7 0-72.1 13.6-99.3 36.6-24 20.7-41.5 48.6-49.1 81.3-24.6 2.7-46.4 13.6-62.8 30C12 259 0 285.2 0 314.7c0 28.9 12 55.7 31.1 74.8C50.2 408 76.4 420 105.9 420h286c33.3 0 63.3-13.6 85.2-34.9 21.8-21.8 34.9-51.9 34.9-85.2s-13.6-63.3-34.9-85.1zm-21.9 149.5c-16.9 16.9-39.8 26.7-65 26.7H105.9c-21.3 0-40.9-8.7-54.6-22.9-14.2-14.2-22.9-33.3-22.9-54.6 0-20.7 8.7-39.8 22.4-54 14.2-14.2 33.3-22.9 54.6-22.9 2.2 0 4.4-.5 6-1.6h.5c3.3-2.2 5.5-5.5 6-9.8 4.4-30.6 20.2-56.8 42-75.3s50.2-30 80.8-30c26.2 0 50.8 8.2 71 22.4 16.4 11.5 30 26.2 39.3 44.2-3.3 1.1-6.6 2.7-9.8 3.8-15.3 7.1-28.9 16.9-40.4 30-4.9 6-4.4 14.7 1.1 19.7 6 4.9 14.7 4.4 19.7-1.1 8.7-9.8 19.1-17.5 31.1-22.9 11.5-5.5 24.6-8.2 37.7-8.2 25.7 0 48.6 10.4 65 26.7 16.9 16.9 26.7 39.8 26.7 65-.1 25.5-10.5 48.5-26.9 64.8z'
        );
    default:
        return '';
    }
};

const I = styled('i')`
    ${size('18px')};
    display: inline-block;
    vertical-align: middle;
    ${propStyles({
        iconSm: [iconSm],
        iconLg: [iconLg],
        xlg: [iconXlg],
        huge: [iconHuge],
        black: [fillBlack],
        white: [fillWhite],
    })};
`;

const Path = styled('path')`
    ${propStyles({
        black: [fillBlack],
        white: [fillWhite],
        green: [fillGreen],
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

Icon.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Icon;
