import React from 'react'
import down from '../resources/down-arrow-svgrepo-com.svg'

const Navbar =()=>{
    return(
<div className="Navbar bg-slate-50 ">
   <div className='p-3 flex min-w-full justify-between'>
   
    <div className='flex items-center '>
        <div className='text-purple-500 font-bold text-2xl p-3 pr-10'>
            Estatery
        </div>
        <div className='p-3 group rounded-xl hover:bg-gray-200'>
          <span className="group-hover:text-purple-500">  Rent</span>
        </div>
        <div className='p-3 group rounded-xl hover:bg-gray-200'>
            <span className="group-hover:text-purple-500">Buy</span>
        </div>
        <div className='p-3 group rounded-xl hover:bg-gray-200'>
            <span className="group-hover:text-purple-500">Sell</span>
        </div>
        <div className='p-3 flex group rounded-xl hover:bg-gray-200 '>
          <span className="group-hover:text-purple-500">Manage Property </span>  
            <img className='h-3 pl-1 self-center'src={down} alt=''/>
        </div>
        <div  className=' p-3 flex group rounded-xl hover:bg-gray-200'>
            <span className="group-hover:text-purple-500">Resources</span>
            <img className='h-3 pl-1 self-center'src={down} alt=''/>
        </div>
        
    </div>
    <div className='flex'>
        <div  className='p-3 group rounded-xl hover:bg-gray-200'>
          <span className="group-hover:text-purple-500">  login</span>
        </div >
        <div className='p-3 group rounded-xl hover:bg-gray-200  '>
            <span className="group-hover:text-purple-500"> SignUp</span>
           </div>
    </div>
   </div>
</div>
    )
}
export default Navbar