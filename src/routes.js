import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'Components/home';
import Detail from 'Components/detail';
import Login from 'Components/Login/login.jsx';
import Signup from 'Components/Signup/signup';
import Header from 'Common/header';
import Footer from 'Common/footer';

const Routers = () => (
    <div>
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/detail" component={Detail} />
        </Switch>
        <Footer />
    </div>
);

export default Routers;
