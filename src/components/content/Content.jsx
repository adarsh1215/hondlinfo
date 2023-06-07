import React, { useEffect, useState } from 'react'

// importing style
import "./content.css"

// importing component
import DataCard from './dataCard/DataCard';
import getData from '../../apiCalls/getData';

function Content() {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {

        getData()
            .then(data => {

                setData(data);
                setLoading(false);
            });
    }, []);

    return (
        <div className='content' >
            <div className="rows">
                <div className="contentHeader">
                    <div className="sno">#</div>
                    <div className="platform">Platform</div>
                    <div className="ltp">Last Traded Price</div>
                    <div className="bsp">Buy / Sell Price</div>
                    <div className="diff">Difference</div>
                    <div className="savings">Savings</div>
                </div>
                {   isLoading? <div>Loading...</div> :
                    data.map((item) => <DataCard data = {item} /> )
                }
            </div>
        </div>
    )
}

export default Content