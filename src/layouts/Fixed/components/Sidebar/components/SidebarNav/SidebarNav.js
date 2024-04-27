import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

const SidebarNav = ({ pages, onClose }) => {
  const theme = useTheme();
  const [activeLink, setActiveLink] = useState('');
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);

  return (
    <Box paddingBottom={2}>
      <Box
        justifyContent={'flex-end'}
        onClick={() => onClose()}
        display={{ xs: 'flex', md: 'none' }}
      >
        <CloseIcon fontSize="small" />
      </Box>
      <Box paddingX={2}>
        {pages.map((p, i) => (
          <Box marginBottom={1 / 2} key={i}>
            <Button
              component={'a'}
              href={p.href}
              target={p.target}
              fullWidth
              sx={{
                justifyContent: 'flex-start',
                color:
                  activeLink === p.href
                    ? theme.palette.primary.main
                    : theme.palette.text.primary,
                backgroundColor:
                  activeLink === p.href
                    ? alpha(theme.palette.primary.main, 0.1)
                    : 'transparent',
                fontWeight: activeLink === p.href ? 600 : 400,
              }}
            >
              {p.title}
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.array.isRequired,
  onClose: PropTypes.func,
};

export default SidebarNav;
