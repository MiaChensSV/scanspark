/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const mock = [
  {
    title: 300,
    subtitle:
      '300 + component compositions, which will help you to build any page easily.',
    suffix: '+',
  },
  {
    title: 45,
    subtitle:
      '45 + landing and supported pages to Build a professional website.',
    suffix: '+',
  },
  {
    title: 99,
    subtitle: '99% of our customers rated 5-star our themes over 5 years.',
    suffix: '%',
  },
];

const Features = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [viewPortEntered, setViewPortEntered] = useState(false);
  const setViewPortVisibility = (isVisible) => {
    if (viewPortEntered) {
      return;
    }

    setViewPortEntered(isVisible);
  };

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
        <Grid item xs={12} md={12}>
          <Box marginBottom={4}>
            <Typography sx={{ fontWeight: 700 }} variant={'h4'} gutterBottom>
            Your Bridge to Swedish Markets and Business Success
            </Typography>
            <Typography variant={'h6'} component={'p'} color={'text.secondary'}>
              Scanspark AB, based in Helsingborg, is a consulting firm
              specializing in cultural exchanges, exports, and IT consulting
              since 2014. We facilitate registrations for Chinese companies in
              Sweden, arrange meetings with potential clients, and export a wide
              range of products, including clothing, textiles, sports equipment,
              baby care items, skincare, and cosmetics.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Features;
