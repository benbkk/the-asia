import React, { Component } from 'react';
import Loading from 'static/Loader';
import Screen from 'components/Screen';
import WeatherTime from 'components/Weather';
import { Container, List, CarouselWrapper } from 'static/Elements';
import Icon from 'static/Icons';
import Button, { btnNext, btnPrev } from 'static/Button';
import 'whatwg-fetch';
import { css } from 'react-emotion';
import { clearFix } from 'polished';
import { getWeather } from '../api';

const h100 = css`
    ${clearFix()};
    overflow: hidden;
`;

const absolute = css`
    position: absolute;
    top: 0;
    padding: 36px 45px;
`;

const slideHidden = css`
    width: 0;
    height: 0;
    opacity: 0;
    overflow: hidden;
    margin: 0;
    padding: 0;
    visibility: hidden;
`;

const slideVisible = css`
    width: 100%;
    opactity: 1;
    transition:  opacity 0.3s ease-in-out;
`;
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
        const response = await fetch('https://recruitment.theasiadev.com/Cities/getCitySlider');
        const json = await response.json();
        const { cities } = json;

        const weatherData = await getWeather();
        const weather = await weatherData.find(weatherCity => weatherCity.place === cities[currentIndex].name);
        

        this.setState({
            cities,
            city: cities[currentIndex],
            weatherData,
            weather,
            isLoading: !isLoading,
        });
    }

    async componentDidUpdate(prevProps, prevState) {
        const { weatherData, city } = this.state;
        
        if (prevState.city !== city) {
            const weather = await weatherData.find(weatherCity => weatherCity.place === city.name);
            console.log(weather);
            this.setState({
                weather,
            })
        }
    }

    handlePrev = () => {
        const { cities } = this.state;
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
            city: cities[prevState.currentIndex - 1],
        }));
    }

    handleNext = () => {
        const { cities } = this.state;
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            city: cities[prevState.currentIndex + 1],
        }));
    }

    render() {
        const { cities, currentIndex, weather } = this.state;
        if (!cities || cities.length === 0) return <Loading />;
        return (
            <Container className="container">
                <CarouselWrapper className="carousel-wrapper">
                    <List none>
                        {cities.map((city, i) => (
                            <li
                                className={`${(i === currentIndex) ? slideVisible : slideHidden} ${absolute}`}
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
                        disabled={currentIndex === 0}
                    >
                        <Icon name="back" green />
                    </Button>
                    <Button
                        className={`${btnNext} next`}
                        transparent
                        onClick={this.handleNext}
                        disabled={currentIndex === cities.length - 1}
                    >
                        <Icon name="next" green />
                    </Button>
                </CarouselWrapper>
            </Container>
        );
    }
}
