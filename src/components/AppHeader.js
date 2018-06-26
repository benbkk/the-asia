import React from 'react';
import glamorous from 'glamorous';
import { palette, center } from 'config/cssVars';
import Container from 'static/Container';
import VerticalAlign from 'static/VerticalAlign';
import P from 'static/Text';
import H1 from 'static/Headline';

const Header = glamorous.header({
    backgroundColor: palette.blue,
    height: '400px',
    minHeight: '400px',
    position: 'relative',
})

export default props => {
    return (
        <Header className={'app-header'}>
            <VerticalAlign middle>
                <Container className={'container'}>
                    <H1 center uppercase blend>Stop Looking at Me</H1>
                    <P center blend>...and get back to work</P>  
                </Container>
            </VerticalAlign> 
        </Header>        
    );
};