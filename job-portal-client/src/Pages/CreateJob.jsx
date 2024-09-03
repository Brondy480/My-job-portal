import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import CreatableSelect from 'react-select/creatable'

function CreateJob() {
    const [selectedOption , setSelectedOption] = useState(null);
    const {
        register,
        handleSubmit,reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.skills = selectedOption;
       // console.log(data);
       fetch(`http://localhost:3000/post-job`,{
        method : "POST",
        headers :{'content-type': 'application/json'},
        body : JSON.stringify(data)
       }).then(res =>res.json()).then((result) =>{
            console.log(result)
       })
       
    };

    const option = [
        {value: "JavaScript", label : "Javascript"},
        {value: "C++", label : "C++"},
        {value: "Html", label : "Html"},
        {value: "CSS", label : "CSS"},
        {value: "React", label : "React"},
        {value:"MongoDB",label : "MongoDB"},
        {value:"Redux",label : "Redux"},

    ]
    


    


    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
            {/*form */}
            <div className='bg-[#FAFAFA] py-10px-4 lg:px-16'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>

                    {/*1st row*/}
                    <div className='create-job-flex'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Job Title </label>
                            <input type='text' placeholder="web Developer"
                                {...register("jobTitle ")} className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6" />

                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Company name</label>
                            <input type='text' placeholder="Ex : Microsoft "
                                {...register("companyName")} className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6" />

                        </div>

                    </div>

                    {/*2nd row */}

                    <div className='create-job-flex'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Minimum salary </label>
                            <input type='text' placeholder="20k"
                                {...register("minPrice ")} className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6" />

                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Maximum salary</label>
                            <input type='text' placeholder="120k "
                                {...register("maxPrice ")} className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6" />

                        </div>
                    </div>

                    {/* 3rd row */}
                    <div className='create-job-flex'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Salary type </label>
                            <select {...register("salaryType")} className='create-job-input'>
                                <option value="Mr">Choose your salary</option>
                                <option value="Hourly">Hourly</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Yearly">Yearly</option>
                            </select>

                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Job location</label>
                            <input type='text' placeholder="Ex: New york "
                                {...register("jobLocation ")} className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6" />

                        </div>
                    </div>

                    {/*4rd row */}
                    <div className='create-job-flex'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Job Posting Date </label>
                            <input type='date' placeholder="Ex: 2023-10-28"
                                {...register("jobLocation ")} className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6" />
                        </div>
                        <label className='block mb-2 text-lg'>Experience level </label>
                        <select {...register("experienceLevel")} className='create-job-input'>
                            <option value="">Choose your Experience</option>
                            <option value="NoExperience">Hourly</option>
                            <option value="Internship">Internship</option>
                            <option value="Work remotely ">Work remotely</option>
                        </select>


                    </div>
                    {/*5rd row */}
                    <div>
                    <label className='block mb-2 text-lg'>Required Skill set </label>
                        <CreatableSelect 
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={option}
                        isMulti

                        className='create-job-input py-4' />
                    </div>

                    {/*6th row */}
                    <div className='create-job-flex'>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 text-lg'>Company Logo </label>
                        <input type='url' placeholder="paste your company logo url : "
                            {...register("companyLogo")} className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6" />
                    </div>
                    <label className='block mb-2 text-lg'>Employment type </label>
                    <select {...register("employmentType")} className='create-job-input'>
                        <option value="">Choose your Experience</option>
                        <option value="Full-time">Full-Time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Temporary">Temporary</option>
                    </select>


                </div>

                    {/* 7th row*/}
                    <div className='w-full'>
                    <label className='block mb-2 text-lg'>Job Description</label>
                    <textarea className='w-full pl-3 py-1.5 focus:outline-none placeholder: text-gray-700' 
                    rows={6}
                    defaultValue={"Mollit in laboratum tempor loram incident "}
                    placeholder='Job Description'
                    {...register('description')} />
                    
                    </div>

                    {/*last row */}
                    <div className='w-full'>
                    <label className='block mb-2 text-lg'>Job posted by</label>
                    <input 
                    type='email'
                    placeholder='your email'
                    {...register('postedBy')}
                    className='create-job-input'/>
                    </div>


                    <input type="submit" className='block mt-12  bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer ' />
                </form>

            </div>
        </div>
    )
}

export default CreateJob;
