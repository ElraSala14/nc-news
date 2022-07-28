import { useParams } from "react-router-dom";
import Articles from "./Articles";
function Topic() {
  const { topic } = useParams();
  return (
    <div>
    <h3>A list of all {topic.toUpperCase()} articles</h3>
    <Articles />
    </div>
  )
}

export default Topic;