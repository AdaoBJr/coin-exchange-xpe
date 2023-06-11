import React from 'react';
import Head from 'next/head';
import { AppProps as AppPropsNext } from 'next/app';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { CacheProvider, EmotionCache } from '@emotion/react';

import { SxApp } from './app.styles';
import { MuiTheme, createEmotionCache } from 'theme';

const clientSideEmotionCache = createEmotionCache();

export interface AppProps extends AppPropsNext {
  emotionCache?: EmotionCache;
}

const App: React.FC<AppProps> = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) => (
  <CacheProvider value={emotionCache}>
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <ThemeProvider theme={MuiTheme}>
      <CssBaseline />
      <Box sx={SxApp}>
        <Component {...pageProps} />
      </Box>
    </ThemeProvider>
  </CacheProvider>
);

export default App;
