import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

function UpdateJob() {
    const{id} = useParams();
    const {_id,jobTitle ,companyName,minPrice,maxPrice,salaryType,jobLocation,postingDate,experienceLevel,companyLogo,employmentType,description,postedBy,skills} = useLoaderData()
  return (
    <div>
      
    </div>
  )
}

export default UpdateJob
