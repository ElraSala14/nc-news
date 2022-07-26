import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Viewcomments from "./Viewcomments";
import ErrorContext from "../Errorcontext/Errorcontext";

function Article() {
const { article_id } = useParams();
const [article, setArticle] = useState({}); 
const [isLoading, setIsLoading] = useState(true);
const {setError} = useContext(ErrorContext)
useEffect(() => {
    axios
      .get(
        `https://news-be-heroku.herokuapp.com/api/articles/${article_id}`
      )
      .then(({ data: { article } }) => {
        setArticle(article);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.response.data);
      });
  }, [article_id]);


// useEffect(() => {
//     setIsLoading(true);
//     fetch(`https://news-be-heroku.herokuapp.com/api/articles/${article_id}`)
//       .then((res) => {
//         return res.json();
//       })
//       .then(({article}) => {
//         setArticle(article);
//         setIsLoading(false);
//       });
//   }, [article_id]);

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