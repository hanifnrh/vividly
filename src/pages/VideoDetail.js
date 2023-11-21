import React from 'react';

const VideoDetail = ({ video }) => {
    return (
        <div>
            <h2>{video.snippet.title}</h2>
            <p>{video.snippet.description}</p>
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default VideoDetail;
