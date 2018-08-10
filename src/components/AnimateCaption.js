import React from 'react';
import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';
import Caption from 'components/Caption';

const AnimateCaption = (props) => {
    const { active } = props;
    return (
        <Motion
            defaultStyle={{ x: -1200, opacity: 0 }}
            style={{
                x: spring(active ? 0 : -1200, { stiffness: 60, damping: 30 }),
                opacity: spring(active ? 1 : 0, { stiffness: 60, damping: 30 }),
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