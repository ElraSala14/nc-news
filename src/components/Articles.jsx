import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Articles() {
  const [listArticles, setListArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://nc-news-example-5.herokuapp.com/api/articles")
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
        <ul>
        {listArticles.map((article) => {
          return (
          <div className="articleName" key={article.article_id}>
            <p><Link to={`/articles/${article.article_id}`}> {article.title} </Link></p>
            <p>Author: {article.author}</p>
            <p>Date: {article.created_at}</p>
            <hr/>
        </div>
          );
        })}
        </ul>
    </section>
  );
}

export default Articles;