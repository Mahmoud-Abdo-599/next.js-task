// import React, { useEffect } from 'react'
// import { useRouter } from 'next/router';

// function index() {
//   const router = useRouter()
//   useEffect(() => {
//     router.push(`/10`)
//   }, [])
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default index


// import React, { useState } from 'react'
// import { useRouter } from 'next/router'
// import NewsCard from '../components/NewsCard';

// function index(props) {
//   const router = useRouter()

//   const handleScroll = (e) => {
//     const bottom = Math.floor(e.target.scrollHeight - e.target.scrollTop) === e.target.clientHeight;
//     if (bottom) {
//       console.log("At The Bottom"); //Add in what you want here
//       router.push("/20")
//     }
//   }

//   return (
//     <div className="news-page">
//       <div className="news-page__left-column"></div>
//       <div className="news-page__middle-column" onScroll={handleScroll}>
//         <div className="news-page__middle-column__title">
//           <b>News</b>
//           <div className="news-page__middle-column__title__line" />
//         </div>
//         {
//           props.data.news && props.data.news.map((news, index) => {
//             return <NewsCard data={news} index={index} />
//           })
//         }
//       </div>
//       <div className="news-page__right-column"></div>
//     </div>
//   )
// }

// export async function getServerSideProps(context) {
//   const res = await fetch(`http://80.240.21.204:1337/news?skip=12&limit=10`)
//   const data = await res.json()

//   return {
//     props: {data}, // will be passed to the page component as props
//   }
// }

// export default index
