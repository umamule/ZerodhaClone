import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
function ProductsPage() {
    return ( 
        <>
        <Hero/>
        <LeftSection imageURL="media/images/kite.png" productName="Kite"productDescribtion="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo=""learnMore=""googlePlay=""appStore=""/>
        <RightSection RimageURL="media/images/console.png" RproductName="Console" RproductDescribtion="The central dashboard for your Zerodha account with in-depth reporting and analytics on your trades and investments." RtryDemo=""/>
        <LeftSection imageURL="media/images/coin.png" productName="Coin"productDescribtion="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." tryDemo=" <a href=''>coin</a> "learnMore=""googlePlay=""appStore=""/>
        <RightSection RimageURL="media/images/kiteconnect.png" RproductName="Kite Connect API" RproductDescribtion="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." RtryDemo=""/>
        <LeftSection imageURL="media/images/varsity.png" productName="Varsity mobile"productDescribtion="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." tryDemo=""learnMore=""googlePlay=""appStore=""/>
       
        <Universe/>
        </>
     );
}

export default ProductsPage;