/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Features = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

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
