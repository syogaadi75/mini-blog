import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '../../css/listArticle.css'
import { saveDetail } from '../../features/detailSlice'

function CardArticle({ all, imgSrc, title, desc, author, time }) {
    const bulan = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const dispatch = useDispatch()
    const history = useNavigate()

    const save = () => {
        dispatch(saveDetail(all))
        history('/detail-article')
    }

    return (
        <div className='w-96 rounded-lg shadow hover-animation cursor-pointer' onClick={() => save()}>
            <div className='overflow-hidden'>
                <img className='h-64 w-full rounded-t-lg object-cover' src={imgSrc} alt="Img Article" />
            </div>
            <div className='p-4'>
                <div className='flex justify-between mb-3 text-sm'>
                    <div className='font-semibold text-primary'>{author}</div>
                    <div className='text-right text-xs font-bold text-gray-600 w-1/3'>
                        <div>{`${time.getDate()}, ${bulan[time.getMonth()]} ${time.getFullYear()}`}, {time.toLocaleString('en-US', { hour: 'numeric', hour12: true })}</div>
                    </div>
                </div>
                <h1 className='font-semibold mb-5'>{title}</h1>
                <p className='text-sm text-gray-600'>
                    {desc}
                </p>
                <div>
                </div>
            </div>
        </div>
    )
}

export default CardArticle