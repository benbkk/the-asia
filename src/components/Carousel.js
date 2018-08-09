import React, { Component } from 'react';
import { Container } from 'static/Elements';
import Loading from 'static/Loader';
import Screen from 'components/Screen';
import Icon from 'static/Icons';
import Button from 'static/Button';
import 'whatwg-fetch';
import styled from 'react-emotion';

const Wrapper = styled('div')`
    position: relative;
    width: 100%;
`;

export default class Carousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cities: [],
            currentIndex: 0,
        };
    }

    async componentDidMount() {
        const response = await fetch('https://recruitment.theasiadev.com/Cities/getCitySlider');
        const json = await response.json();
        const { cities } = json;

        this.setState({
            cities,
        });
    }
    
    handlePrev = () => {
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1
          }));
        console.log('Previous is Clicked');
    }

    handleNext = () => {
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1
          }));
        console.log('Next Button is Clicked', this.state.currentIndex);
    }

    render() {
        const { cities, currentIndex } = this.state;
        if (!cities || cities.length === 0) return <Loading />;

        const city = cities[currentIndex];
        return (
            <Container className="container">
                <Wrapper className="carousel-wrapper">
                    <Screen {...city} />
                    <nav>
                        <Button 
                            className="previous"
                            grayLight
                            onClick={this.handlePrev}
                        >
                            <Icon name="back" black />
                        </Button>
                        <Button 
                            grayLight
                            onClick={this.handleNext}
                        >
                            <Icon name="next" black />
                        </Button>
                    </nav>
                </Wrapper>
            </Container>    
        );
    }
}
