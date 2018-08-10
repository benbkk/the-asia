import React from 'react';
import { Motion, spring } from 'react-motion';
import MainImage from './MainImage';

export default props => (
    <Motion
        defaultStyle={{ scale: 0, opacity: 0 }}
        style={{
            scale: spring(1, { stiffness: 60, damping: 10 }),
            opacity: spring(1, { stiffness: 60, damping: 20 }),
        }}
    >
        {interpolatedStyle => <MainImage scale={interpolatedStyle.scale} {...props} />}
    </Motion>
);
