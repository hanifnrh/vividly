import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./index.css";

const Card = ({ data, onClick }) => {
    const nav = useNavigate();

    const handleClick = () => {
        if (onClick) {
            onClick(data);
        } else {
            nav(`/detail/${data.id.videoId}`, { state: { itemData: data } });
        }
    };

    return (
        <div className="card" onClick={handleClick}>
            {data ? (
                <>
                    <div className="card-info">
                        <h3>{data.snippet.title}</h3>
                        <p>Channel: {data.snippet.channelTitle}</p>
                        <img
                            src={data.snippet.thumbnails.high.url}
                            alt={data.snippet.title}
                        />
                    </div>
                </>
            ) : (
                <p className='loading'>Loading...</p>
            )}
        </div>
    );
};

export default Card;
