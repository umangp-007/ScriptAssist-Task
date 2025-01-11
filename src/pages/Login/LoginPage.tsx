import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../components/AuthProvider/AuthProvider';
import {
  Button,
  Input,
  Container,
  Title,
  Paper,
  Text,
  Stack,
  Transition,
} from '@mantine/core';
import useStyles from './LoginPage.styles';

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showError, setShowError] = useState(false);
  const { classes } = useStyles();

  // Helper function to validate inputs
  const validateInputs = (): boolean => {
    if (!username.trim() || !password.trim()) {
      setError('Username and password are required.');
      setShowError(true);
      return false;
    }
    if (username.length < 3 || password.length < 6) {
      setError('Username must be at least 3 characters and password at least 6 characters.');
      setShowError(true);
      return false;
    }
    return true;
  };

  const handleLogin = () => {
    if (!validateInputs()) {
      return;
    }

    if (username === 'umang' && password === 'password12') {
      login();
      navigate('/resources');
    } else {
      setError('Invalid username or password!');
      setShowError(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <Container size="xs" className={classes.container}>
      <Paper shadow="xl" radius="md" p="xl" withBorder className={classes.paper}>
        <Title order={2} className={classes.title}>
          Welcome
        </Title>
        <Text size="sm" color="dimmed" align="center" mt="xs">
          Please enter your credentials to continue
        </Text>

        <Transition
          mounted={showError}
          transition="fade"
          duration={200}
          onExited={() => setShowError(false)} // Reset error visibility after fade-out
        >
          {(styles) => (
            <Text color="red" size="sm" align="center" mt="md" style={styles}>
              {error}
            </Text>
          )}
        </Transition>

        <Stack spacing="md" mt="lg">
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            onKeyDown={handleKeyDown}
            classNames={{ input: classes.input }}
            error={username.length < 3 && username !== ''}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            onKeyDown={handleKeyDown}
            classNames={{ input: classes.input }}
            error={password.length < 6 && password !== ''}
          />
        </Stack>

        <Button
          type="submit"
          onClick={handleLogin}
          fullWidth
          size="md"
          mt="xl"
          className={classes.button}
        >
          Login
        </Button>
      </Paper>
    </Container>
  );
};

export default LoginPage;
