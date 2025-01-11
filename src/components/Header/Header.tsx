import React from 'react';
import { useAuth } from '../AuthProvider/AuthProvider';
import { Button, Container, Group, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Container>
      <Group position="apart" py="md">
        <Text weight={700} size="lg">
          SpaceX Explorer
        </Text>
        <Button color="red" onClick={handleLogout}>
          Logout
        </Button>
      </Group>
    </Container>
  );
};

export default Header;
