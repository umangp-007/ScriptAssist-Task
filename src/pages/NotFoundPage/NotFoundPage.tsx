import React from 'react';
import { Container, Title, Text, Button } from '@mantine/core';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <Container size="xs" style={{ textAlign: 'center', marginTop: '50px' }}>
      <Title order={1}>404</Title>
      <Text size="lg" style={{ marginBottom: '20px' }}>
        Oops! The page you're looking for does not exist.
      </Text>
      <Button component={Link} to="/resources" variant="light">
        Go to Home Page
      </Button>
    </Container>
  );
};

export default NotFoundPage;
