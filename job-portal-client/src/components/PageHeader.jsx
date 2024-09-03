import React from 'react'

// eslint-disable-next-line react/prop-types
function PageHeader({title,path}) {
  return (
    <div className='py-24 mt-3 bg-[#FAFAFA] rounded flex item-center justify-center'>
    <div>
    <h2 className='text-3xl text-bleu font-medium mb-1 text-center'>{title}</h2>
    <p className='text-sm text-center'><a href='/'>Home/</a>{path}</p>
    </div>
    </div>
  )
}

export default PageHeader
