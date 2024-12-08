import React from 'react';
function Brokerage() {
    return ( 
        <div className='container border-top'>
            <div className='row mt-5'>
                <div className='col-8 '>
                    <h2 className='text-center'> <a href='' style={{textDecoration:"none"}}>Brokerage Calculate</a> </h2>
                    <ul className='text-grey text-muted fs-5' style={{textAlign:"left",lineHeight:"2.5"}}>
                        <li>Call & trades and RMS auto-squareoff: Additional charges of 50 + GST par order</li>
                        <li>Digital contact note will be send via mail</li>
                        <li>Pysical copies of contact notes,if required shall be charge 20 per notes,Courier charges apply.</li>
                        <li>For NRI account (PIS),0.5% or 100 per executed order for quality</li>
                        <li>For NRI account (PIS),0.5% or 100 per executed order for quality</li>
                        <li>if the account is in debit balance ,any order placed will be charges per exuted instance of 20 per executed order.</li>
                    </ul>
                </div>
                <div className='col-4'>
                <h2 className='text-center'> <a href='' style={{textDecoration:"none"}}>List of charges</a> </h2>

                </div>
            </div>
        </div>
    );
}

export default Brokerage;