import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./channelvideo.css";

const ChannelVideo = () => {
    const [videos, setVideos] = useState([]);
    const { channelId } = useParams();

    useEffect(() => {
        const fetchChannelVideo = async () => {
            try {
                const response = await axios.get('https://youtube-v31.p.rapidapi.com/search', {
                    params: {
                        channelId: 'UCBVjMGOIkavEAhyqpxJ73Dw',
                        part: 'snippet,id',
                        order: 'date',
                        maxResults: '50'
                    },
                    headers: {
                        'X-RapidAPI-Key': '113ec38266msh8121ec0eb2a219fp1ed462jsn532b65aa5bde',
                        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
                    }
                });
                if (response.status === 200) {
                    setVideos(response.data.items);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchChannelVideo();
    }, [channelId]);

    return (
        <div>
            <h1>Channel Videos</h1>
            <div>
                {videos.map((video) => (
                    <div key={video.id.videoId} className='channelvideos'>

                        <div className='channelwrapper'>
                            <h2>{video.snippet.title}</h2>
                            <p>{video.snippet.description}</p>
                            <img src={video.snippet.thumbnails.default.url} alt="Thumbnail" />
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );

};

export default ChannelVideo;
