import React from 'react'
import cancel from '../assets/cancel-icon.png'
import {Link} from 'react-router-dom'

const Cancel = () => {
  return (
    <div className=' grid place-items-center w-full lg:h-screen h-full font-bold bg-[#F7F7F7]'>
      price:&nbsp;&#8377;800
      <div className="flex flex-col rounded max-w-5xl">
        <span className="text-red-600 text-4xl">Something went wrong!!</span>
        <span className="text-red-400 mt-8 text-2xl font-bold">Please retry after sometime</span>
        <div className="w-24 flex justify-end items-center mx-auto my-12">
        <img src={cancel} alt="cancel jpg" />
        </div>
        <div className="my-10 mx-auto">
          <Link to="/" className='underline text-xl underline-offset-4'> Back to Home</Link>
        </div>
      </div>
    </div>
  )
}

export default Cancel