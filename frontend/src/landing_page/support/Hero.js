import React from 'react';
function Hero() {
    return ( 
            <section className='container-fluid' id="support">
                <div className='p-3 ' id='supportwrapper'>
                    <h4>Support Portal</h4>
                    <a href=''style={{color:"white",textAlign:"center"}}>Tract Ticket</a>
                </div>
                <div className=' row p-5 '>
                <div className=' col-6 ' >
                    <h2>Search for an answer or browse help topics to create a ticket</h2>
                    <input placeholder='EG: How do i active I&O' className='mt-3'></input> <br/>
                    <a href='' style={{color:"white"}}>Track account opening </a>
                    <a href=''style={{color:"white"}}>Track segment activation I</a>
                    <a href=''style={{color:"white"}}>ntraday margins </a>
                    <a href=''style={{color:"white"}}>Kite user manual</a>
                </div>
                <div className='col-6 ' style={{textAlign:"center"}}>
                    <h4 >Featured</h4>
                    <a href=''style={{color:"white",lineHeight:"2.0"}}>1.MCX Crude option contract expiry-November 2024</a> <br/>
                    <a href=''style={{color:"white",lineHeight:"2.0"}}>2.Trading holiday on account of Gurunanak Jayanti  </a>
                    </div>
                </div>
            </section>
     );
}

export default Hero;