import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Viewcomments from "./Viewcomments";
import ErrorContext from "../Errorcontext/Errorcontext";

function Article() {
const { article_id } = useParams();
const [addComment, setAddComment] = useState("");
const [article, setArticle] = useState({}); 
const [isLoading, setIsLoading] = useState(true);
const {setError} = useContext(ErrorContext)
useEffect(() => {
    axios
      .get(
        `https://nc-news-example-5.herokuapp.com/api/articles/${article_id}`
      )
      .then(({ data: { article } }) => {
        setArticle(article);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.response.data);
      });
  });

  const handleSubmit= (event) =>{
    event.preventDefault();
    const commentToAdd = {
         body: addComment, 
         username: article.author,
     }
     return axios
    .post(
      `https://nc-news-example-5.herokuapp.com/api/articles/${article_id}/comments`,
      commentToAdd
    )
    .then((res) => {
      window.location.reload(false);

      return res.data.commentToAdd;

    });

    // fetch(`https://nc-news-example-5.herokuapp.com/api/articles/${article_id}/comments`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(commentToAdd),
    //   }).then(res => { return res.json()})
    //   .then(({ data }) => {
    //     return data.comment;
    //   });
}

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
            <div>
    <form onSubmit={handleSubmit}>
        <label htmlFor="comment_name"> Add comment</label>
        <input id="add_comment" placeholder="comment" type="text" onChange={(event) => setAddComment(event.target.value)}></input>
        <input type="submit" value="submit"></input>
    </form>
    </div>
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