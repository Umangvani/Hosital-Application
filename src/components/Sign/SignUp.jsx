import React from 'react'
import image from './doctor_img-removed.png'
import { auth, provider, signInWithPopup } from  './firebase.js';

function SignUp() {

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Signed in as:", user.displayName, user.email);
      // Save user to your DB or redirect from here
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };


  return (

  <div className="flex justify-center items-center  "> 
    <div className="flex w-4xl h-140 rounded-xl shadow-2xl">

      {/* leftSide */}
      <div className="relative py-25 bg-blue-800 text-white w-xl rounded-l-xl ">
        <h1 className='font-extrabold text-3xl text-center'>Blue Hospital</h1>
        <img src={image} alt="Doctor Image" className='absolute bottom-0 '/>
      </div>

      {/* rightSide */}
      <div className="w-full py-15 px-15 ">
        <h3 className='text-2xl font-semibold'>Sign up for Account </h3>
        <form>
       
        {/* First Name */}
        <div className=" grid grid-cols-2 pt-7 gap-3">
            <div className="">
              <label htmlFor="firstName" className=''>First Name</label>
              <br/>
              <input type="text" 
                  name='FirstName'
                  placeholder='Your First Name' 
                  id='firstName' 
                  className=' text-center border-1 px-4 py-2 rounded-xl after:outline-blue-800 text-1'
                  required/>
            </div>
            {/* Last Name  */}
            <div className="">
              <label htmlFor="LastName">Last Name</label>
              <br />
              <input type="text" 
                  name='LastName' 
                  placeholder='Your Last Name' 
                  id='LastName'
                  className='text-center border-1 px-4 py-2 rounded-xl '
                  required/>
            </div>
            {/* Email Address */}
            <div className="col-span-2">
              <label htmlFor="emailAdd">Email Address</label>
              <br />
              <input type="email" 
                  id='emailAdd'
                  name='emailAdd'
                  placeholder='Enter Your Email Address' 
                  className='text-center border-1 px-4 py-2 rounded-xl w-full'
                  required/>  
            </div>
            {/* Password */}
            <div className="">
              <label htmlFor="password">Password</label>
              <br />
              <input type="password"
                  id='password'
                  name='password'
                  placeholder='Your Password'
                  className='text-center border-1 px-4 py-2 rounded-xl' 
                  required/>
            </div>
            {/* Confirm Password */}
            <div className="">
              <label htmlFor="ConfirmPassword">Confirm Password</label>
              <br />
              <input type="password"
                  id='ConfirmPassword'
                  name='Confirmpassword'
                  placeholder='Confirm Your Password'
                  className='text-center border px-4 py-2 rounded-xl' 
                  required/>
            </div>
        </div>
            

        <div className="pt-3 pb-5">
            <input type="checkbox" 
            name='termsCondition'
            id='termsAndCondition'
            className='mr-2'
            required
            />
            <label htmlFor="termsAndCondition">I accept all <a href="#" className='text-blue-800'>terms and condition</a></label>
        </div>

        <div className="text-center text-md text-white mb-3">
          <button
            className='border-1 px-15 py-2 rounded-xl bg-blue-800 hover:bg-blue-900'>
            Sign Up
          </button>
        </div>


        

        <p className='text-center'>Already have an account <a href="#" className='text-blue-800'>? Login</a></p>

        

        </form>
        <button
            onClick={handleGoogleSignIn}
            className="w-full mt-4 flex items-center justify-center bg-white border border-gray-300 text-black rounded py-2 hover:shadow-md transition">
          <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google logo" className="w-5 h-5 mr-2" />
            Sign in with Google
        </button>

      </div>
      
    </div>
  </div> 
  )
}

export default SignUp
