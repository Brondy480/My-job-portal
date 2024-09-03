import React from 'react'

// eslint-disable-next-line react/prop-types
const Jobs = ({result}) => {
  return (
    <>
    <div>
        
        <h3 className="text-lg font-bold mb-2">{result.length} Jobs</h3>
    </div>
    <section >
      {result}
      </section>
    </>
  )
}

export default Jobs
