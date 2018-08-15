import React from 'react';
import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';
import Caption from 'components/Caption';

const AnimateCaption = (props) => {
    const { active } = props;
    return (
        <Motion
            defaultStyle={{ x: -900, opacity: 0 }}
            style={{
                x: spring(active ? 0 : -900, { stiffness: 60, damping: 15 }),
                opacity: spring(active ? 1 : 0),
            }}
        >
            {style => (
                <Caption
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

AnimateCaption.propTypes = {
    active: PropTypes.bool.isRequired,
};

export default AnimateCaption;
