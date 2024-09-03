import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import swal from 'sweetalert2'
import PageHeader from '../components/PageHeader';

function JobDetails() {
    const {id} = useParams();
    const[job,setJob] = useState([])
    useEffect(() =>{
fetch(`http://localhost:3000/all-jobs/${id}`).then(res => res.json()).then(data =>setJob(data))
    }, [] )


    const handleApply = async() => {
        const {value : url } = await swal.fire({
            input : "url",
            inputLabel : "URL address",
            inputPlaceholder : "Enter th url"
        });
        if(url){
            swal.fire(`Entered URL : ${url}`);
        }


    }

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        <PageHeader title={"single job page"} path={"singlejob"}/>
      <h2>JobDetail : {id}</h2>
      <h1>{job.jobTitle}</h1>

        <button className='bg-blue px-8 py-2 text-white' onClick={handleApply}> Apply</button>

    </div>
  )
}

export default JobDetails
