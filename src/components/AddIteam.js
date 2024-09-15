import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Box, Typography } from '@mui/material';
import { addItem } from '../reducer/iteamSlice';

const AddItem = () => {
  const [newItem, setNewItem] = useState('');
  const dispatch = useDispatch();

  const handleAddItem = () => {
    if (newItem.trim()) {
      dispatch(addItem(newItem)); // Dispatch the action to add a new item
      setNewItem(''); // Clear input field
    }
  };

  return (
    <Box sx={{ display: 'flex', gap: 2, marginBottom: 2 }}>
      <TextField
        variant="outlined"
        label="Add New Item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        fullWidth
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddItem}
        style={{textTransform:'none', }}
      >
        <Typography>
        Add Item
        </Typography>
      </Button>
    </Box>
  );
};

export default AddItem;
