import styled from 'react-emotion';
import propStyles from 'prop-styles';
import {
    bgBlack,
    bgGreen,
    bgOrange,
    bgGrayLightest,
} from 'css/utilities';

export default styled('button')`
    padding: 8px;
    display: inline-block;
    vertical-align: middle;
    border-color: transparent;
    box-shadow: none;
    color: currentColor;
    background-color: transparent;
    border-radius: 2px;
    cursor: pointer;
    opacity: 0.8;
    transition: opacity 0.2s ease-in-out;

    &:hover,
    &:focus,
    &:active {
        opacity: 1;
    }

    &:active {
        transform: translateY(1px);
    }

    ${propStyles({
        orange: [bgOrange],
        grayLight: [bgGrayLightest],
        green: [bgGreen],
        black: [bgBlack],
    })};
`;
