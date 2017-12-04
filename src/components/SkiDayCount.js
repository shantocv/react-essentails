import '../css/ui.scss'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import PropTypes from 'prop-types'

// var createReactClass = require('create-react-class');

const percentToDecimal = (decimal) => {
  return((decimal * 100) + '%')
}

const calcGoalProgress = (total, goal) => {
  return percentToDecimal(total/goal)
}

export const SkiDayCount = ({total, powder, backcountry, goal=100}) => (
    <div className="ski-day-count">
      <div className="total-days">
        <span>{total} <Calendar /> days</span>
      </div>
      <div className="powder-days">
        <span>{powder} <SnowFlake /> days</span>
      </div>
      <div className="backcountry-days">
        <span>{backcountry} <Terrain /> days</span>
      </div>
      <div className="goal">
        <span>{calcGoalProgress(total, goal)} completed</span>
      </div>
    </div>
)

SkiDayCount.propTypes = {
  total: PropTypes.number,
  powder: PropTypes.number,
  backcountry: PropTypes.number,
  goal: PropTypes.number
}
