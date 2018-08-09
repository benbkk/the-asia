import styled from 'react-emotion';
import propStyles from 'prop-styles';
import {
    btnTransparent,
    bgBlack,
    bgGreen,
    bgOrange,
    bgGrayLightest,
    outlineGreen,
    outlineGrayLightest,
} from 'css/utilities';
import { family } from 'css/variables';

export default styled('button')`
    padding: 6px 8px;
    display: inline-block;
    vertical-align: middle;
    border-color: transparent;
    box-shadow: none;
    color: currentColor;
    background-color: transparent;
    ${family.raleway};
    font-weight: 700;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color, border-color 0.2s ease-in-out;
    margin-right: 9px;
    -webkit-appearance: none;

    &:hover,
    &:focus,
    &:active {
        opacity: 1;
    }

    &:active {
        transform: translateY(1px);
    }

    &:disabled {
        opacity: 0.25;
        cursor: default;

        &:active {
            transform: translateY(0);
        }
    }

    ${propStyles({
        transparent: [btnTransparent],
        outlineGrayLightest: [outlineGrayLightest],
        outlineGreen: [outlineGreen],
        orange: [bgOrange],
        grayLight: [bgGrayLightest],
        green: [bgGreen],
        black: [bgBlack],
    })};
`;
