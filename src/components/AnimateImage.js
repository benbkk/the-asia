import React from 'react';
import { Motion, spring } from 'react-motion';
import MainImage from 'components/MainImage';

export default props => (
    <Motion
        defaultStyle={{y: -500, opacity: 0}}
        style={{
            y: spring(MainImage ? 0 : -500),
            opacity: spring(MainImage ? 1 : 0)
        }}
        {...props}
    >
        {style => (
            <MainImage
                style={{
                    transform: `translateY(${style.y}px)`,
                    opacity: style.opacity,
                }}
                {...props}
            />
        )}
    </Motion>
);
