import React from 'react'
import { assets } from '../assets/assets'

function Card(props)
 {
  return (
    <div className='cursor-pointer hover:bg-slate-500 p-4 flex flex-col justify-between w-40 h-48 bg-slate-400 rounded-xl'>
        <p>{props.text}</p>
        <div><img className='ml-24' src={props.icon} alt="icon" width={24} /></div>
    </div>
  )
}

export default Card