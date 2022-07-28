import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Articles() {
  const { topic } = useParams();
  const [listArticles, setListArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    if ( topic ) {
      setIsLoading(true);
      fetch(`https://nc-news-example-5.herokuapp.com/api/articles?topic=${topic}`)
        .then((res) => {
          return res.json();
        })
        .then((body) => {
          setListArticles(body.articles);
          setIsLoading(false);
        });
    } else {
      fetch("https://nc-news-example-5.herokuapp.com/api/articles")
      .then((res) => {
        console.log(res, 'res')
        return res.json();
      })
      .then((body) => {
        setListArticles(body.articles);
        setIsLoading(false);
      });
    }
  }, [topic]);

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