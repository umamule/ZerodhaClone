import React from 'react';
function SignUp() {
    return ( 
        <div className='container p-5'>
          <div role='row' className='row v-middel'>
            <div className='col-7 mt-5'>
            <img src='media/images/signup.png'/>
            </div>
            <div className='col-1'>
            </div>
            <div className='col-4 mt-5'>
            <h1 className='text-black'>Signup Now</h1>
            <div className='text-grey'>Or track your existing application.</div>
            <form data-v-e0990046="" aria-label="" role="form" class="md signup-mobile-form">          
                    <div className='row mt-3'>
                <label data-v-668cebc1 class="su-input-label">Mobile number</label>
                </div>
                <input type="number" placeholder="" aria-label="'Enter your mobile number'" role="" autocorrect="off" autocapitalize="none" maxlength="10" autofocus="autofocus"  animate="true" label="Mobile number" rules="[object Object]"/>
                <p data-v-e0990046="" aria-label="You will receive an OTP on your number" class="text-grey text-12 input-status"> You will receive an OTP on your number </p>
                <div className='mr-2'>
                <button data-v-4425d0ea="" type="submit" aria-label="Continue" role="" class="button button-blue signup-mobile-submit" data-v-e0990046=""> Continue </button>
                </div>
                <p data-v-e0990046="" className="text-12 text-grey"><a data-v-e0990046="" rel="noopener" href="https://zerodha.com/open-account/nri" aria-label="Want to open an NRI account?">Want to open an NRI account?</a></p>
              </form>
            </div>
          </div>
            
        </div>
     );
}

export default SignUp;