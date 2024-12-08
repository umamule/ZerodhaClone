import React from 'react';
function Education() {
    return ( 
         
      <div className='container'>
      <div className='row'>
          <div className='col-6 '>
            <img src='media/images/education.svg'/>
          </div>
          
          <div className='col-6 mt-5'>
            <h1 className='mb-4 fs-2' >Free and open market Education</h1>
            <p className='mb-3'>Versity,the largest online stock market education book in the world coving everything from the basic to advance Traning</p>
            <a href=''style={{textDecoration:"none"}} className='mb-5'>Versity<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <p className='mt-5'>TradingQ&A the most active Trading and investmentcommunity in india for all your market related queries</p>
            <a href=''style={{textDecoration:"none"}} className='mb-5'>Versity<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
      </div>
    </div>
     );
}

export default Education;