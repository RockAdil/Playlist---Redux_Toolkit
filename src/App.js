import React from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';

import './App.css';
import SongPlaylist from './components/SongPlaylist/SongPlaylist';
import MoviePlaylist from './components/MoviePlaylist/MoviePlaylist';
import { reset } from './store';

const App = () => {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div className='container'>
      <h1>Playlist</h1>
      <div>
        <Button variant='danger' onClick={() => handleReset()}>
          Reset Both Playlist
        </Button>
      </div>
      <hr />
      <div>
        <SongPlaylist />
      </div>
      <hr />
      <div>
        <MoviePlaylist />
      </div>
      <hr />

      <footer className='footer'>
        © 2023 Playlist-Adil. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
