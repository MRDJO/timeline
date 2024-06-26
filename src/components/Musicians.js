import React from 'react'
import Musician from './Musician';
import Grid from "@mui/material/Grid";

const Musicians = ({ selectedMusicians }) => {
  return (
    <div>
      <Grid container spacing={3}>
        {selectedMusicians.map((element) => {
          return <Musician musician={element}></Musician>;
        })}
  
      </Grid>
    </div>
  );
};

export default Musicians
