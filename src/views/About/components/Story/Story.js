/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Story = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column'}>
        <Grid item container alignItems={'center'} xs={12} md={6}>
          <Box>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              About us{' '}
            </Typography>
            <Typography component={'p'}>
              Scanspark AB, headquartered in Helsingborg, is a privately owned
              consulting firm with a diverse portfolio of services. Established
              in 2014, we specialize in facilitating cultural exchanges and
              exports, with a focus on clothing, textiles, sports equipment,
              health-promoting products, foodstuffs, skincare, and cosmetics.
              Additionally, we provide tailored IT consulting services to small
              and medium-sized enterprises, emphasizing website development and
              digital marketing strategies.
              <br />
              We design and implement creative solutions to everyday business
              problems.
              <br />
              <br />
             
            </Typography>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              Our Story
            </Typography>
            <Typography component={'p'}>
              Over the years, we've assisted numerous Chinese companies in
              registering their services in Sweden and orchestrating successful
              meetings with potential clients. Our expertise extends to the
              exportation of various goods, including clothing, textiles, sports
              equipment, baby milk and related products, skincare, and
              cosmetics. At Scanspark, we are committed to fostering
              international partnerships and facilitating seamless business
              transactions between different markets.
              
              <br />
              <br />
              
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
        >
          <Box maxWidth={500} width={1}>
            <Box
              component={'img'}
              src={
                'https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration1.svg'
              }
              width={1}
              height={1}
              sx={{
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Story;
