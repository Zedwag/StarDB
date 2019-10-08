import React from 'react'
import { Link } from 'react-router-dom'

import './header.css'

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <Link to='/StarDB/'>
          StarDB
        </Link>
      </h3>
      <ul className="d-flex">
        <li>
          <Link to='/StarDB/people/'>People</Link>
        </li>
        <li>
          <Link to='/StarDB/planets/'>Planets</Link>
        </li>
        <li>
          <Link to='/StarDB/starships/'>Starships</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header