import { configureStore } from '@reduxjs/toolkit';

import favoritesReducer from './favorites';
// import favoritesSlice from './favorites';

export const store = configureStore({
    reducer: {
        favoriteMeals: favoritesReducer,
        // favoriteMeals: favoritesSlice,
    }
})
