import React from 'react';
import LazyLoad from 'react-lazyload';
// import Imgix from 'react-imgix';
import PropTypes from 'prop-types';
import { Img, ImageWrapper } from 'static/Img';
import WeatherTime from 'components/WeatherTime';

const MainImage = (props) => {
    const { style, src, alt } = props;
    return (
        <ImageWrapper
            className="image-wrapper"
            style={style}
        >
            <WeatherTime
                className="weather-time"
                {...props}
            />
            <LazyLoad height={380}>
                <img
                    className={Img}
                    src={src}
                    alt={alt}
                />
            </LazyLoad>
            {/* <Imgix
                src={src}
                type="picture"
            >
                <Imgix
                    src={src}
                    className={Img}
                    width={800}
                    type="source"
                    imgProps={{ media: '(min-width: 768px)' }}
                />
                <Imgix
                    src={src}
                    className={Img}
                    width={800}
                    type="source"
                    imgProps={{ media: '(min-width: 320px)' }}
                />
                <Imgix
                    src={src}
                    type="img"
                    className={Img}
                    alt={alt}
                    aggressiveLoad
                    defaultWidth={100}
                />
            </Imgix> */}
        </ImageWrapper>
    );
};

MainImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    style: PropTypes.object.isRequired,
};

export default MainImage;
