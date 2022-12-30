import "./App.css";
import { useState } from "react";
import MovieCard from "./component/MovieCard";
import Navbar from "./component/Navbar";
function App() {
  const [searsh, setsearsh] = useState();
  const [movie, setmovie] = useState({
    title: "",
    description: "",
    rating: "",
    poster: "",
  });
  const [show, setshow] = useState(false);
  const [search, setsearch] = useState("");
  const [movies, setmovies] = useState([
    {
      title: "The Shaw Redemption",
      description:
        "The Shawshank Redemption has become a classic film - it's even IMDb's top-rated movie of all time - but did you know it almost had an entirely different cast behind those legendary bars",
      rating: 9.2,
      poster: "https://i.ytimg.com/vi/19THOH_dvxg/movieposter_en.jpg",
    },
    {
      title: "The Godfather",
      description:
        "The Godfather is a 1972 American crime film directed by Francis Ford Coppola, who co-wrote the screenplay with Mario Puzo, based on Puzo's best-selling 1969 novel of the same title.",
      rating: 9.2,

      poster:
        "https://www.lab111.nl/wp-content/uploads/2022/01/TGF50_INTL_DIGITAL_PAYOFF_1_SHEET__NED.jpg",
    },
    {
      title: "The Godfather : Part II",
      description:
        "The Godfather Part II is a 1974 American epic crime film produced and directed by Francis Ford Coppola. The film is partially based on the 1969 novel The Godfather by Mario Puzo, who co-wrote the screenplay with Coppola",
      rating: 9.0,
      poster:
        "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    },
    {
      title: "The Dark Knight",
      description:
        "The Dark Knight Changed Hollywood Movies Forever ,it's is a 2008 superhero film directed by Christopher Nolan from a screenplay,he co-wrote with his brother Jonathan.",
      rating: 9.0,
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "The Amazing Spider Men ",
      description:
        "Spider-Man is a 2002 American superhero film based on the Marvel Comics superhero of the same title.Directed by Sam Raimi from a screenplay by David Koepp.",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/f/f3/Spider-Man2002Poster.jpg",
    },
  ]);
  const handleAdd = (m) => {
    setmovies([...movies, m]);
  };
  return (
    <div className="App">
      <Navbar search={searsh} setsearsh={setsearsh} />
      <div className="top-section">
        <input
          type="text"
          placeholder="loocking for a movie"
          onChange={(e) => setsearch(e.target.value)}
        />
        <button onClick={() => setshow(true)}>add new movie</button>
        {show && (
          <div className="new-mv">
            <div className="movie-content">
              <span onClick={() => setshow(false)}>x</span>
              <input
                type="text"
                placeholder="title"
                onChange={(e) => setmovie({ ...movie, title: e.target.value })}
              />
              <input
                type="text"
                placeholder="description"
                onChange={(e) =>
                  setmovie({ ...movie, description: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="rating"
                onChange={(e) => setmovie({ ...movie, rating: e.target.value })}
              />
              <input
                type="text"
                placeholder="poster"
                onChange={(e) => setmovie({ ...movie, poster: e.target.value })}
              />
              <button
                onClick={() => {
                  handleAdd(movie);
                  setshow(false);
                }}
              >
                add
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="card-liste">
        {movies
          .filter((el) => el.title.includes(search))
          .map((el) => (
            <MovieCard movie={el} />
          ))}
      </div>
    </div>
  );
}

export default App;
