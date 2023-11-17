import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./channel.css";

const Channel = () => {
    const [channelData, setChannelData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchChannelData = async () => {
            try {
                const response = await axios.get('https://youtube-v31.p.rapidapi.com/channels', {
                    params: {
                        part: 'snippet,statistics',
                        id: 'UCBVjMGOIkavEAhyqpxJ73Dw'
                    },
                    headers: {
                        'X-RapidAPI-Key': '113ec38266msh8121ec0eb2a219fp1ed462jsn532b65aa5bde',
                        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
                    }
                });
                if (response.status === 200) {
                    setChannelData(response.data.items[0]);
                    setIsLoading(false);
                }
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        };

        fetchChannelData();
    }, []);

    return (
        <div className='channel-wrapper'>
            <div className='wrapper'>
                <h1>Subscribed Channel</h1>
                {isLoading ? (
                    <p>Loading...</p>
                ) : channelData ? ( // Check if channelData exists before accessing its properties
                    <div className='detail-wrapper'>
                        <img
                            src={channelData.snippet.thumbnails.high.url}
                            alt={channelData.snippet.title}
                        />
                        <div className='title-wrapper'>
                            <h2>{channelData.snippet.title}</h2>
                            <p>{channelData.snippet.description}</p>
                            <Link to={`/channel-video/${channelData.id}`}>View Channel Videos</Link>
                        </div>
                    </div>
                ) : (
                    <p>No channel data available</p>
                )}
            </div>
        </div>
    );
    
};

export default Channel;
