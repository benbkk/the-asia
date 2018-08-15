import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { absTopRight, gradientBlackShade } from 'css/utilities';
import Weather from 'components/Weather';
import Time from 'components/Time';

const WeatherTimeWrapper = styled('span')`
    display: block;
    padding: 9px 18px;
    margin: 9px 18px;
    backface-visibility: hidden;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;


`;
const WeatherTime = (props) => {
    const { weather, style } = props;
    const { temp, desc, time } = weather;
    return (
        <WeatherTimeWrapper className={`${absTopRight} ${gradientBlackShade}`} style={{ opacity: style.opacity }}>
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
