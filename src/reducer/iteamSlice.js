import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: ['Apple', 'Banana', 'Orange', 'Grapes', 'Strawberry'],
  searchTerm: '',
};

const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    addItem: (state, action) => {
      state.items.push(action.payload); // Add new item to the list
    }
  }
});

export const { setSearchTerm, addItem } = itemSlice.actions;
export default itemSlice.reducer;
