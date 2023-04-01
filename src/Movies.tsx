import { useState } from 'react';
import data from './MovieData.json';

const movies = data.MovieData;

function MovieList() {
  const [ListOfMovies, setList] = useState(movies);
  const addMovie = () => {
    setList([
      ...movies,
      {
        Category: 'Action/Adventure',
        Title: 'Batman',
        Year: 1989,
        Director: 'Tim Burton',
        Rating: 'PG-13',
      },
    ]);
  };

  return (
    <>
      <div>
        <h3>Joel Hilton's Movie Collection</h3>
      </div>

      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieList;
