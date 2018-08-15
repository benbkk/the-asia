import React, { Component } from 'react';
// import Imgix from 'react-imgix';
import PropTypes from 'prop-types';
import { Img, ImageWrapper } from 'static/Img';
import WeatherTime from 'components/WeatherTime';
import Loading from 'static/Loader';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

class MainImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
        };
    }

        afterLoad = () => {
            this.setState({
                isLoaded: true,
            });
        }

        render() {
            const { isLoaded } = this.state;
            const isLoading = !isLoaded ? { opacity: 0 } : { opacity: 1 };
            const { style, src, alt } = this.props;
            return (
                <ImageWrapper
                    className="image-wrapper"
                    style={style}
                >
                    { !isLoaded && <Loading /> }
                    <LazyLoadImage
                        className={Img}
                        src={src}
                        alt={alt}
                        threshold={100}
                        afterLoad={this.afterLoad}
                        style={isLoading}
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
                    <WeatherTime
                        className="weather-time"
                        style={isLoading}
                        {...this.props}
                    />
                </ImageWrapper>
            );
        }
}

MainImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    style: PropTypes.object.isRequired,
};

export default MainImage;
