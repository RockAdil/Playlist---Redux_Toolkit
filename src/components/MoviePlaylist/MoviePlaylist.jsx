import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ListGroup } from 'react-bootstrap';

import { createRandomMovie } from '../../data/Faker';
import { addMovie, removeMovie } from '../../store';
import './MoviePlaylist.css';

const MoviePlaylist = () => {
  const dispatch = useDispatch();

  const moviePlaylist = useSelector((state) => {
    return state.movies;
  });

  const handleMovieAdd = (movie) => {
    dispatch(addMovie(movie));
  };

  const handleMovieRemove = (movie) => {
    dispatch(removeMovie(movie));
  };

  const renderedMovie = moviePlaylist.map((movie) => {
    return (
      <div className='lst' key={movie}>
        <ListGroup.Item className='lst-item'>{movie}</ListGroup.Item>
        <Button
          variant='danger'
          size='sm'
          onClick={() => handleMovieRemove(movie)}
        >
          X
        </Button>
      </div>
    );
  });

  return (
    <div className='movie'>
      <div className='movie-head'>
        <h3>Movie Playlist</h3>
        <div>
          <Button
            className='btn-movie'
            variant='primary'
            onClick={() => handleMovieAdd(createRandomMovie())}
          >
            + Add Movie to Playlist
          </Button>
        </div>
      </div>
      <div className='lst-grp'>
        <ListGroup className=''>{renderedMovie}</ListGroup>
      </div>
    </div>
  );
};

export default MoviePlaylist;
