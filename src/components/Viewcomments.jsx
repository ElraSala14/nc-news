import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Viewcomments() {
const { article_id } = useParams();
const [currComments, setCurrComments] = useState(''); 
const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://nc-news-example-5.herokuapp.com/api/articles/${article_id}/comments`)
      .then((res) => {
        return res.json();
      })
      .then(({comments}) => {
        setCurrComments(comments);
        setIsLoading(false);
      });
  }, [article_id]);

  const handleOnClickDelete = (comment_id) => {
    fetch(
      `https://nc-news-example-5.herokuapp.com/api/comments/${comment_id}`,
      {
        method: "DELETE",
      }
    ).then(() => window.location.reload(false));
  };
  return isLoading ? (
    <p>Loading</p>
  ) : (
    <section>
        <br/>
        <h3>Comments</h3>
        {currComments.map((comment) => {
          return (
          <div className="commentID" key={comment.comment_id}>
            <p>{comment.body}</p>
           <button onClick={() => handleOnClickDelete(comment.comment_id)}> Delete comment </button>
           <hr/>

        </div>
          );
        })}
    </section>
  );
}

export default Viewcomments;