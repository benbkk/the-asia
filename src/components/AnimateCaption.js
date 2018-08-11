import React from 'react';
import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';
import Caption from 'components/Caption';

const AnimateCaption = (props) => {
    const { active, name, description } = props;
    return (
        <Motion
            defaultStyle={{ x: -800, opacity: 0 }}
            style={{
                x: spring(active ? 0 : -800, { stiffness: 60, damping: 20 }),
                opacity: spring(active ? 1 : 0, { stiffness: 60, damping: 10 }),
            }}
        >
            {style => (
                <Caption
                    style={{
                        transform: `translateX(${style.x}px)`,
                        opacity: style.opacity,
                    }}
                    name={name}
                    description={description}
                />
            )}
        </Motion>
    );
};

AnimateCaption.propTypes = {
    active: PropTypes.bool.isRequired,
};

export default AnimateCaption;
