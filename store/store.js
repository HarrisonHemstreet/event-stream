import { configureStore } from '@reduxjs/toolkit';
import mainReducer from './slices/main-slice';
import saveStateReducer from './slices/saveStateSlice';

export const store = configureStore({
    reducer: {
        saveState: saveStateReducer,
        main: mainReducer,
    },
});