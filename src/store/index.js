import { configureStore } from '@reduxjs/toolkit';
import { moviesReducer, addMovie, removeMovie } from './slices/moviesSlice';
import { addSong, removeSong, songsReducer } from './slices/songSlice';
import { reset } from './actions';

const store = configureStore({
  reducer: {
    songs: songsReducer, // Songs (State) in STORE
    movies: moviesReducer, // Movies (State) in STORE
  },
});

export { store, reset, addSong, removeSong, addMovie, removeMovie };

// const staringState = store.getState(); // Getting our all STATE (Songs and Movies)
// console.log(JSON.stringify(staringState));

// // DISPATCH the Action
// store.dispatch(songsSlice.actions.addSong('Some Songs!!'));

// const finalState = store.getState();
// console.log(JSON.stringify(finalState));
