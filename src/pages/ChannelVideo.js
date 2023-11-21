import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/card';

export default function LandingPage() {
    const [data, setData] = useState(null);
    const [isLoaded, setisLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState('All');
    const nav = useNavigate();

    useEffect(() => {
        const fetchData = async (query) => {
            setIsLoading(true);
            try {
                const response = await axios.get('https://youtube-v31.p.rapidapi.com/search', {
                    params: {
                        channelId: 'UCdU5OncGSaRQNKHVCsyXppg',
                        part: 'snippet,id',
                        order: 'date',
                        maxResults: '50'
                    },
                    headers: {
                        'X-RapidAPI-Key': '113ec38266msh8121ec0eb2a219fp1ed462jsn532b65aa5bde',
                        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
                    },
                });
                if (response.status === 200) {
                    setData(response.data);
                    setisLoaded(true);
                    setIsLoading(false);
                }
            } catch (err) {
                console.log(err);
                setIsLoading(false);
            }
        };
        if (!isLoaded) {
            fetchData(query);
        }
    }, [isLoaded, query]);

    const onSearch = (e) => {
        if (e.key === 'Enter') {
            setisLoaded(false);
            setQuery(e.target.value);
        }
    };

    const handleClick = (item) => {
        navToDetail(item);
    };

    const navToDetail = (item) => {
        nav(`/detail/${item.id.videoId}`, { state: { itemData: item } });
    };

    return (
        <main>
            <input type="text" placeholder="Search videos" onKeyDown={(e) => onSearch(e)} />
            <h3 className="title">{query} Videos</h3>
            {!data || isLoading ? (
                <p className='loading'>Loading...</p>
            ) : (
                <div className="card-container">
                    {data.items.map((item, index) => {
                        return <Card data={item} key={index} onClick={() => handleClick(item)} />;
                    })}
                </div>
            )}
        </main>
    );
}
