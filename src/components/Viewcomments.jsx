import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Viewcomments() {
const { article_id } = useParams();
console.log(article_id)
const [currComments, setCurrComments] = useState(''); 
const [isLoading, setIsLoading] = useState(true);
useEffect(() => {
    setIsLoading(true);
    fetch(`https://news-be-heroku.herokuapp.com/api/articles/${article_id}/comments`)
      .then((res) => {
        console.log(res, 'RESjjjjjjjjjjjjj')
        return res.json();
      })
      .then(({comments}) => {
        setCurrComments(comments);
        setIsLoading(false);
      });
  }, [article_id]);

  return isLoading ? (
    <p>Loading</p>
  ) : (
    <section>
        <br/>
        <h3>Comments</h3>
        <ul>
        {currComments.map((comment) => {
          return (
          <div className="commentID" key={comment.comment_id}>
            <p>{comment.body}</p>
            <hr/>
        </div>
          );
        })}
        </ul>
    </section>
  );
}

export default Viewcomments;