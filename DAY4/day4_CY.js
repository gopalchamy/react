import React from 'react';
import { List, ListItem, ListItemText, Divider, Typography } from '@mui/material';

const InfluentialBooksList = () => {
  // Sample data for the most influential books of all time
  const books = [
    {
      title: 'The Bible',
      summary: 'The Bible is a collection of religious texts or scriptures that are held to be sacred in Christianity, Judaism, Samaritanism, Islam, and many other religions.'
    },
    {
      title: 'The Qur\'an',
      summary: 'The Qur\'an is the central religious text of Islam, believed by Muslims to be a revelation from God. It is widely regarded as the finest work in classical Arabic literature.'
    },
    {
      title: 'The Republic by Plato',
      summary: 'The Republic is a Socratic dialogue, written by Plato around 380 BC, concerning justice, the order and character of the just city-state, and the just man.'
    },
    {
      title: 'The Communist Manifesto by Karl Marx and Friedrich Engels',
      summary: 'The Communist Manifesto is an 1848 political pamphlet by German philosophers Karl Marx and Friedrich Engels. It presents an analytical approach to the class struggle and the problems of capitalism.'
    },
    {
      title: 'The Origin of Species by Charles Darwin',
      summary: 'The Origin of Species is a work of scientific literature by Charles Darwin that is considered to be the foundation of evolutionary biology.'
    }
  ];

  return (
    <div style={{ margin: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Most Influential Books of All Time
      </Typography>
      
      {/* Display the list of books using Material-UI List component */}
      <List>
        {books.map((book, index) => (
          <React.Fragment key={index}>
            <ListItem>
              <ListItemText
                primary={book.title}
                secondary={book.summary}
              />
            </ListItem>
            {index < books.length - 1 && <Divider />} {/* Add Divider between items, but not after the last item */}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default InfluentialBooksList;