// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../components/AuthProvider/AuthProvider';
// import { Button, Input, Container, Title, Paper, Text, Stack } from '@mantine/core';
// import useStyles from './LoginPage.styles';

// const LoginPage: React.FC = () => {
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const { classes } = useStyles();

//   const handleLogin = () => {
//     if (username === 'u' && password === 'u') {
//       login();
//       navigate('/resources');
//     } else {
//       setError('Invalid credentials!');
//     }
//   };

//   return (
//     <Container size="xs" className={classes.container}>
//       <Paper  shadow="xs" className={classes.paper}>
//         <Title order={2} className={classes.title}>Login</Title>

//         {error && (
//           <Text color="red" className={classes.errorText}>
//             {error}
//           </Text>
//         )}

//         <Stack spacing="md" className={classes.form}>
//           <Input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//             classNames={{ input: classes.input }}
//           />
//           <Input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             classNames={{ input: classes.input }}
//           />
//         </Stack>

//         <Button type='submit' onClick={handleLogin} fullWidth className={classes.button}>
//           Login
//         </Button>
//       </Paper>
//     </Container>
//   );
// };

// export default LoginPage;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../components/AuthProvider/AuthProvider';
import { Button, Input, Container, Title, Paper, Text, Stack } from '@mantine/core';
import useStyles from './LoginPage.styles';

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { classes } = useStyles();

  const handleLogin = () => {
    if (username === 'u' && password === 'u') {
      login();
      navigate('/resources');
    } else {
      setError('Invalid credentials!');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <Container size="xs" className={classes.container}>
      <Paper shadow="xs" className={classes.paper}>
        <Title order={2} className={classes.title}>
          Login
        </Title>

        {error && (
          <Text color="red" className={classes.errorText}>
            {error}
          </Text>
        )}

        <Stack spacing="md" className={classes.form}>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            onKeyDown={handleKeyDown}
            classNames={{ input: classes.input }}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            onKeyDown={handleKeyDown}
            classNames={{ input: classes.input }}
          />
        </Stack>

        <Button type="submit" onClick={handleLogin} fullWidth className={classes.button}>
          Login
        </Button>
      </Paper>
    </Container>
  );
};

export default LoginPage;
