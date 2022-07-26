import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Viewcomments from "./Viewcomments";

function Article() {
const { article_id } = useParams();
const [article, setArticle] = useState({}); 
const [isLoading, setIsLoading] = useState(true);
useEffect(() => {
    setIsLoading(true);
    fetch(`https://news-be-heroku.herokuapp.com/api/articles/${article_id}`)
      .then((res) => {
        return res.json();
      })
      .then(({article}) => {
        setArticle(article);
        setIsLoading(false);
      });
  }, [article_id]);

  return isLoading ? (
    <p>Loading</p>
  ) : (
    <section>
        <br/>
        <hr/>
        <ul>
          <div className="articleName" key={article.article_id}>
            <p> {article.title} </p>
            <p>Author: {article.author}</p>
            <p>Date: {article.created_at}</p>
            <div className="artcile_body">
            <p>{article.body}</p>
            </div>
            <div className="viewComments" key={article.title}>
            <Viewcomments />
            </div>
            <hr/>
        </div>
        </ul>
    </section>
  );
}

export default Article;