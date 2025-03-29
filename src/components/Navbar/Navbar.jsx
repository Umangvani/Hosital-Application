import React from 'react'
import SignUp from '../Sign/SignUp'


function Navbar({isModalOpen, setIsModalOpen}) {
  

  return (
    <div>
      <div className="px-20 "> 
        <nav className=" flex justify-between items-center font-normal ">
          <h5 className='text-2xl text-blue-900 font-bold'
          style={{color: "4200FF"}}>
            Blue Hospital 
            <span className='font-medium text-xl text-black'></span>
        </h5>

          <div className="">
          <ul className='flex justify-between gap-14 items-center'>
            <li className='text-blue-900' style={{color: "4200FF"}}>Home</li>

            <li>
            <label htmlFor="list" className='hover:text-blue-800'>Services</label>
              <select name="" id="list" className='outline-none'>

                <option value=""></option>
                
              </select>
            </li>

            <li className=' hover:text-blue-800 '>Doctors</li>

            <li className=' hover:text-blue-800'>About</li>
            <li className=' hover:text-blue-800'>Contact us</li>
          </ul>
          </div>
          
          <div className="flex gap-10 text-white ">
            <button className='border-3 rounded-xl p-2 px-7 bg-blue-800 hover:bg-blue-900 '>Login</button>
            <button 
              
              className='border-3 rounded-xl p-2 px-7 bg-blue-800 hover:bg-blue-900'>
              Sign up</button>
          </div>

          

        </nav>
      </div>
    </div>
  )
}

export default Navbar