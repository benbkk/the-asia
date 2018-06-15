import React from 'react';
import AppHeader from 'components/AppHeader';
import { Div } from 'glamorous';
import Main from 'static/Main';


export default () => (
    <Div className="app-wrapper">
        <AppHeader />
        <Main />
    </Div>    
);