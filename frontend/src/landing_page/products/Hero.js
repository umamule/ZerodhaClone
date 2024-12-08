import React from 'react';
function Hero() {
    return ( 
       <div className='container p-5 mb-5 border-bottom'>
        <div className='row mb-5 text-center '>
            <h1 className='mt-5 '>Zerodha Products</h1>
            <h2 className='text-grey fs-4'>Sleek, modern, and intuitive trading platforms</h2>
            <p className='mb-5 landing_subheading'>Check out our <a href='' style={{textDecoration:"none"}}>investment offerings<i class="fa fa-long-arrow-right" aria-hidden="true"> </i></a> </p>
        </div>
       </div>
     );
}

export default Hero;