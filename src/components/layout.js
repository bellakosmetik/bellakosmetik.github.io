import * as React from 'react'
import Header from './header'
import Footer from './footer'
import "./layout.css"

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
        <Header></Header>
        <main>
            {children}
        </main>
        <Footer></Footer>
   </div>
   
  )
}

export default Layout