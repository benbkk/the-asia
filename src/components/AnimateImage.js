import React from 'react';
import { Motion, spring } from 'react-motion';
import { ImageWrapper } from 'static/Img';

export default props => (
    <Motion
        defaultStyle={{y: -500, opacity: 0}}
        style={{
            y: spring(ImageWrapper ? 0 : -500),
            opacity: spring(ImageWrapper ? 1 : 0)
        }}
        {...props}
    >
        {style => (
            <ImageWrapper
                style={{
                    transform: `translateY(${style.y}px)`,
                    opacity: style.opacity,
                }}>
                {props.children}
            </ImageWrapper>
        )}
    </Motion>
);
