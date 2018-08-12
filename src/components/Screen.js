import React from 'react';
import PropTypes from 'prop-types';
import AnimateCaption from 'components/AnimateCaption';
import styled from 'react-emotion';
import { rem } from 'polished';
import AnimateImage from './AnimateImage';


const Figure = styled('figure')`
    margin: ${rem('18px', '16px')} 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    display: table;
`;

const Screen = ({active, city, style}) => {
    const { name, main_image, description } = city;
    return (
        <Figure className="screen">
            <AnimateImage
                src={main_image}
                alt={name}
                active={active}
                style={style}
            />
            <AnimateCaption
                name={name}
                description={description}
                active={active}
                style={style}
            />
        </Figure>
    );
};

Screen.propTypes = {
    active: PropTypes.bool.isRequired,
};

export default Screen;
