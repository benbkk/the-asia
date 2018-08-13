import React, { Component } from 'react';
import Loading from 'static/Loader';
import Screen from 'components/Screen';
import {
    List, CarouselWrapper, cityItem, slideVisible, slideHidden,
} from 'static/Elements';
import Icon from 'static/Icons';
import Button, { btnNext, btnPrev } from 'static/Button';
import 'whatwg-fetch';
import { css } from 'react-emotion';
import { palette } from 'css/variables';
import { getCitiesData, getWeather } from '../api';

export default class Carousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            cities: [],
            weatherData: [],
            city: {},
            weather: {},
            currentIndex: 0,
        };
    }

    async componentDidMount() {
        const { isLoading, currentIndex } = this.state;
        const cities = await getCitiesData();
        const city = cities[currentIndex];

        const weatherData = await getWeather();
        const weather = await weatherData
            .find(weatherCity => weatherCity.place === cities[currentIndex].name);

        this.setState({
            isLoading: !isLoading,
            cities,
            city,
            weatherData,
            weather,
        });
    }

    componentDidUpdate(prevProps, prevState) {
        const { weatherData, city } = this.state;

        if (prevState.city !== city) {
            const weather = weatherData.find(weatherCity => weatherCity.place === city.name);
            this.updateWeather(weather);
        }
    }

    updateWeather = (weather) => {
        this.setState({
            weather,
        });
    }

    handlePrev = () => {
        const { cities, currentIndex } = this.state;
        if (currentIndex === 0) {
            this.setState({
                currentIndex: cities.length,
            });
        }
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
            city: cities[prevState.currentIndex - 1],
        }));
    }

    handleNext = () => {
        const { cities, currentIndex } = this.state;
        if (currentIndex === cities.length - 1) {
            this.setState({
                currentIndex: -1,
            });
        }
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            city: cities[prevState.currentIndex + 1],
        }));
    }

    render() {
        const { cities, currentIndex, weather } = this.state;
        if (!cities || cities.length === 0) return <Loading />;
        const screenImg = cities[currentIndex].main_image;
        const bgCarousel = css`
            &:after {
                content: '';
                display: block;
                position: absolute;
                background: url(${screenImg}) center no-repeat;
                background-size: cover;
                background-blend-mode: overlay;
                width: 100vw;
                height: 100%;
                filter: grayscale(90%);
                opacity: 0.15;
            }

            &:before {
                content: '';
                position: absolute;
                display: block;
                width: 100vw;
                height: 100%;
                background: ${palette.green};
            }
        `;
        return (
            <CarouselWrapper className={`carousel-wrapper ${bgCarousel}`}>
                <List none>
                    {cities.map((city, i) => (
                        <li
                            className={`${(i === currentIndex) ? slideVisible : slideHidden} ${cityItem}`}
                            key={city.id}
                        >
                            <Screen
                                active={i === currentIndex}
                                city={city}
                                weather={weather}
                            />
                        </li>
                    ))}
                </List>
                <Button
                    className={`${btnPrev} previous`}
                    transparent
                    onClick={this.handlePrev}
                    // disabled={currentIndex === 0}
                >
                    <Icon name="back" black />
                </Button>
                <Button
                    className={`${btnNext} next`}
                    transparent
                    onClick={this.handleNext}
                    // disabled={currentIndex === cities.length - 1}
                >
                    <Icon name="next" black />
                </Button>
            </CarouselWrapper>
        );
    }
}
