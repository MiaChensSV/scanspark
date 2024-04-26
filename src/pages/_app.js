import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import Page from '../components/Page';
import { ThemeProvider } from '@mui/material/styles';
import getTheme from 'theme';

import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-image-lightbox/style.css';
import 'aos/dist/aos.css';

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Scanspark Group AB | Get all you want.</title>
      </Head>
      <ThemeProvider theme={getTheme('dark', null)}>
        <Page>
          <Component {...pageProps} />
        </Page>
      </ThemeProvider>
    </React.Fragment>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
