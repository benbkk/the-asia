import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import moment from 'moment';
import { palette } from 'css/variables';
import { textLg} from 'css/utilities';

const TimeWrapper = styled('span')`
    display: block;
    color: ${palette.white};
    text-align: right;
    position: relative;
    z-index: 2;
`;

const Time = (props) => {
    const { time } = props;
    const readableTime = moment(new Date(time)).format('LT');
    return (
        <TimeWrapper className={textLg}>
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
