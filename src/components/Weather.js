import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { inlineBlock, block, textHuge, vmiddle, right, mgrHalf } from 'css/utilities';
import Icon from 'static/Icons';

const WeatherWrapper = styled('span')`
    display: block;
    color: white;
    position: relative;
    line-height: 1;
`;

const transformDown = css`
    transform: translateY(-3px);
`;

const Weather = (props) => {
    const { temp, desc } = props;
    const iconName = desc.toLowerCase();
    return (
        <WeatherWrapper>
            <span className={`${inlineBlock} ${vmiddle} ${mgrHalf} ${transformDown} weather-icon`}>
                <Icon name={iconName} white huge />
            </span>
            <span
                className={`${inlineBlock} ${vmiddle} ${textHuge} temperature`}
            >
                {`${Math.ceil(temp)}`}
                &deg;c
            </span>
            <span
                className={`${block} ${right} description`}
            >
                {desc}
            </span>
        </WeatherWrapper>
    );
};

Weather.propTypes = {
    temp: PropTypes.number,
    desc: PropTypes.string,
};

Weather.defaultProps = {
    temp: 20,
    desc: 'Sunny',
};

export default Weather;
