import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.colors.gray[1],
    borderBottom: `1px solid ${theme.colors.gray[3]}`,
  },
  brand: {
    fontFamily: 'Poppins, sans-serif',
    color: theme.colors.dark[7],
    fontWeight: 700,
    fontSize: theme.fontSizes.xl,
    cursor: 'pointer',
  },
  navLink: {
    fontWeight: 500,
    color: theme.colors.gray[7],
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      color: theme.colors.blue[6],
    },
  },
  mobileMenu: {
    backgroundColor: theme.white,
    padding: theme.spacing.md,
    borderRadius: theme.radius.sm,
    boxShadow: theme.shadows.sm,
    marginTop: theme.spacing.sm,
  },
  mobileNavItem: {
    fontWeight: 500,
    color: theme.colors.gray[7],
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      color: theme.colors.blue[6],
    },
  },
}));

export default useStyles;
