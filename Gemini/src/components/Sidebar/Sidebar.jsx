import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const Sidebar = () => {

  const [extended, setExtended] = useState(false)
  return (
    <div className='sidebar  text-slate-700 flex flex-col justify-between p-4 bg-slate-100 '>

      <div className='top flex flex-col gap-2 mx-auto'>
        <img
          onClick={() => setExtended(prev => !prev)}
          className='cursor-pointer' src={assets.menu_icon} alt="icon" width={20} height={20} />
        <div className='mt-2 flex flex-row gap-2 p-2 px-4 mx-auto bg-slate-200 px-auto rounded-xl cursor-pointer hover:bg-slate-300'>
          <img className='' src={assets.plus_icon} alt="plus" width={16} height={16} />
          {extended ? <p className='mt-1 font-medium'>New Chat</p> : null}
        </div>
        <div>


          {extended ? <div className='h-4'><p className=' text-slate-800 font-semibold '>Recent</p> <div className=' mt-2 flex flex-row gap-2  mx-auto p-1 px-4 rounded-xl cursor-pointer hover:bg-slate-300'>
            <img className='flex mx-auto' src={assets.message_icon} alt="message" width={12} height={4} />

            <p>What is react ...</p>
          </div></div>
            : null
          }
        </div>

      </div>
      <div className='bottom  text-black font-semibold text-sm flex flex-col gap-3 justify-items-end '>
        <div className='flex flex-row gap-2 cursor-pointer px-4 p-1 rounded-xl  hover:bg-slate-300'>
          <img src={assets.question_icon} alt="question-icon" width={20} height={20} />
          {extended ? <p>Help</p> : null}
        </div>
        <div className='flex flex-row gap-2 cursor-pointer px-4 p-1 rounded-xl hover:bg-slate-300'>
          <img src={assets.history_icon} alt="history-icon" width={20} height={16} />
          {extended ? <p>History</p> : null}
        </div>
        <div className='flex flex-row gap-2 cursor-pointer px-4 p-1 rounded-xl hover:bg-slate-300'>
          <img src={assets.setting_icon} alt="setting-icon" width={20} height={20} />
          {extended ? <p>Setting</p> : null}
        </div>

      </div>
    </div>
  )
}

export default Sidebar