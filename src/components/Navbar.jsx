import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
const [ listOfTopics, setListOfTopics] = useState([]);
const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://nc-news-example-5.herokuapp.com/api/topics")
    .then((res) => res.json())
    .then(({topics}) => {
      setListOfTopics(topics)
      setIsLoading(false);
    })
}, [])

return isLoading ? (
  <p>Loading</p>
) : (
  <div>
      {listOfTopics.map((topic) => {
        return (
          <p className="Singlitopic key={topic.slug">
            <Link className="Totopic" to={`/topics/${topic.slug}`}>{`${topic.slug[0].toUpperCase()}${topic.slug.slice(1)}`}</Link>
          </p>
        )
      })}
      <p> <Link className="Homepage" to={"/"}>home</Link></p>
      </div>
  );
}

export default Navbar;