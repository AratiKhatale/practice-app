import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Grid, Card, CardContent, Typography, Pagination, Box } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const ItemList = () => {
  const { items, searchTerm } = useSelector((state) => state.items);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Define how many items you want to show per page

  // Filter items based on search term
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  // Get the items for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  // Handle pagination change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <Grid container spacing={2} style={{display:"flex", flexDirection:"column", alignContent:'center'}}>
        {currentItems.map((item, index) => (
          <Grid  key={index} >
            {/* <Card variant="outlined">
              <CardContent>
                <Typography variant="h6">{item}</Typography>
              </CardContent>
            </Card> */}

            <List  marker="circle">
                <ListItem>{item}</ListItem>
            </List>
          </Grid>
        ))}
      </Grid>

      {/* Pagination Controls */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </>
  );
};

export default React.memo(ItemList);
