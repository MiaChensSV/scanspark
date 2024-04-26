/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Hero = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item container alignItems={'center'} xs={12} md={6}>
        <Box>
          <Box marginBottom={2}>
            <Typography
              variant="h2"
              color="text.primary"
              sx={{
                fontWeight: 700,
              }}
            >
              Contact us
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h6"
              component="p"
              color="text.secondary"
              sx={{ fontWeight: 400 }}
            >
              We're here to help! Whether you have a question about our
              products, need assistance with an order, or just want to say
              hello, feel free to reach out to us using the form below. Our
              dedicated team is committed to providing you with prompt and
              personalized support
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          height={1}
          width={1}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Box height={1} width={1} maxWidth={500}>
            <Box
              component={'img'}
              src={
                'https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration6.svg'
              }
              width={1}
              height={1}
              sx={{
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
              }}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
