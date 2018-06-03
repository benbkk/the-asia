import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Container from 'static/Container';

const AppHeader = props => (
    <Header>
        {props.children}
    </Header>        
);

AppHeader.propTypes = {
    children: PropTypes.node,
}

export default AppHeader;