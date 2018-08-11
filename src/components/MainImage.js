import React from 'react';
import LazyLoad from 'react-lazyload';
import PropTypes from 'prop-types';
import { Img, ImageWrapper } from 'static/Img';

const MainImage = ({ src, alt, ...props }) => (
    <LazyLoad height={380}>
        <ImageWrapper
            className="image-wrapper"
            {...props}
        >

            <Img
                src={src}
                alt={alt}
            />

        </ImageWrapper>
    </LazyLoad>
);

MainImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default MainImage;
