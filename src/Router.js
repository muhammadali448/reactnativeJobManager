import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import loginForm from './containers/loginForm';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="login" component={loginForm} title={"Please Login"} />
        </Router>
    )
}

export default RouterComponent;