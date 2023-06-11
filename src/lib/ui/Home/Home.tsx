import React from 'react';
import { Grid } from '@mui/material';

import { Body } from 'lib/shared';

const Home: React.FC = ({ data }: any) => {
  console.log('data', data);
  return (
    <Body>
      <Grid container>
        <Grid item xs={12}>
          Home
        </Grid>
      </Grid>
    </Body>
  );
};
export default Home;
