import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <div style = {{ width: "100%", height: 100, display: "flex", flexDirection: "row", borderTop: "2px solid #2e3241", padding: "1rem" }} >
        <span className='footerText'>Copyright © 2019</span><span className='footerText' >HodlInfo.com</span>
    </div>
  )
}

export default Footer