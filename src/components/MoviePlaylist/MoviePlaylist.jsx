import React from 'react';
import { Button } from 'react-bootstrap';

import { createRandomMovie } from '../../data/Faker';
import './MoviePlaylist.css';

const MoviePlaylist = () => {
  const moviePlaylist = [];

  const handleMovieAdd = (movie) => {
    // To Do:
    // Add movie to list of movies
  };
  const handleMovieRemove = (movie) => {
    // To Do:
    // Remove movie from list of movies
  };

  const renderedMovie = moviePlaylist.map((movie) => {
    return (
      <li key={movie}>
        {movie}
        <Button variant='outline-danger' size='sm'>
          X
        </Button>
      </li>
    );
  });

  return (
    <div className='movie'>
      <div>
        <h3>Movie Playlist</h3>
        <div>
          <Button
            className='btn-movie'
            variant='primary'
            onClick={handleMovieAdd(createRandomMovie())}
          >
            + Add Movie to Playlist
          </Button>
        </div>
      </div>
      <ul>{renderedMovie}</ul>
    </div>
  );
};

export default MoviePlaylist;
