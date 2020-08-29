import React, { useEffect, useState } from 'react';
import NewsCart from '../newsCart/NewsCart';

const News = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
        const url = 'http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=2bad221dbf1446dc91419130a6e18131'
        fetch(url)
        .then(res => res.json())
        .then(data => setNews(data.articles))
    },[])
    return (
        <div>
            <h1>Headline: {} </h1>
            {
            news.map(x => <NewsCart getNews={x} key={x.title}></NewsCart>)
            }
            
        </div>
    );
};

export default News;