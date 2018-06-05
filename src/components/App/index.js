import React from 'react';
import AppHeader from 'static/AppHeader';
import Container from 'static/Container';
import AlignMiddle from 'static/AlignMiddle';
import Main from 'static/Main';

export default () => (
    <div>
    <AppHeader>
        <Container>
            <AlignMiddle>
                <h1>Hello, Bozo.</h1>
               
                <p>Is this really working?</p>
            </AlignMiddle>    
        </Container>
    </AppHeader>
    <Main>
        <Container>
            <h2>I am an H2</h2>
                <h3>I am an H3</h3>
                <h4>I am an H4</h4>
        </Container>    
    </Main>
    </div>
);