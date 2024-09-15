import React from 'react';
import { TextField, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../reducer/iteamSlice';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <Box sx={{ marginBottom: 2 }}>
      <TextField
        variant="outlined"
        fullWidth
        label="Search Items"
        onChange={handleSearch}
      />
    </Box>
  );
};

export default SearchBar;
