import { ArrowLeftIcon, MinusIcon } from '@heroicons/react/24/outline'
import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function DetailArticle() {
    const dataArticle = useSelector(state => state.detail.value)
    const history = useNavigate()


    return (
        <div className='flex lg:px-16 px-4 flex-row h-screen justify-center items-center'>
            <img className='object-cover max-w-[400px] h-[400px]' src={dataArticle.urlToImage} alt="Image" />
            <div className='p-10'>
                <div className='flex items-center mb-6 gap-4'>
                    <button onClick={() => history('/')} className='px-3 py-2 flex bg-primary text-white rounded items-center gap-1 hover:drop-shadow-xl'><ArrowLeftIcon className='w-5' /> <span>Back</span></button>
                    <h1 className='text-xl'>Detail Article</h1>
                </div>
                <h1 className='text-3xl font-semibold mb-2'>{dataArticle.title}</h1>
                <h4 className='mb-8 text-primary font-bold flex gap-2'> <MinusIcon className='w-5' /> <span>{dataArticle.author}</span> </h4>
                <p className='text-gray-600'>
                    {dataArticle.content}
                    <a className='ml-4 text-sky-500' target="_blank" href={dataArticle.url}>More Info...</a>
                </p>

            </div>
        </div>
    )
}

export default DetailArticle