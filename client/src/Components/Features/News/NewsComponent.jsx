import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import fetcher from "../../../utils/fetcher";
// import Ticker from "react-ticker";
=======
import Ticker from "react-ticker";
>>>>>>> 99add7ef50b8d22cefcf7d8666a2a7f376a79df4

const News = () => {
  const [newsData, setNewsData] = useState([]);

  const newsApi = process.env.REACT_APP_NEWS_API;
  const newsApiKey = process.env.REACT_APP_NEWS_API_KEY;

<<<<<<< HEAD
  // useEffect(() => {
  //   fetch(`${newsApi}${newsApiKey}`)
  //     .then((response) => response.json())
  //     .then((res) => setNewsData(res))
  //     .catch(err => console.log(err))

  // }, []);
  // console.log(newsData);
=======
  useEffect(() => {
    fetch(`${newsApi}${newsApiKey}`)
    .then(response=> response.json())
      .then((response) => setNewsData(response?.articles))
      .catch(err=> console.log(err))
  }, [newsApi, newsApiKey]);
>>>>>>> 99add7ef50b8d22cefcf7d8666a2a7f376a79df4


  return (
    <div className="news-ticker-div">
      {/* <Ticker mode="smooth" direction="toRight">
        {({ index }) => (
          <>
            <h1>{newsData[index]?.source?.name}</h1>
            <h1>{newsData[index]?.description}</h1>
            <h1>{newsData[index]?.title}</h1>
            <img src={newsData[index]?.urlToImage} alt="" />
          </>
        )}
      </Ticker> */}
    </div>
  );
};
export default News;
