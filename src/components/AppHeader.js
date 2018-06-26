import React from 'react';
import { bgBlue } from 'config/cssVars';
import Header from 'static/Header';
import Container from 'static/Container';
import VerticalAlign from 'static/VerticalAlign';
import P from 'static/Text';
import H1 from 'static/Headline';

export default props => (
    <Header className={`app-header ${bgBlue}`}>
        <VerticalAlign className={'v-middle'} middle>
            <Container className={'container'}>
                <H1 center uppercase blend>Stop Looking at Me</H1>
                <P center blend>...and get back to work</P>  
            </Container>
        </VerticalAlign> 
    </Header>        
);