import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Container from 'static/Container';
import AlignMiddle from 'static/AlignMiddle';

const AppHeader = props => (
    <Header>
        <Container>
            <AlignMiddle>
                <h1>Hello, Bozo.</h1>
               
                <p>Is this really working?</p>
            </AlignMiddle>    
        </Container>    
    </Header>        
);

AppHeader.propTypes = {
    children: PropTypes.node,
}

export default AppHeader;