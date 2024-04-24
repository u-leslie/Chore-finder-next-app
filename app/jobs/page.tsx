import React from 'react'
import ClientChore from './client-chore'
import { prisma } from '@/lib/prisma';

export default async function page() {
  const jobs = await prisma.jobListing.findMany({});
  return (
    <div>
        <h1 className='text-[3rem] container py-4'> Chore List</h1>
        <div>
            <ClientChore jobs={jobs}/>
        </div>
    </div>
  )
}

