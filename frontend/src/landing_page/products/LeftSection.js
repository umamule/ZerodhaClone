import React from 'react';
function LeftSection({
    imageURL,
    productName,
    productDescribtion,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6 p-3'>
                <img src={imageURL} alt="product image"></img>
                </div>
                <div className='col-1'></div>
                <div className='col-5'>
                    <h1 className='mt-5 center'>{productName}</h1>
                    <p>{productDescribtion}</p>
                    <div>
                    <a href={tryDemo} style={{textDecoration:"none"}}  >Try demo</a>
                    <a href={learnMore} style={{marginLeft:"60px",textDecoration:"none"}}>learn more</a>
                    </div>
                    <div className='mt-3'>
                    <a href={googlePlay} > <img src='media/images/googlePlayBadge.svg'/></a>
                    <a href={appStore} style={{marginLeft:"50px"}}><img src='media/images/appstoreBadge.svg'/></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;