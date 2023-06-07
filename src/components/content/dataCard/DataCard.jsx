import React from 'react'

// importing style
import "./dataCard.css"

function DataCard({ data }) {

    

    return (
        <div className='row' >
            <div className="sno">#</div>
            <div className="platform">Platform</div>
            <div className="ltp">Last Traded Price</div>
            <div className="bsp">Buy / Sell Price</div>
            <div className="diff">Difference</div>
            <div className="savings">Savings</div>
        </div>
    )
}

export default DataCard