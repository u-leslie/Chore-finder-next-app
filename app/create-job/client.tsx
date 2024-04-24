'use client' 
import React,{useState,useEffect, ChangeEvent} from 'react'
import InputWithLabel from '../jobs/input-chore'
import { DropDown } from '@/components/dropdown'
import SubmitButton from '@/components/submit-button'
import createJobs from '@/actions/create-job'
import toast from 'react-hot-toast'
import { redirect } from 'next/navigation'
const initialState ={
    title:'',
    companyName:'',
    location:'',
    salary:'',
    type: '',
}
const jobType =[
    {
        value:'Full-Time',
        label:'Full-Time',
    },
    {
        value:'Part-Time',
        label:'Part-Time',
    },
]

const CreateChoreClient = () => {
    const [value, setValue] = useState('')
    const [state,setState] = useState({...initialState, type:''})


    useEffect(() => {
        setState((prev) => ({...prev,type:value}));
    },[value])

    function onChange(event:ChangeEvent<HTMLInputElement>) {
        setState({ ...state, [event.target.name]: event.target.value });
    }

  return (
    <div>
        <form action={async (formData)=>{
            await createJobs(formData);
            toast.success('Created successfully')
            redirect('/jobs')

        }} className='container mx-auto grid grid-cols-4 gap-8'>
        <InputWithLabel
        type='text'
        label="Title"
        id="title"
        name='title'
        placeholder="title ..."
        value={state.title}
        onChange={onChange}
        />

<InputWithLabel
        type='text'
        label="Company Name"
        id="companyName"
        name='companyName'
        value={state.companyName}
        placeholder="Company Name"
        onChange={onChange}
        />

        <InputWithLabel
        type="text"
        label="Location"
        id="Location"
        value={state.location}
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
<input type='hidden' value={value} name='type' onChange={onChange} />
<DropDown value={value} setValue={setValue} jobType={jobType}/>

        <SubmitButton label={'Create'}/>
        </form>
    </div>
  )
}

export default CreateChoreClient
