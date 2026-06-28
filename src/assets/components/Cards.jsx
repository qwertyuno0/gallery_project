import React from 'react'

const Cards = (props) => {
  return (
    <div>
      <a href={props.elem.url} target='_blank'>
        
        <div className=''>
          
        <div className='h-40 w-44  overflow-hidden bg-amber-50 rounded-xl'>
        <img className='h-full w-full object-cover' src={props.elem.download_url} alt="" />
      </div>
      <h2 className='text-white'>{props.elem.author}</h2>
      </div>
      </a>
    </div>
  )
}

export default Cards
