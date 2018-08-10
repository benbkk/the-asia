import React from 'react';
import { Img, ImageWrapper } from 'static/Img';

export default ({ src, alt, ...props}) => (
    <ImageWrapper 
        className="image-wrapper"
        {...props}
    >
        <Img
            src={src}
            alt={alt}
        />
    </ImageWrapper>
);
