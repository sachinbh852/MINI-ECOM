import React from 'react'
import success from '../assets/success.png'
import { Link } from 'react-router-dom'


const Success = () => {
  return (
    <div className='grid place-items-center w-full  lg:h-screen h-full font-raleway bg-[#F7F7F7]' >
      <div className=' max-w-5xl rounded flex flex-col' >
        <span className="text-green-600 text-4xl">Payment successful</span>
        <span className="text-yellow-600 text-center mt-4 text-2xl font-bold">Your order is in our system</span>
        <div className="flex justify-end items-center mx-auto my-4 w-60">
          <img src={success} alt="success jpg" className='mx-auto my-auto w-28' />
          </div>
          <div className="my-10 mx-auto">
            <Link to="/" className=" underline text-xl underline-offset-4">Back to Home</Link>
          </div>
      </div>
    </div>
  )
}

export default Success