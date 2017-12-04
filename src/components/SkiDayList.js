import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


import { SkiDayRow } from './SkiDayRow'

export const SkiDayList = ({days, filter}) => {
  const filteredDays = (!filter || !filter.match(/powder|backcountry/)) ?
                      days : days.filter(day => day[filter] )

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Resort</th>
          <th>Powder</th>
          <th>Backcountry</th>
        </tr>
        <tr>
          <td colSpan={4}>
            <Link to='/list-days'>All days</Link>
            <Link to='/list-days/powder'>Powder days</Link>
            <Link to='/list-days/backcountry'>Backcountry days</Link>
          </td>
        </tr>
      </thead>
      <tbody>
        {filteredDays.map((day, i) =>
            <SkiDayRow key={i} {...day} />
        )}
      </tbody>
    </table>
  )
}

SkiDayList.propTypes = {
  days: function(props){
    if(!props.days.length){
      return new Error (
        "SkiDayList must have atleast one record"
      )
    }else if(!Array.isArray(props.days)){
      return new Error (
        "SkiDayList should be an array"
      )
    }else{
      return null
    }
  }
}
