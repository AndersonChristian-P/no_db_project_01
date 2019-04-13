import React from "react"

import "./Header.css"

export default function Header() {
  return (
    <div>
      <header>

        <div>
          <nav target="popup">Home</nav>
        </div >

        <h1>Packing List   <i className="fas fa-camera fa-1x"></i></h1>

        <div>
          <a className="email" href="mailto:?subject=Photography Gear Packing List" target="_blank" rel="noopener noreferrer" >email client</a>
        </div >

      </header>
    </div>
  )
}