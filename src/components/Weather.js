import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { inilineBlock, block } from 'css/utilities';

const WeatherWrapper = styled('span')`
    display: block;
`;

const Weather = (props) => {
    const { temp, desc } = props;
    return (
        <WeatherWrapper>
            <span
                className={`${block} temperature`}
            >
                {`${temp} C`}
            </span>
            <span
                className={`${block} description`}
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
