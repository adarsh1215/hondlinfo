import React, { useState } from 'react'
import logo from "/src/HODLINFOlogo.png"

// importing style
import "./header.css"

function Header() {

  const [isDark, setDark] = useState(true)

  const handelToggleTheme = (event) => {

    setDark(!isDark);
  }

  return (
    <div className='header' >

        <div className="headerLeft">
            <img src= {logo} alt="" className="logo" />
        </div>

        <div className="headerMiddle">
          <button className="inr">INR</button>
          <button className="btc">BTC</button>
          <button className="buyBtc">BUY BTC</button>
        </div>

        <div className="headerRight">
          <div className="timer">60</div>
          <button className="telegram">Connect Telegram</button>
          <button className= { `toggleTheme ${isDark ? "" : "light"}` } onClick={handelToggleTheme} ></button>
        </div>
    </div>
  )
}

export default Header