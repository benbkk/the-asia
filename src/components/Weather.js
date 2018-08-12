import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { inlineBlock, block, textHuge, vmiddle, right, vtop, mgrHalf } from 'css/utilities';
import Icon from 'static/Icons';

const WeatherWrapper = styled('span')`
    display: block;
    color: white;
`;

const Weather = (props) => {
    const { temp, desc } = props;
    const iconName = desc.toLowerCase();
    return (
        <WeatherWrapper>
            <span className={`${inlineBlock} ${vtop} ${mgrHalf} weather-icon`}>
                <Icon name={iconName} white huge />
            </span> 
            <span
                className={`${inlineBlock} ${vtop} ${textHuge} temperature`}
            >
                {`${Math.ceil(temp)} C`}
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
