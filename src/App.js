import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import HomePage from './pages/home';

class App extends Component {

    render() {
        return (
            <Router>
                <div className="app">
                    <Route exact path="/" component={HomePage} />
                </div>
            </Router>
        );
    }
}

export default App;
