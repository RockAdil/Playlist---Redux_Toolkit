import { configureStore, createSlice } from '@reduxjs/toolkit';

// Movie REDUCER
const moviesSlice = createSlice({
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
    reset(state, action) {
      return [];
    },
  },
});

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
    resets(state, action) {
      return [];
    },
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer, // Songs (State) in STORE
    movies: moviesSlice.reducer, // Movies (State) in STORE
  },
});

console.log(store.getState());

export { store };
export const { addSong, removeSong, resets } = songsSlice.actions;
export const { addMovie, removeMovie, reset } = moviesSlice.actions;

// const staringState = store.getState(); // Getting our all STATE (Songs and Movies)
// console.log(JSON.stringify(staringState));

// // DISPATCH the Action
// store.dispatch(songsSlice.actions.addSong('Some Songs!!'));

// const finalState = store.getState();
// console.log(JSON.stringify(finalState));
