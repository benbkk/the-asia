import React, { Component } from 'react';
import Loading from 'static/Loader';
import Screen from 'components/Screen';
import { Container, List } from 'static/Elements';
import Icon from 'static/Icons';
import Button from 'static/Button';
import 'whatwg-fetch';
import styled, { css } from 'react-emotion';
import { position } from 'polished';
import { mediaQueries } from '../css/variables';

const Wrapper = styled('div')`
    position: relative;
    max-width: 100%;
    overflow: hidden;
    height: 420px;

    ${mediaQueries.tabletS} {
        overflow: initial;
    }
`;

const h100 = css`
    height: 100%;
    overflow: hidden;
`;

const absolute = css`
    position: absolute;
    top: 0;
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

const slideHidden = css`
    width: 0;
    height: 0;
    opacity: 0;
    overflow: hidden;
    transition:  opacity 0.3s ease-in-out;
`;

const slideVisible = css`
    width: auto;
    opactity: 1;
    transition:  opacity 0.3s ease-in-out;
`;
export default class Carousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            cities: [],
            currentIndex: 0,
        };
    }

    async componentDidMount() {
        const { isLoading } = this.state;
        this.setState({
            isLoading: !isLoading,
        });
        let response = await fetch('https://recruitment.theasiadev.com/Cities/getCitySlider');
        let json = await response.json();
        const { cities } = json;
        this.setState({
            cities,
            isLoading: !isLoading,
        });

        response = await fetch('http://api.openweathermap.org/data/2.5/group?id=1609350,1614295,1583992,1846266,1153671,1153669,1880252,1151254,1152633,1822214,1821306,1831142,1581130,1566083,1835848,1838524,1580541&APPID=2aedec2b406f52785990885fab552198');
        json = await response.json();
        const citiesWeather = json.list;
        console.log(citiesWeather);
    }

    /* componentDidUpdate(prevProps, prevState) {
        const { currentIndex } = this.state;
        if (prevState.currentIndex !== currentIndex) {
            this.updateCity();
        }
    } */

    /*     updateCity = () => {
        const { cities, currentIndex } = this.state;
        this.setState({
            city: cities[currentIndex],
        });
    } */

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
        const { cities, currentIndex } = this.state;
        if (!cities || cities.length === 0) return <Loading />;
        return (
            <Container className="container">
                <Wrapper className="carousel-wrapper">
                    <List className={h100} none>
                        {cities.map((city, i) => (
                            <li
                                className={`${(i === currentIndex) ? slideVisible : slideHidden} ${absolute}`}
                                key={city.id}
                                {...this.props}
                            >
                                <Screen
                                    active={i === currentIndex}
                                    {...city}
                                    {...this.props}
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
