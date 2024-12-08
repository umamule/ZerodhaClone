import React from 'react';
function RightSection({
    RimageURL,
    RproductName,
    RproductDescribtion,
    RtryDemo,
}
) {
    return ( 
        <div className='container'>
            <div className='row '>
                <div className='col-6 mt-5 p-5'>
                    <div className='mt-5'>
                    <h1 className='center'>{RproductName}</h1>
                    <p>{RproductDescribtion}</p>
                    <div>
                     <a href={RtryDemo} style={{textDecoration:"none"}}>Learn more</a>
                    </div>
                    </div>
                </div>
                
                <div className='col-6'>
                <img src={RimageURL} alt="product image"></img>
                </div>
            </div>
        </div>
     );
}

export default RightSection;