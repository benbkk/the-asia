import React from 'react';
import LazyLoad from 'react-lazyload';
import PropTypes from 'prop-types';
import { Img, ImageWrapper } from 'static/Img';

const MainImage = ({ src, alt, ...props }) => (
    <ImageWrapper
        className="image-wrapper"
        {...props}
    >
        <LazyLoad height={380}>
            <Img
                src={src}
                alt={alt}
            />
        </LazyLoad>
    </ImageWrapper>
);

MainImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default MainImage;
