import { configureStore } from '@reduxjs/toolkit';
import { filesApi } from './filesApi';

export const store = configureStore({
  reducer: {
    [filesApi.reducerPath]: filesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filesApi.middleware),
});
