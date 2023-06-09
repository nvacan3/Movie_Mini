import "./App.css";
import { useState, useEffect } from "react";

function App() {
  // movies state variable
  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  //use effect with fetch to movies endpoint
  useEffect(() => {
    fetch("http://localhost:8080/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  const searchBar = () => {
    null;
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <div className="App">
      <h3>{movies}</h3>
      <input
        className="Search"
        type="text"
        placeholder="Search for a movie..."
        onChange={handleChange}
        value={searchInput}
      />
    </div>
  );

  return <div className="App">{movies}</div>;
}

export default App;
