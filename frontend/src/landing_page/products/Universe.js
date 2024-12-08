import React from 'react';
function Universe() {
    return ( 
        <div className='container text-center text-muted'>
            <p className='fs-4'>Want to know more about our technology stack? Check out the <a href='' style={{textDecoration:"none"}}>Zerodha.tech</a> blog.</p>
            <h2 className='mt-5 text-black' >The Zerodha Universe</h2>
            <p className='text-black'>Extend your trading and investment experience even further with our partner platforms</p>
        
            <div className='row text-grey mb-5'>
                <div className='col-md-4'>
                    <img style={{width:"60%"}} src='media/images/zerodhaFundhouse.png'></img>
                    <div className='row mt-3'>
                        <div className='col-2'></div>
                        <div className='col-8'><h6 className='text-muted'>Our asset management venture that is creating simple and transparent indexfunds to help you save for your goals.</h6>
                        </div>
                        <div className='col-2'></div>
                    </div>
                </div>
                <div className='col-md-4'>
                   <img style={{width:"60%"}} src='media/images/sensibullLogo.svg'></img>
                   <div className='row mt-3'>
                        <div className='col-2'></div>
                        <div className='col-8'><h6 className='text-muted'>Options trading platform that lets you create strategies, analyze positions, and examinedata points like open interest, FII/DII, and more.</h6>
                        </div>
                        <div className='col-2'></div>
                    </div>
                </div>
                <div className='col-md-4'>
                   <img style={{width:"40%"}}  src='media/images/tijori.svg'></img>
                   <div className='row mt-2'>
                        <div className='col-2'></div>
                        <div className='col-8'><h6 className='text-muted'>Investment research platformthat offers detailed insights on stocks,sectors, supply chains, and more.</h6>
                        </div>
                        <div className='col-2'></div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-4'>
                    <img style={{width:"60%"}} src='media/images/streakLogo.png'></img>
                    <div className='row mt-3'>
                        <div className='col-2'></div>
                        <div className='col-8'><h6 className='text-muted'>Systematic trading platform
that allows you to create and backtest
strategies without coding.</h6>
                        </div>
                        <div className='col-2'></div>
                    </div>
                </div>
                <div className='col-md-4'>
                   <img style={{width:"60%"}} src='media/images/smallcaseLogo.png'></img>
                   <div className='row mt-3'>
                        <div className='col-2'></div>
                        <div className='col-8'><h6 className='text-muted'>Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs.</h6>
                        </div>
                        <div className='col-2'></div>
                    </div>
                </div>
                <div className='col-md-4'>
                   <img style={{width:"40%"}}  src='media/images/dittoLogo.png'></img>
                   <div className='row mt-2'>
                        <div className='col-2'></div>
                        <div className='col-8'><h6 className='text-muted'>Personalized advice on life
and health insurance. No spam
and no mis-selling.</h6>
                        </div>
                        <div className='col-2'></div>
                    </div>
                </div>
            </div>
            <div className='row mt-5 mb-5'>
            <button className='p-2 btn btn-primary fs-5' style={{width:"20%",margin:"0 auto"}}>Singup for Now</button>
            </div>
        </div>
        
        
     );
}

export default Universe;