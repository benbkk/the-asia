import React from 'react';
import AppHeader from 'static/AppHeader';
import Container from 'static/Container';
import AlignMiddle from 'static/AlignMiddle';

export default () => (
    <AppHeader>
        <Container>
            <AlignMiddle>
                <h1>Hello. I am React.</h1>
            </AlignMiddle>    
        </Container>
    </AppHeader>    
);