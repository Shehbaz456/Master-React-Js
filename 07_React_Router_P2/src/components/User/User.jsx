import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid} = useParams();
  return (
    <div>
      <h1 className='p-4 text-3xl text-white bg-gray-500 text-center ' >User: {userid} </h1>
    </div>
  )
}

export default User
