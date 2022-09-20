import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import CardArticle from './CardArticle'

function ListArticle() {
    const apiKey = 'c0c885567208437daa308000b203a5f8'
    const [articles, setArticles] = useState([])
    const [pageNumber, setPageNumber] = useState(0)
    const [usersPerPage, setUsersPerPage] = useState(12)
    const [pageVisited, setPageVisited] = useState(pageNumber * usersPerPage)
    const [pageCount, setPageCount] = useState(0)
    const [title, setTitle] = useState('')

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/everything?q=a&apiKey=${apiKey}`).then(res => {
            setArticles(res.data.articles)
        })
    }, [])

    useEffect(() => {
        setPageCount(Math.ceil(articles.length / usersPerPage))
    }, [articles, pageVisited, usersPerPage, pageCount])

    const changePage = ({ selected }) => {
        setPageNumber(selected)
        setPageVisited(selected * usersPerPage)
    }

    const ArticleList = articles.slice(pageVisited, pageVisited + usersPerPage).map((article, i) => (
        <CardArticle key={i} all={article} imgSrc={article.urlToImage} title={article.title} desc={article.description} author={article.author} time={new Date(article.publishedAt)} />
    ))

    useEffect(() => {
        const timer = setTimeout(() => {
            let valueCari = ''
            title == '' ? valueCari = 'a' : valueCari = title
            axios.get(`https://newsapi.org/v2/everything?q=${valueCari}&apiKey=${apiKey}`).then(res => {
                setArticles(res.data.articles)
            })
        }, 800);

        return () => {
            clearTimeout(timer)
        }
    }, [title])


    return (
        <div className='w-full min-h-screen px-6 lg:px-16 py-8'>
            <div className='flex justify-center flex-col items-center gap-6 mb-10'>
                <h1 className='text-4xl font-bold family-raleway border-b-2 border-primary pb-3 px-4'>List Articles</h1>
                <p className='text-gray-600 text-center text-sm lg:text-md lg:w-[600px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, consectetur.</p>
            </div>

            <div className='flex flex-wrap gap-8 justify-center'>
                <div className='flex flex-col'>
                    <label>Search Article :</label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} className='px-3 py-2 outline-none border-b-2 border-primary w-[300px] lg:w-[600px]' type="text" placeholder='Ex. Bitcoin' />
                </div>
                <ReactPaginate
                    previousLabel={<button className='pagination-button'> <ArrowLeftIcon className='w-4' /> <span>Prev</span></button>}
                    nextLabel={<button className='pagination-button'> <span>Next</span> <ArrowRightIcon className='w-4' /></button>}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName="paginationContainer"
                    disabledClassName="paginationDisable"
                    activeClassName="paginationActive"
                />
                {ArticleList}
                <ReactPaginate
                    previousLabel={<button className='pagination-button'> <ArrowLeftIcon className='w-4' /> <span>Prev</span></button>}
                    nextLabel={<button className='pagination-button'> <span>Next</span> <ArrowRightIcon className='w-4' /></button>}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName="paginationContainer"
                    disabledClassName="paginationDisable"
                    activeClassName="paginationActive"
                />
            </div>
        </div>
    )
}

export default ListArticle