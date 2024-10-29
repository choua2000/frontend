import React from 'react'
import Link from 'next/link'
const HomePage = () => {
  return (
    <div className='h-[12vh] shadow-md '>
      <div className='w-[80%] mx-auto flex justify-between items-center h-full'>
        <h1 className=' flex items-center justify-center h-[80vh] text-2xl font-bold'>Home</h1>
        <div className=''>
          <Link href="/auth/signup">{''}
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:text-blue-400 cursor-pointer">Signup</button>
          </Link>
          <Link href={"/auth/login"}>{''}
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:text-blue-400 cursor-pointer">Login</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage