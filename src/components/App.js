import React from 'react';
import AppHeader from 'components/AppHeader';
import { Div } from 'glamorous';
import AppMain from 'components/AppMain';


export default () => (
    <Div className="app-wrapper">
        <AppHeader />
        <AppMain />
    </Div>    
);