import React from 'react';
import { Grid, Paper } from '@mui/material';
import { Animation, Title } from 'lib/shared';

import { useError } from 'services/talons';
import { GridContainer, PaperWrapper } from 'lib/shared';

const Error: React.FC = () => {
  const {
    errorProps: { animationProps, subTitleProps, textProps },
  } = useError();

  return (
    <Grid container sx={GridContainer}>
      <Grid item xs={12}>
        <Paper sx={PaperWrapper}>
          <Animation {...animationProps} />
          <Title {...subTitleProps} />
          <Title {...textProps} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Error;
