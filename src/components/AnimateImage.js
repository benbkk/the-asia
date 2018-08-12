import React from 'react';
import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';
import MainImage from 'components/MainImage';

const AnimateImage = (props) => {
    const { active } = props;
    return (
        <Motion
            defaultStyle={{ x: 1200, opacity: 0 }}
            style={{
                x: spring(MainImage && active ? 0 : 1200, { stiffness: 60, damping: 20 }),
                opacity: spring(MainImage && active ? 1 : 0, { stiffness: 60, damping: 20 }),
            }}
        >
            {style => (
                <MainImage
                    style={{
                        transform: `translateX(${style.x}px)`,
                        opacity: style.opacity,
                    }}
                    {...props}
                />
            )}
        </Motion>
    );
};

AnimateImage.propTypes = {
    active: PropTypes.bool.isRequired,
};

export default AnimateImage;
