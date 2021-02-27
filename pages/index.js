import React, { useState } from 'react'
import NewsCard from '../components/NewsCard';

function index(props) {
  console.log(props.data.news, "props.data");
  const [page, setpage] = useState(10)
  return (
    <div className="news-page">
      <div className="news-page__left-column"></div>
      <div className="news-page__middle-column">
        <div className="news-page__middle-column__title">
          <b>News</b>
          <div className="news-page__middle-column__title__line" />
        </div>
        {
          props.data.news && props.data.news.map((news, index) => {
            return <NewsCard data={news} index={index} />
          })
        }
        <div></div>
      </div>
      <div className="news-page__right-column"></div>
    </div>
  )
}

let page =5

export async function getServerSideProps(context) {
  const res = await fetch(`http://80.240.21.204:1337/news?skip=12&limit=${page}`)
  const data = await res.json()

  return {
    props: {data}, // will be passed to the page component as props
  }
}

export default index
