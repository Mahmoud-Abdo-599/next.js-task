import React from 'react'
import SourceIcon from "../public/assets/wifi-signal.svg";
import ReactImageFallback from "react-image-fallback";
import formateTime from "../helpers/formateTime";

function NewsCard(props) {

    return (
        <div className="news-card" key={props.index}>
            {
                props.data.source.title && props.data.source.url ? (
                    <div className="news-card__source">
                        <div className="news-card__source__data">
                            <div className="news-card__source__data__img">
                                <ReactImageFallback
                                    src={props.data.source.url}
                                    fallbackImage="/assets/noImageAvailable.png"
                                    initialImage="/assets/noImageAvailable.png"
                                    alt="Source Image"
                                />
                            </div>
                            <b>{props.data.source.title}</b>
                        </div>
                        <div className="news-card__source__svg">
                            <SourceIcon />
                        </div>
                    </div>
                ) : null
            }
            
            <div className="news-card__news">
                <p>{props.data.title}</p>
            </div>
            <div className="news-card__date">
                {formateTime(props.data.created_at)}
            </div>
            {
                props.data.keywords.length > 0 ? (
                    <div className="news-card__keywords">
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
