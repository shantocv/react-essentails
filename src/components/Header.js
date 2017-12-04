import { Link } from 'react-router-dom'

export const Header = () =>
    <nav className="nav-bar">
      <ul>
        <li><Link to='/list-days'>Sky Day List</Link></li>
        <li><Link to='/add-day'>Add a day</Link></li>
        <li><Link to='/sky_day_count'>Sky Day Count</Link></li>
      </ul>
    </nav>
