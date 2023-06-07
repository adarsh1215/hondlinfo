import React from 'react'

// importing style
import "./middle.css"

function Middle() {
    return (
        <div className='middleWrapper'>
            <h1 style={{ fontSize: 28, textAlign: 'center', color: "#fff", opacity: 0.45 }} >Best Price to Trade</h1>
            <div className='middle'>
                <div className="middleLeft">
                    <div className="middlePercntage">
                        <div className="mPval">.95%</div>
                        <div className="timeSpan">5 Mins</div>
                    </div>
                    <div className="middlePercntage">
                        <div className="mPval">1.46%</div>
                        <div className="timeSpan">1 Hour</div>
                    </div>
                </div>


                <div className="middleMiddle">
                    <div className='bstPrice'> &#8377; 23,85,083</div>
                </div>


                <div className="middleRight">
                    <div className="middlePercntage">
                        <div className="mPval">10.54%</div>
                        <div className="timeSpan">1 Day</div>
                    </div>
                    <div className="middlePercntage">
                        <div className="mPval">19.24</div>
                        <div className="timeSpan">7 Days</div>
                    </div>
                </div>
            </div>
            <h1 style={{ fontSize: 16, textAlign: 'center', color: "#fff", opacity: 0.45 }} >Average BTC/INR net price including commission</h1>
        </div>
    )
}

export default Middle