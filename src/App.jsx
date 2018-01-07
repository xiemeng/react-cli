import React, { Component } from 'react'
import {Provider} from 'react-redux';
import FastClick from 'fastclick';

import route from './router';
import store from './store';


FastClick.attach(document.body)

class App extends Component{
    render() {
        return (
            <Provider store={store}>
                {route}
            </Provider>
        )
    }
}

export default App