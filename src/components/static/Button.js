import styled, { css } from 'react-emotion';
import propStyles from 'prop-styles';
import { position } from 'polished';
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
    font-size: 14px;
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
    margin-right: 6px;
    margin-bottom: 6px;
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
        opacity: 0.5;
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

export const btnPrev = css`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 5;
    width: 40px;
    margin: auto;
    opacity: 0.25;

    &:hover,
    &:active,
    &:focus {
        opacity: 1;
    }

    &:disabled {
        opacity: 0.1;
    }
`;

export const btnNext = css`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 5;
    margin: auto;
    width: 40px;
    opacity: 0.25;

    &:hover,
    &:active,
    &:focus {
        opacity: 1;
    }

    &:disabled {
        opacity: 0.1;
    }
`;
