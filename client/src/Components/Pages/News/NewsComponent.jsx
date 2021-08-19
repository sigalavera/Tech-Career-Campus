import React, { useState, useEffect } from 'react'

const News = () => {
    const [newsData, setNewsData] = useState([]);

    const api = "https://newsapi.org/v2/top-headlines?country=il&category=technology&apiKey="
    const api_key="eacee67e305a4dab808bf7f4f527a643"
    useEffect(() => {
        fetch(`${api}${api_key}`)
            .then((res) => res.json())
            .then((response) => {
                setNewsData(response)

            })
            .catch(err => {
                console.error(err);
            });

    }, [])

    console.log(newsData.articles);

    return (
        <div>
           

        </div>
    )
}
export default News