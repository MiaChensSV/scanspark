/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const WhoWeAre = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column'}>
        <Grid
          item
          container
          alignItems={'center'}
          justifyContent="center"
          xs={12}
          md={12}
        >
          <Box>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              Who are we?
            </Typography>
            <Typography component={'p'} color={'text.secondary'}>
              We are a group of Chinese individuals with extensive experience
              living in Sweden. With deep insights into both Chinese and Swedish
              cultures, we bring a unique perspective to our work. For the past
              decade, we have been actively involved in exporting, leveraging
              our expertise to facilitate successful business transactions.
              Additionally, our team comprises talented software developers,
              enabling us to deliver innovative solutions to our clients
            </Typography>
          </Box>
        </Grid>
       
      </Grid>
    </Box>
  );
};

export default WhoWeAre;
