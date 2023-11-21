import React from 'react';
import { useParams } from 'react-router-dom';

const PlayVideo = () => {
    const { videoId } = useParams();

    return (
        <div>
            <h1>Playing Video</h1>
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default PlayVideo;
