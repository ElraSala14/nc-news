import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import axios from "axios";
//import ErrorContext from "../Errorcontext/Errorcontext";

function Articlesbytopic() {
const { topic } = useParams();
console.log(topic, '<----- topic params')
const [topicArticle, setTopicArticle] = useState([]); 
const [isLoading, setIsLoading] = useState(true);
// const {setError} = useContext(ErrorContext)
useEffect(() => {
    setIsLoading(true);
    fetch(`https://nc-news-example-5.herokuapp.com/api/articles?topic=${topic}`)
      .then((res) => {
        return res.json();
      })
      .then((body) => {
        setTopicArticle(body.articles);
        setIsLoading(false);
      });
  }, [topic]);
//useEffect(() => {
//     axios
//       .get(
//         `https://news-be-heroku.herokuapp.com/api/articles?topic=${topic}`
//       )
//       .then(({ data: { article } }) => {
//         setTopicArticle(article);
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         setError(err.response.data);
//       });
//   });


  return isLoading ? (
    <p>Loading</p>
  ) : (
    <section>
        <br/>
        <hr/>
        <ul>
        {topicArticle.map((article) => {
          return (
          <div className="articleName" key={article.article_id}>
            <p>{article.title}</p>
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

export default Articlesbytopic;