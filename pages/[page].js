import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import NewsCard from '../components/NewsCard';
import Spinner from '../layouts/Spinner';

function index(props) {
    const router = useRouter()
    const [page, setPage] = useState(10)
    
    const handleScroll = (e) => {
        let bottom = Math.floor(e.target.scrollHeight - e.target.scrollTop);
        if (bottom === e.target.clientHeight) {
            setPage(page+10)
        } else if (bottom === e.target.clientHeight+1) {
            setPage(page+10)
        } else if (bottom === e.target.clientHeight-1) {
            setPage(page+10)
        }
    }
    
    useEffect(() => {
        router.push(`/${page}`)
        setIsLoading(true)
    }, [page])

    useEffect(() => {
        if(props.data.news && props.data.news.length == page) {
            setIsLoading(false)
        }
    }, [props.data.news])
    
    const [isLoading, setIsLoading] = useState(true)

    return (
        <div className="news-page">
            <div className="news-page__left-column" />
            <div className="news-page__middle-column" onScroll={handleScroll}>
                <div className="news-page__middle-column__title">
                    <b>News</b>
                    <div className="news-page__middle-column__title__line" />
                </div>
                {
                    props.data.news && props.data.news.map((news, index) => {
                        return <NewsCard data={news} index={index} />
                    })
                }
                <div className={isLoading ? "news-page__middle-column__spinner" : "news-page__middle-column__spinner-stop"}>
                    <Spinner />
                </div>
            </div>
            <div className="news-page__right-column" />
        </div>
  )
}

export async function getServerSideProps(context) {
  const { page } = context.query || 10
  const res = await fetch(`http://80.240.21.204:1337/news?skip=12&limit=${page}`)
  const data = await res.json()

  return {
    props: {data}, // will be passed to the page component as props
  }
}

export default index
