// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Topic() {
  const [topicsArticle, setTopicsArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://nc-news-example-5.herokuapp.com/api/topics")
      .then((res) => {
        return res.json();
      })
      .then((body) => {
        setTopicsArticle(body.topics);
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <p>Loading</p>
  ) : (
      <div>
        {topicsArticle.map((topic) => {
          return (
            <div>
                <p><Link to={`/topics/${topic.slug}`} key={topic.slug}> {`${topic.slug[0].toUpperCase()}${topic.slug.slice(1)}`} </Link></p>
            </div>
            );
        })}
      </div>
    );
  
}

export default Topic;