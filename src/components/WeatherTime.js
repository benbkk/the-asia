import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { absTopRight } from 'css/utilities';
import Weather from 'components/Weather';
import Time from 'components/Time';

const WeatherTimeWrapper = styled('span')`
    display: block;
    padding: 9px;
`;
const WeatherTime = (props) => {
    const { weather } = props;
    const { temp, desc, time } = weather;
    return (
        <WeatherTimeWrapper className={absTopRight}>
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
