import React from 'react'
import Image from 'next/image'
import index from '../pages'

function NewsCard(props) {
    console.log(props.index, props.data.source);
    return (
        <div className="news-card">
        {props.index}
            {
                props.data.source.title && props.data.source.url ? (
                    <div className="news-card__source">
                        <div className="news-card__title">Source</div>
                        <div className="news-card__source__body">
                            <p>{props.data.source.title}</p>
                            <div className="news-card__source__body__img">
                            <Image
                                src={props.data.source.url}
                                alt="Source image"
                                width={500}
                                height={500}
                            />
                            </div>
                        </div>
                    </div>
                ) : null
            }
            
            <div className="news-card__news">
                <div className="news-card__title">Title</div>
                <p>{props.data.title}</p>
            </div>
            <div className="news-card__date">
                <div className="news-card__title">Date</div>
                {props.data.created_at}
            </div>
            {
                props.data.keywords.length > 0 ? (
                    <div className="news-card__keywords">
                        <div className="news-card__title">Keywords</div>
                        {
                            props.data.keywords && props.data.keywords.map((keyword, index) => {
                                return (
                                    <div className="news-card__keywords__keword-card">{keyword.name}</div>
                                )
                            })
                        }
                    </div>
                ) : null
            }
            
        </div>
    )
}

export default NewsCard
