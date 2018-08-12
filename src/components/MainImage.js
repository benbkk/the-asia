import React from 'react';
import LazyLoad from 'react-lazyload';
import Imgix from 'react-imgix';
import PropTypes from 'prop-types';
import { Img, ImageWrapper } from 'static/Img';
import WeatherTime from 'components/Weather';

const MainImage = ({ src, alt, style }) => (
    <React.Fragment>
        <WeatherTime className="weather-time" />
        <LazyLoad height={380}>
       
            <ImageWrapper
                className="image-wrapper"
                style={style}
            >
                <img
                    className={Img}
                    src={src}
                    alt={alt}
                />
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
        </LazyLoad>
    </React.Fragment>
);

MainImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    style: PropTypes.object.isRequired,
};

export default MainImage;
