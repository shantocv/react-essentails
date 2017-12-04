import { Component } from 'react'

import { Header } from './Header'
import { SkiDayList } from './SkiDayList'
import { SkiDayCount } from './SkiDayCount'
import { AddDayForm } from './AddDayForm'

export class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      allSkiDays:
            [
              {
                resort: "Squaw Valley",
                date: new Date("2/12/1990"),
                powder: true,
                backcountry: false
              },
              {
                resort: "Kirkwood",
                date: new Date("3/12/1990"),
                powder: true,
                backcountry: false
              },
              {
                resort: "Mt. Tallac",
                date: new Date("4/12/1990"),
                powder: false,
                backcountry: true
              }
            ]
    }
  }

  countDays(filter){
    var allSkiDays =  this.state.allSkiDays
    return allSkiDays.filter((day) => (filter) ? day[filter] : day).length
  }

  render(){
    return(
      <div className="container">
        <Header />
        {
          (this.props.location.pathname === '/') ?
          <SkiDayCount total={this.countDays()}
                       powder={this.countDays('powder')}
                       backcountry={this.countDays('backcountry')}
          /> :
          (this.props.location.pathname === '/add-day') ?
          <AddDayForm /> :
          <SkiDayList days={this.state.allSkiDays} filter={this.props.match.params.filter} />
        }
      </div>
    )
  }
}
