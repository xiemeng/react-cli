import React from 'react'
import {
    Router,
    Route,
    Switch
} from 'react-router'

import { createHashHistory } from 'history'

import Home from '../pages/Home'
import Hello from '../pages/Hello'

const history  = createHashHistory()

const AppRouter = (
    <Router history={history}>
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/Hello" component={Hello}/>
        </Switch>
    </Router>
)

export default AppRouter