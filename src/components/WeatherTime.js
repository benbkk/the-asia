import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { absTopRight, gradientBlackShade } from 'css/utilities';
import Weather from 'components/Weather';
import Time from 'components/Time';

const WeatherTimeWrapper = styled('span')`
    display: block;
    position: absolute;
    z-index: 4;
    top: 1rem;
    right: 1rem;
    backface-visibility: hidden;
    transition: opacity 0.2s ease-in-out;

    ${gradientBlackShade}
`;

const WeatherTime = (props) => {
    const { weather } = props;
    const { temp, desc, time } = weather;
    return (
        <WeatherTimeWrapper>
            <Weather temp={temp} desc={desc} />
            <Time time={time} />
        </WeatherTimeWrapper>
    );
};

WeatherTime.propTypes = {
    weather: PropTypes.object,
};

WeatherTime.defaultProps = {
    weather: {
        temp: 20,
        desc: 'Sunny',
        time: Date.now(),
    },
};

export default WeatherTime;
