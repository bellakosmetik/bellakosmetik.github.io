import { Link } from 'gatsby'
import * as React from 'react'
import {header,
    navigation,
} from './header.module.css'

const Header = () => {
    return (
        <header className={header}>
    <div
      style={{
        fontSize: `150%`,
        margin: `0 auto`,
        maxWidth: 1050,
        padding: `1.45rem 1.0875rem 1.2rem`,
      }}
    >
      <div style={{textAlign:`center`}}>
          <Link style={{textDecoration : `none`}} to='/'>
          <h1 style={{ margin: 0, color:`white`}}>
            Bella Kosmetik
          </h1>
          </Link>

      <div className={navigation}>
        <ul>
          {/* <li><a href="http://localhost:8000/#Leistungen">Leistungen</a></li>
          <li><a href="http://localhost:8000/#Offnungszeiten">Öffnungszeiten</a></li>
          <li><a href="http://localhost:8000/#Kontakt">Kontakt</a></li> */}

          <li><a href="https://bremen.bellakosmetik.de/#Leistungen">Leistungen</a></li>
          <li><a href="https://bremen.bellakosmetik.de/#Offnungszeiten">Öffnungszeiten</a></li>
          <li><a href="https://bremen.bellakosmetik.de/#Kontakt">Kontakt</a></li>
        </ul>
          
      </div>
      </div>
      </div>

  </header>
    )
}

export default Header