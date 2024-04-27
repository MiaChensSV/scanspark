import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { useTheme } from '@mui/material/styles';
import Container from '../../../../components/Container';

const contact = [
  {
    label: 'Phone',
    value: '+46 760666658',
    icon: (
      <svg
        width={20}
        height={20}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
      </svg>
    ),
  },
  {
    label: 'WeChat',
    value: 'wyvisions',
    icon: (
      <svg
        width={20}
        height={20}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="currentColor"
      >
        <path
          data-name="layer1"
          d="M64 43.1c0-9.4-8.9-17-20-17-11 0-20 7.6-20 17s8.9 17 20 17a23.272 23.272 0 0 0 9.6-2.1l7.9 3.4-.9-8.8a15.526 15.526 0 0 0 3.4-9.5zm-26.7-4.6a2.8 2.8 0 1 1 2.8-2.8 2.734 2.734 0 0 1-2.8 2.8zm13.5 0a2.8 2.8 0 1 1 2.8-2.8 2.8 2.8 0 0 1-2.8 2.8z"
          fill="currentColor"
        ></path>
        <path
          data-name="layer1"
          d="M44 23.9a27.375 27.375 0 0 1 8.7 1.5c0-.4.1-.7.1-1.1C52.8 12 41 2 26.4 2S0 12 0 24.4A20.408 20.408 0 0 0 4.5 37L3.3 48.6l10.4-4.5a29.1 29.1 0 0 0 8.4 2.4 18.61 18.61 0 0 1-.4-3.4c.1-10.6 10.1-19.2 22.3-19.2zm-8.7-13.1a3.8 3.8 0 1 1-3.8 3.8 3.8 3.8 0 0 1 3.8-3.8zm-17.8 7.5a3.714 3.714 0 0 1-3.7-3.8 3.75 3.75 0 1 1 3.7 3.8z"
          fill="currentColor"
        ></path>
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'ssgroupab@gmail.com',
    icon: (
      <svg
        width={20}
        height={20}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    ),
  },
  {
    label: 'Address',
    value: 'Lövsångaregatan 20, Helsingborg',
    icon: (
      <svg
        width={20}
        height={20}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

const Contact = () => {
  const theme = useTheme();

  const LeftSide = () => {
    return (
      <Box>
        <Box marginBottom={2}>
          <Typography variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom>
            Contact us
          </Typography>
        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'space-between'}
        >
          {contact.map((item, i) => (
            <Box
              key={i}
              component={ListItem}
              disableGutters
              width={'auto'}
              padding={0}
            >
              <Box
                component={ListItemAvatar}
                minWidth={'auto !important'}
                marginRight={2}
              >
                <Box
                  component={Avatar}
                  bgcolor={theme.palette.secondary.main}
                  width={40}
                  height={40}
                >
                  {item.icon}
                </Box>
              </Box>
              <ListItemText primary={item.label} secondary={item.value} />
            </Box>
          ))}
        </Box>
      </Box>
    );
  };

  const RightSide = () => {
    return (
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2226.094856212!2d12.686652376479095!3d56.08627526625726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46523200c4a7227f%3A0xf63777e19ca638ba!2sL%C3%B6vs%C3%A5ngaregatan%2020%2C%20254%2050%20Helsingborg!5e0!3m2!1szh-CN!2sse!4v1714153466782!5m2!1szh-CN!2sse"
        style={{
          minHeight: 300,
          filter:
            theme.palette.mode === 'dark'
              ? 'grayscale(0.5) opacity(0.7)'
              : 'none',
        }}
      />
    );
  };

  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        overflow: 'hidden',
      }}
    >
      <Container paddingX={0} paddingY={0} maxWidth={{ sm: 1, md: 1236 }}>
        <Box
          display={'flex'}
          flexDirection={{ xs: 'column', md: 'row' }}
          position={'relative'}
        >
          <Box width={1} order={{ xs: 2, md: 1 }}>
            <Container>
              <LeftSide />
            </Container>
          </Box>
          <Box
            sx={{
              flex: { xs: '0 0 100%', md: '0 0 50%' },
              position: 'relative',
              maxWidth: { xs: '100%', md: '50%' },
              order: { xs: 1, md: 2 },
            }}
          >
            <Box
              sx={{
                width: { xs: 1, md: '50vw' },
                height: '100%',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    overflow: 'hidden',
                    left: '0%',
                    width: 1,
                    height: 1,
                    position: { xs: 'relative', md: 'absolute' },
                  }}
                >
                  <RightSide />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Divider />
    </Box>
  );
};

export default Contact;
