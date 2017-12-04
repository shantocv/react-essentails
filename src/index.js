import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { App } from './components/App'
import { Whoops404 } from './components/Whoops404'

window.React = React

console.log("Starting............")

render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />

      <Route exact path='/list-days' component={App}/>

      <Route path='/list-days/:filter' component={App}/>

      <Route exact path='/sky_day_count' component={App}/>

      <Route exact path="/add-day" component={App}/>

      <Route component={Whoops404}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('react-container')
)
