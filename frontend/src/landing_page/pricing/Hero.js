import React from 'react';
function Hero() {
    return ( 
        <div className='container p-5 mt-5'>
           <div className='row'>
            <h1 className='col text-center mt-2'>Charges</h1>
           <h3 className='text-muted text-grey  text-center mb-5'>List of all charges and taxes</h3>
           </div>
           <div className='row'>
                <div className='col-4'>
                    <img src='media/images/pricing0.svg'/>
                    <h2>Free equity delivery</h2>
                    <p className='text-muted text-grey'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4'>
                <img src='media/images/intradayTrades.svg'/>
                    <h2>Intraday and F&O trades</h2>
                    <p className='text-muted text-grey'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
               
                <div className='col-4'>
                <img src='media/images/pricing0.svg'/>
                    <h2>Free direct MF</h2>
                    <p className='text-muted text-grey' style={{textAlign:"left"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
           </div>

        </div>
     );
}

export default Hero;