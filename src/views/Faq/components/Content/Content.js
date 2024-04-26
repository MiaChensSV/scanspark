import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FaqGroupItem = ({ title, items }) => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={2}>
        <Typography fontWeight={700} variant={'h5'}>
          {title}
        </Typography>
      </Box>
      <Box>
        {items.map((item, i) => (
          <Box
            component={Accordion}
            key={i}
            padding={1}
            marginBottom={i === item.length - 1 ? 0 : 2}
            borderRadius={`${theme.spacing(1)} !important`}
            sx={{
              '&::before': {
                display: 'none',
              },
            }}
          >
            <Box
              component={AccordionSummary}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id={`panel1a-header--${i}`}
            >
              <Typography fontWeight={600}>{item.title}</Typography>
            </Box>
            <AccordionDetails>
              <Typography color="text.secondary">{item.subtitle}</Typography>
            </AccordionDetails>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

FaqGroupItem.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

const Content = () => {
  return (
    <Box>
      <Box marginBottom={6}>
        <FaqGroupItem
          title={''}
          items={[
            {
              title: 'What service do you have?',
              subtitle:
                'We facilitate the purchase of legal products from Scandinavia and streamline their export to Asia. Additionally, we also have services include assisting with company registration and managing associated documentation.',
            },
            {
              title: 'How should I pay?',
              subtitle:
                'We accept international payments in HKD, SEK, USD, and EURO currencies.',
            },
            {
              title: 'What is your return policy?',
              subtitle:
                'We fulfill orders based on your specified list; please note, there is no return policy in place.',
            },
            {
              title:
                'Can you assist with customs declaration in China as well?',
              subtitle:
                'Unfortunately, we only handle import and export declaration in Sweden. However, we can recommend another company to assist you with declarations in other locations.',
            },

            {
              title: 'Can you arrange business trips?',
              subtitle:
                'Absolutely, we can assist with arranging meetings with potential customers or partners, organizing business trips, and sending out business invitations. However, we do not handle visa applications. Nevertheless, we collaborate with a company that specializes in visa application services.',
            },
          ]}
        />
      </Box>
    </Box>
  );
};

export default Content;
