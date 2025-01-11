import React from 'react';
import { Container, Alert, Button } from '@mantine/core';

interface ErrorPageProps {
  type: 'network' | 'no-data';
  message?: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ type, message }) => {
  const renderMessage = () => {
    if (type === 'network') {
      return message || 'No internet connection. Please check your network settings.';
    }
    if (type === 'no-data') {
      return message || 'No data found for the requested item. Please try again later.';
    }
    return 'An error occurred.';
  };

  const renderButton = () => {
    return (
      <Button variant="outline" color="blue" onClick={() => window.location.reload()}>
        Try Again
      </Button>
    );
  };

  return (
    <Container mt="xl" style={{ textAlign: 'center' }}>
      <Alert title="Error" color={type === 'network' ? 'red' : 'yellow'}>
        {renderMessage()}
        {renderButton()}
      </Alert>
    </Container>
  );
};

export default ErrorPage;
