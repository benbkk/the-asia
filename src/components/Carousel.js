import React, { Component } from 'react';
import { Container } from 'static/Elements';
import Loading from 'static/Loader';
import Screen from 'components/Screen';
import Icon from 'static/Icons';
import Button from 'static/Button';
import 'whatwg-fetch';
import styled, { css } from 'react-emotion';
import { clearFix, position } from 'polished';

const Wrapper = styled('div')`
    position: relative;
    width: 100%;
    transform: ${props => `scale(${props.scale})`};
`;

const btnPrev = css`
    ${position('absolute', '0')};
    left: 0;
    z-index: 3;
`;

const btnNext = css`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 3;
`;
export default class Carousel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cities: [],
            currentIndex: 0,
            city: {},
        };
    }

    async componentDidMount() {
        const { currentIndex } = this.state;
        let response = await fetch('https://recruitment.theasiadev.com/Cities/getCitySlider');
        let json = await response.json();
        const { cities } = json;
        this.setState({
            cities,
            city: cities[currentIndex],
        });

        response = await fetch('http://api.openweathermap.org/data/2.5/group?id=1609350,1614295,1583992,1846266,1153671,1153669,1880252,1151254,1152633,1822214,1821306,1831142,1581130,1566083,1835848,1838524,1580541&APPID=2aedec2b406f52785990885fab552198');
        json = await response.json();
        const citiesWeather = json.list;
        console.log(citiesWeather);
    }

    componentDidUpdate(prevProps, prevState) {
        const { currentIndex } = this.state;
        if (prevState.currentIndex !== currentIndex) {
            this.updateCity();
        }
    }

    updateCity = () => {
        const { cities, currentIndex } = this.state;
        this.setState({
            city: cities[currentIndex],
        });
    }

    handlePrev = () => {
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
        }));
    }

    handleNext = () => {
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
        }));
    }

    render() {
        const { cities, city, currentIndex } = this.state;
        const { scale } = this.props;
        if (!cities || cities.length === 0) return <Loading />;

        
        return (
            <Container className="container">
                <Wrapper className="carousel-wrapper" scale={scale}>
                    <Screen {...city} />
                    <Button
                        className={`${btnPrev} previous`}
                        transparent
                        onClick={this.handlePrev}
                        disabled={currentIndex === 0}
                    >
                        <Icon name="back" black />
                    </Button>
                    <Button
                        className={`${btnNext} next`}
                        transparent
                        onClick={this.handleNext}
                        disabled={currentIndex === cities.length - 1}
                    >
                        <Icon name="next" black />
                    </Button>
                </Wrapper>
            </Container>
        );
    }
}
