import React from 'react'
import { MinusIcon } from '@heroicons/react/24/outline'
import illustration from '../../img/illustration.svg'

function Welcome() {
    return (
        <div className='flex items-center h-screen justify-between flex-col lg:flex-row'>
            <div className='border-2 border-primary h-[400px] skew-x-[50deg] absolute bottom-20 -left-2'></div>
            <div className='border-2 border-primary h-[600px] -skew-x-[45deg] absolute bottom-0 left-[260px]'></div>
            <div className='lg:w-1/2 bg-white/40 z-[20] backdrop-blur px-6 lg:px-16 pt-24 lg:pt-0 py-6'>
                <h4 className='flex mb-8 items-center gap-2 text-primary font-semibold'> <MinusIcon className="w-6" /> Yoga Adi Saputra </h4>
                <h1 className='text-4xl lg:text-6xl mb-8 font-extrabold family-raleway'>Want to See More <span className='text-primary'>Articles</span>?</h1>
                <p className='text-gray-600 text-sm lg:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt molestiae officiis dolorem debitis ratione doloribus inventore sint eius optio, veniam explicabo nobis recusandae aspernatur nihil vitae culpa, reprehenderit soluta! Fugit?. lorem20</p>
            </div>
            <div className='lg:w-1/2 flex justify-center z-[20]'>
                <img className='w-[300px] lg:w-[500px]' src={illustration} alt="Illustration" />
            </div>
        </div>
    )
}

export default Welcome