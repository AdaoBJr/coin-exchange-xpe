import React, { PropsWithChildren } from 'react';
import { Box, Paper } from '@mui/material';

import { GridContainer, PaperWrapper } from 'lib/shared';

export const Body: React.FC<PropsWithChildren> = ({ children }) => (
  <Box sx={GridContainer}>
    <Paper sx={PaperWrapper}>{children}</Paper>
  </Box>
);
