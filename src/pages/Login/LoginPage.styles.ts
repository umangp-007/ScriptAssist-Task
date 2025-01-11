// LoginPage.styles.ts

import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '90vh',
    backgroundColor: theme.colors.gray[0],
    padding: theme.spacing.md, // Padding for smaller screens
    overflow: 'hidden', // Prevent scroll
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: theme.radius.md,
    padding: theme.spacing.xl,
    boxShadow: theme.shadows.sm,
    width: '100%',
    maxWidth: '400px', // Responsive width limit
  },
  title: {
    marginBottom: theme.spacing.md,
    color: theme.colors.blue[6],
    textAlign: 'center',
  },
  errorText: {
    marginBottom: theme.spacing.sm,
    textAlign: 'center',
    color: theme.colors.red[6],
  },
  form: {
    width: '100%',
    marginBottom: theme.spacing.md,
  },
  input: {
    borderColor: theme.colors.gray[4],
    '&:focus': {
      borderColor: theme.colors.blue[6],
    },
  },
  button: {
    backgroundColor: theme.colors.blue[6],
    width: '100%', // Full-width button
    '&:hover': {
      backgroundColor: theme.colors.blue[7],
    },
  },
}));

export default useStyles;
