import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import clasificacionReducer from '../features/clasificacion/clasificacion_slice'
import { devToolsEnhancer } from '@redux-devtools/extension';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    clasificacion: clasificacionReducer,
  },
  
},devToolsEnhancer());
