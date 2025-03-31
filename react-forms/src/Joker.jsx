import { useEffect, useState } from "react";

export default function Joker() {
  let URL = "https://official-joke-api.appspot.com/random_joke";

  let [joke, setJoke] = useState({});
  let [showHeading, setShowHeading] = useState(false);

  async function getNewJoke() {
    let response = await fetch(URL);
    let data = await response.json();
    setJoke({ ...data });
    setShowHeading(false);  
  }

  useEffect(() => {
    getNewJoke();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowHeading(true);
    }, 5000);
  });

  return (
    <div>
      <h3>Joker!</h3>
      <h2>{joke.setup}</h2>
      {showHeading ? <h1>{joke.punchline}</h1> : null}
      <button onClick={getNewJoke}>Get New Joke</button>
    </div>
  );
}
