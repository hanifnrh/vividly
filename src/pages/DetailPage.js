import React from 'react';
import { useLocation } from 'react-router-dom';
import "./detail.css";


const DetailPage = () => {
    const location = useLocation();
    const itemData = location.state?.itemData || {}; // Access itemData safely

    return (
        <div>
            {/* <h1>{itemData.snippet?.title}</h1> */}
            <iframe
                title="Video Player"
                src={`https://www.youtube.com/embed/${itemData.id?.videoId}`}
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default DetailPage;
