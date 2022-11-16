import React from 'react'
import bathroom from '../resources/bathtub-svgrepo-com.svg'
import area from '../resources/basic-square-svgrepo-com.svg'
import bed from '../resources/bed-svgrepo-com.svg'
// import p1 from '../resources/p1.jpg'
import { ReactComponent as Heart} from '../resources/heart-svgrepo-com.svg'
 const Card = (data) => {
    const info=[data.data]
    const p1=info[0].url;
    const rent=info[0].rent;
    const City =info[0].city;
    const Address=info[0].Address;
    const Bed=info[0].bed;
    const Bathroom =info[0].bathroom;
    const Area =info[0].area;


  return (
    <>
    <div className="card mt-5 w-[30%] h-auto rounded-2xl bg-slate-50">
    <div className='rounded-t-2xl'><img className='rounded-t-2xl'src={p1} alt=''/></div>
    <div className="w-full p-5 px-8">
        <div className='text-4xl pt-2 flex justify-between font-semibold'>
        <div className='text-purple-500'>${rent}<span className=' text-gray-500 text-xl font-normal'>/month</span></div>  
           <div className="border-2 border-gray-900 rounded-[50%] h-11 w-11 flex justify-center items-center">
            <Heart className="h-7 p-1"/></div>
        </div>
        <div className="text-5xl pt-1 my-3">{City}</div>
        <div className="text-2xl pt-1  text-gray-500 ">{Address}</div>
        <div className='w-full  mt-3 h-0 border-t-2 border-gray-20'></div>
        <div className="flex mt-3 justify-between  text-gray-500">
            <div className='flex items-center '>
            <div><img className="h-5 mr-1"src={bed} alt=''/></div>
                {Bed} Beds</div>
            <div className="flex items-center">
            <div><img className='h-5 mr-1' src={bathroom} alt=''/></div>
                {Bathroom} Bathroom</div>
            <div className="flex items-center ">
            <div><img className="h-4 mr-1" src={area} alt=''/></div>
             {Area}m<sup>2</sup></div>
        </div>
     
    </div>

</div>
</>
  )
}


export  default Card;