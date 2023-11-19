// ArticleList.js
import React, { useEffect, useState } from 'react';
import Article from './Article'; // Make sure to adjust the path based on your file structure

const ArticlesList = () => {
    const [articles, setArticles] = useState();
    useEffect(() => {
        const getArticles = async () => {
            try {
                const response = await fetch('http://localhost:8080/article/list');
                console.log('response', response);
                const data = await response.json();
        
                console.log("test ", response);
                setArticles(data);
            } catch (error) {
                console.error("error while fetching articles")
            }
        }
        getArticles();
    }, [])

    if (articles === undefined || articles.length === 0)
        return (<div></div>)
        return (<div>
            {articles.map((article, index) => (
                <Article
                key={index} // It's recommended to use a unique key for each item in the list
                title={article.title}
                description={article.description}
                content={article.content}
                />
            ))}
        </div>);
};

export default ArticlesList;
