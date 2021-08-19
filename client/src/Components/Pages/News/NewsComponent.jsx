import React, { useState, useEffect } from "react";
import { fetchNewApi } from "../../../FetchFunctions/FetchFunctions";
const News = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetchNewApi().then((response) => setNewsData(response.articles));
  }, []);

  console.log(newsData);

  return <div></div>;
};
export default News;
