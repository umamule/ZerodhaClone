import React from 'react';
function Team() {
    return ( 
        <div className='container p-5'>
            <div className='row text-center'>
            <h1>People</h1>
            </div>
            <div className='row'>
                <div className='col-5 founder-img text-center'>
                    <img className='mb-5' src='media/images/nithinKamath.jpg' alt='image' style={{borderRadius: "100%",width:"60%"}} />
                    <h5 >Nithin Kamath</h5>
                    <p text-grey>Founder,CEO</p>
                </div>  
                <div className='col-7'>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on 
                    <a target="_blank" style={{textDecoration:"none"}} href="https://nithinkamath.me/" title="Homepage"> Homepage</a> / 
                    <a target="_blank" style={{textDecoration:"none"}} href="https://tradingqna.com/u/nithin/summary" title="TradingQnA">TradingQnA</a> /
                    <a target="_blank" style={{textDecoration:"none"}} href="https://twitter.com/Nithin0dha">Twitter</a>
                    </p>
                </div>
            </div> 
        </div>
       
     );
}

export default Team;