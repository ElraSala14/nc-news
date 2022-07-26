import React, { useState, useEffect } from "react";

function Articles() {
  const [listArticles, setListArticles] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://news-be-heroku.herokuapp.com/api/articles")
      .then((res) => {
        return res.json();
      })
      .then((body) => {
        setListArticles(body.articles);
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <p>Loading</p>
  ) : (
    <section>
        <br/>
        <hr/>
        {listArticles.map((article) => {
          return (
          <div className="articleName">
            <p>{article.title}</p>
            <p>Author: {article.author}</p>
            <p>Date: {article.created_at}</p>
            <hr/>
        </div>
          );
        })}
    </section>
  );
}

export default Articles;