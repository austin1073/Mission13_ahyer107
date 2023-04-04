import { useState } from 'react';
import { Movie } from '../types/movie';

function MovieTable() {
  const [movieData, setMovieData] = useState<Movie[]>([]);

  return (
    <>
      <div className="row">
        <h4>The Best Movies Accoring to Joel Hilton</h4>
      </div>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Edited</th>
            <th>LentTo</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {movieData.map((m) => (
            <tr key={m.MovieId}>
              <td>{m.Title}</td>
              <td>{m.Title}</td>
              <td>{m.Year}</td>
              <td>{m.Director}</td>
              <td>{m.Rating}</td>
              <td>{m.Edited}</td>
              <td>{m.LentTo}</td>
              <td>{m.Notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MovieTable;
