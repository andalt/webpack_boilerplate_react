import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from '../containers/Home';
import NoMatch from '../components/NoMatch';
import About from '../components/About';
import App from './App';

console.log(process.env.NODE_ENV);

function AppConfigureRoutes() {
    return (
        <App>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route component={NoMatch} />
            </Switch>
        </App>
    );
}

export default AppConfigureRoutes;
