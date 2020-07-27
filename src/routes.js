import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/main'
import Car from './pages/car'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/cars/:id" component={Car} />
        </Switch>
    </BrowserRouter>
)

export default Routes