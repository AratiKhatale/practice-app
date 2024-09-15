import { configureStore } from '@reduxjs/toolkit';
import iteamSlice from '../reducer/iteamSlice';


export const store = configureStore({
  reducer: {
    items: iteamSlice,
  },
});
