import { configureStore, createSlice } from '@reduxjs/toolkit';

// Songs REDUCER
const songsSlice = createSlice({
  name: 'song',
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
});

// Movie REDUCER
const movieSlice = createSlice({
  name: 'movie',
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer, // Songs (State) in STORE
    movies: movieSlice.reducer, // Movies (State) in STORE
  },
});

export { store };
export const { addSong, removeSong } = songsSlice.actions;

// const staringState = store.getState(); // Getting our all STATE (Songs and Movies)
// console.log(JSON.stringify(staringState));

// // DISPATCH the Action
// store.dispatch(songsSlice.actions.addSong('Some Songs!!'));

// const finalState = store.getState();
// console.log(JSON.stringify(finalState));
