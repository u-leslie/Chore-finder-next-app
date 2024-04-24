import React from 'react'
import CreateChoreClient from './client'
function page() {
  return (
    <div>
    <div className='container py-12'>
   <h1 className='text-[4rem]'>Create Chores</h1>
    </div>
    <CreateChoreClient/>
    </div>
  )
}

export default page
