import React from 'react';
import { Container, Typography } from '@mui/material';
import AddItem from './components/AddIteam';
import SearchBar from './components/SearchBar';
import IteamList from './components/IteamList';

function App() {
  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Item Search App
      </Typography>
      <AddItem />  {/* Add item form */}
      <SearchBar />
      <IteamList />
    </Container>
  );
}

export default App;
