import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import clasificacionReducer from '../features/clasificacion/clasificacion_slice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    clasificacion: clasificacionReducer,
  },
});
