'use client'

import { JobListing } from "@prisma/client"
import { ChangeEvent, useState } from "react"
import InputWithLabel from "./input-chore"
import { DropDown } from "@/components/dropdown"
import Card from "./card"

type ClientChore ={
    jobs:JobListing[]
}
const initialState ={
    title:'',
    location:'',
    salary:'',
}
const jobType=[
    {
        value:'Full-Time',
        label:'Full-Time',
    },
    {
        value:'Part-Time',
        label:'Part-Time', 
    },
    {
        value:'Internship',
        label:'Internship', 
    }
]

function ClientChore({jobs}:ClientChore) {

const [state,setState] = useState(initialState);
const [value,setValue] =useState('');

function onChange(event:ChangeEvent<HTMLInputElement>){
    setState({...state,[event.target.name]:event.target.value})
}
const filteredJobs = jobs.filter((item)=>{
    const salaryCondition = Number(item.salary)>= Number(state.salary)
    const titleCondition = state.title === '' || item.title.includes(state.title)
    const locationCondition = state.location === '' || item.location.includes(state.location)
    const typeCondition = value === "" || item.type === value

    return salaryCondition && typeCondition && titleCondition && locationCondition 

})

  return (
    <div>
    <div className="grid grid-cols-3 py-12 gap-2 container">
        <InputWithLabel
        type='text'
        label="Title"
        id="title"
        name='title'
        placeholder="title ..."
        onChange={onChange}
        />
        <InputWithLabel
        type="text"
        label="Location"
        id="Location"
        placeholder="Location..."
        name='location'
        onChange={onChange}
        />


        <InputWithLabel
        type="number"
        label="Salary"
        id="Salary"
        placeholder="minimum salary..."
        onChange={onChange}
        value={state.salary}
        name='salary'
        />
        <div>
        <DropDown value={value} setValue={setValue} jobType={jobType}/>
        </div>
        
    </div>
    <div className="grid grid-cols-2 py-8 gap-y-8 container">
     {filteredJobs.map((item)=>(
        <Card
        id={item.id}
        title={item.title}
        type={item.type}
        location={item.location}
        salary={item.salary}
        desc="The best job you can find out on the market !"
        companyName={item.companyName}
        key={item.id}
        />
     ))}
    </div>
    </div>
  )
}

export default ClientChore
