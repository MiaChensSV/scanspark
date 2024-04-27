import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

const Topbar = ({ onSidebarOpen }) => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
      padding={3}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="Scanspark Group AB"
        width={{ xs: 100, md: 120 }}
      >
        <Box
          component={'img'}
          src={
            mode === 'light'
              ? './logo.jpg'
              : './logo.jpg'
          }
          height={1}
          width={1}
        />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box marginLeft={3}>
          <Link underline="none" component="a" href="/" color="text.primary">
            Home
          </Link>
        </Box>
        <Box marginLeft={3}>
          <Link
            underline="none"
            component="a"
            href="/about"
            color="text.primary"
          >
            About us
          </Link>
        </Box>
        <Box marginLeft={3}>
          <Link
            underline="none"
            component="a"
            href="/contact-page"
            color="text.primary"
          >
            Contact us
          </Link>
        </Box>
        <Box marginLeft={3}>
          <Link underline="none" component="a" href="/faq" color="text.primary">
            FAQ
          </Link>
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }} alignItems={'center'}>
        <Box marginRight={1}>
        </Box>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
};

export default Topbar;