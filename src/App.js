import React from 'react';
import Button from 'react-bootstrap/Button';

import './App.css';
import SongPlaylist from './components/SongPlaylist/SongPlaylist';
import MoviePlaylist from './components/MoviePlaylist/MoviePlaylist';

const App = () => {
  const handleReset = () => {};

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
    </div>
  );
};

export default App;
