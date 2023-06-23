// import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ListGroup } from 'react-bootstrap';

import { createRandomSong } from '../../data/Faker';
import { addSong, removeSong } from '../../store';
import './SongPlaylist.css';

const SongPlaylist = () => {
  const dispatch = useDispatch();

  const songPlaylist = useSelector((state) => {
    return state.songs;
  });

  const handleSongAdd = (song) => {
    dispatch(addSong(song));
  };

  const handleSongRemove = (song) => {
    dispatch(removeSong(song));
  };

  const renderedSong = songPlaylist.map((song) => {
    return (
      <div className='lst' key={song}>
        <ListGroup.Item>{song}</ListGroup.Item>
        <Button
          variant='danger'
          size='sm'
          onClick={() => handleSongRemove(song)}
        >
          X
        </Button>
      </div>
    );
  });

  return (
    <div className='song'>
      <div>
        <h3>Song Playlist</h3>
        <div>
          <Button
            className='btn-song'
            variant='primary'
            onClick={() => handleSongAdd(createRandomSong())}
          >
            + Add Song to Playlist
          </Button>
        </div>
      </div>
      <div className='lst-grp'>
        <ListGroup className=''>{renderedSong}</ListGroup>
      </div>
    </div>
  );
};

export default SongPlaylist;
