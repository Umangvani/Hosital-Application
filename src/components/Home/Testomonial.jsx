import React from 'react'

function Testomonial({name, speciality, rating, review , imgSource}) {
  return (
    <div className='border-1/2 flex w-80 h-40 rounded-2xl shadow-2xl bg-white-1/2 '>
      
      <div className="relative flex-none py-4 px-3 items-center w-auto px-4 ml-3 ">
        <div className="absolute size-20 bg-blue-800 w-20 h-20 rounded-full left-1"></div>
        <img src={imgSource} alt="" className='w-20 h-20 rounded-full sticky border-blue-1'/>
        
      </div>

      <div className="py-5 flex flex-col justify-center pr-3 gap-1/2">
      <h6 className='font-semibold text-md'>{name} </h6>
        <p className='text-sm text-gray-500'> {speciality}</p>
        
        <div className="">

          <svg width="20" height="20" viewBox="0 0 24 24" fill={"gold "} xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77l-6.18 3.23L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          
        </div>
        <p className='text-sm w-auto text-gray-500'>{review}</p>
      </div>
    </div>
  )
}

export default Testomonial

    
    