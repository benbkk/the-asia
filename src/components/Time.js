import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import moment from 'moment';

const TimeWrapper = styled('span')`
    display: block;
`;

const Time = (props) => {
    const { time } = props;
    const readableTime = moment(new Date(time)).format('LT');
    return (
        <TimeWrapper>
            { readableTime }
        </TimeWrapper>
    );
};

Time.propTypes = {
    time: PropTypes.number,
};

Time.defaultProps = {
    time: Date.now(),
};

export default Time;
