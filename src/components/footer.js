import * as React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
    return (
        <footer>
            <div className='container' style={{textAlign:`center`}}>
            <hr></hr>
            <div><p>Impressum: Iara Alcobio · Kornstraße 116 · 28201 Bremen </p> </div>
            <div><p>Tel: 0421 51700573 · Mail: iaraalcobio[at]hotmail.de</p> </div>
            <Link to ="/datenschutz"><p>Datenschutzerklärung</p> </Link>
            </div>
        </footer>
    )
}

export default Footer