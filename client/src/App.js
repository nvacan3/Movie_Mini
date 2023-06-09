import "./App.css";
import { useState, useEffect } from "react";

function App() {
  // movies state variable
  const [movies, setMovies] = useState([]);

  //use effect with fetch to movies endpoint
  useEffect(() => {
    fetch("http://localhost:8080/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="App">
      <h3>{movies}</h3>
    </div>
  );

  return <div className="App">{movies}</div>;
}

export default App;
