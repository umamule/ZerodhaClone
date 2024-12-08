import React from 'react';
function Pricing() {
    return ( 
      
      <div className='container mt-5'>
        <div className='row'>
            <div className='col-4'>
              <h1 className='mb-3'>Unbeatable Pricing</h1>
              <p className='mb-3'>We pioneered the concept of discount broking and price transprency in inndia.Flat fees and no hidden charges</p>
              <a href=''style={{textDecoration:"none"}}>Try kit<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
            <div className='col-2'></div>
            <div className='col-6 mb-5'>
              <div className='row text-center'>
                <div className='col p-2 border'>
                <h1 className='mb-3'>₹0</h1>
                <p>Free quality delivery <br/>direct mutural friend</p>
                </div>
                <div className='col p-2 border'>
                <h1 className='mb-3'>₹0</h1>
                <p>Intraday F&0</p>
                </div>
              </div>
            </div>
        </div>
      </div>
     );
}

export default Pricing;