import logo from "./logo.svg";
import "./App.css";

function App() {
  const movies = [
    { title: "Mean Girls" },
    { title: "Hackers" },
    { title: "The Grey" },
    { title: "Sunshine" },
    { title: "Ex Machina" },
  ];
  const content = movies.map((movie) => {
    return (
      <div key={movie} className="App">
        <h3>{movie.title}</h3>
      </div>
    );
  });
  return <div className="App">{content}</div>;
}

export default App;
