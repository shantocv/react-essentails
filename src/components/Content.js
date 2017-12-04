import { Switch, Route } from 'react-router-dom'
import { render } from 'react-dom'
import { Component } from 'react'

import { SkiDayList } from './SkiDayList'
import { SkiDayCount } from './SkiDayCount'
import { Whoops404 } from './Whoops404'
import { AddDayForm } from './AddDayForm'
import { App } from './App'


export class Content extends Component {
  countDays(filter){
    var allSkiDays =  this.props.days
    return allSkiDays.filter((day) => (filter) ? day[filter] : day).length
  }

  render(){
    return(
      <Switch>
        <Route exact path='/' render={(props) => (
          <SkiDayCount total={this.countDays()}
                       powder={this.countDays('powder')}
                       backcountry={this.countDays('backcountry')}
          />
        )}/>

        <Route exact path='/list-days' render={ (props) => (
          <SkiDayList days={this.props.days} />
        )}/>

        <Route path='/list-days/:filter' render={ (props) => (
          <SkiDayList days={this.props.days} filter={this.props.params.filter} />
        )}/>

        <Route exact path='/sky_day_count' render={(props) => (
          <SkiDayCount total={this.countDays()}
                       powder={this.countDays('powder')}
                       backcountry={this.countDays('backcountry')}
          />
        )}/>

        <Route exact path="/add-day" component={AddDayForm}/>

        <Route component={Whoops404}/>

      </Switch>
    )
  }
}
