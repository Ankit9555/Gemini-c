import React from 'react'
import { assets } from '../../assets/assets'
import Card from '../Card'

const Main = () => {
  return (
    <div className='w-full' >
      <div className='flex flex-row justify-between p-4 w-full h-16'>
      <p className='text-xl font-bold ml-4 text-slate-200'>Gemini</p>
      <img className=" mr-4 rounded-full" src={assets.user_icon} alt="user-icon" width={32} />
      </div>

      <div className=' text-slate-200 mt-4 sm:text-3xl md:text-4xl text-2xl w-full h-1/6 sm:h-1/6 p-2 pl-8 text-start sm:pl-24 md:pl-36 px-4'>
      <h1 className=' tracking-wider bg-gradient-to-r from-blue-500 to-red-500 inline-block text-transparent bg-clip-text'>Hello DEV,</h1>
      <p className=' tracking-wider text-slate-400 mt-2'>How Can I Help You Today?</p>
      </div>

      <div className= 'mt-4 flex gap-4 flex-row px-36 py-4'>
        <Card text="Suggest some place beautiful places to see on an upcoming road trip"
        icon={assets.compass_icon }
        />
        <Card text="Briefly summerize this concept: Urban Planning"
        icon={assets.bulb_icon}
        />
        <Card text="Brainstrome team bonding activities for our work referals"
        icon={assets.message_icon }
        />
        <Card text="Improve the readiability of the code "
        icon={assets.code_icon }
        />
      </div>

      <div className=' flex ml-36 w-2/3 h-10 rounded-2xl bg-slate-100 px-5 mt-16'>
        <input  className="outline-none w-10/12 h-full rounded-2xl  bg-slate-100 text-sm text-slate-600 " type="text" name="text" id="text" placeholder='Enter your prompt here' />
        <div className=' h-4 ml-16 flex flex-row gap-2 my-auto'>
          <img className='cursor-pointer' src={assets.gallery_icon} alt="gallery" width={12} height={12} />
          <img className='cursor-pointer' src={assets.mic_icon} alt="mic" width={16} height={16}/>
          <img className='cursor-pointer' src={assets.send_icon} alt="send" width={16} height={16}/>
        </div>
      </div>

    </div>
  )
}

export default Main