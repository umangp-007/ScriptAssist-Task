// LoginPage.styles.ts

import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {
    marginTop: '50px',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: theme.radius.md,
    padding: theme.spacing.xl,
    boxShadow: theme.shadows.sm,
  },
  title: {
    marginBottom: theme.spacing.md,
    color: theme.colors.blue[6],
  },
  errorText: {
    marginBottom: theme.spacing.sm,
    textAlign: 'center',
  },
  form: {
    width: '100%',
    marginBottom: theme.spacing.md,
  },
  input: {
    padding: theme.spacing.sm,
    borderRadius: theme.radius.sm,
    borderColor: theme.colors.gray[4],
  },
  button: {
    marginTop: theme.spacing.md,
    backgroundColor: theme.colors.blue[6],
    '&:hover': {
      backgroundColor: theme.colors.blue[7],
    },
  },
}));

export default useStyles;
