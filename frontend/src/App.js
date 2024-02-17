import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Explore from './components/Explore';
import Login from './components/Login';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/explore" component={Explore} />
                <Route path="/login" component={Login} />
            </Switch>
        </Router>
    );
}

export default App;