// import { createStyles } from "@mantine/core";

// export const useStyles = createStyles((theme) => ({
//     footer: {
//       backgroundColor: theme.colors.gray[1],
//       color: theme.colors.gray[7],
//       padding: `${theme.spacing.xl}px 0`,
//       borderTop: `1px solid ${theme.colors.gray[3]}`,
//       marginTop:'20px'
//     },
//     footerHeading: {
//       color: theme.colors.gray[9],
//       marginBottom: theme.spacing.sm,
//       fontWeight: 600,
//     },
//     footerText: {
//       marginTop: theme.spacing.xs,
//       color: theme.colors.gray[6],
//       lineHeight: 1.6,
//     },
//     link: {
//       color: theme.colors.blue[6],
//       textDecoration: "none",
//       fontWeight: 500,
//       "&:hover": {
//         color: theme.colors.blue[8],
//       },
//     },
//     socialIcon: {
//       color: theme.colors.gray[6],
//       "&:hover": {
//         color: theme.colors.blue[6],
//       },
//     },
//     divider: {
//       marginTop: theme.spacing.lg,
//       marginBottom: theme.spacing.md,
//       borderColor: theme.colors.gray[3],
//     },
//     bottomText: {
//       color: theme.colors.gray[6],
//       marginTop: theme.spacing.md,
//     },
//   }));

import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  footer: {
    backgroundColor: theme.colors.gray[1],
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.md,
    marginTop: theme.spacing.md,
    textAlign: 'center',
    borderTop: `1px solid ${theme.colors.gray[3]}`,
  },
  footerText: {
    color: theme.colors.dark[6],
  },
  footerHeading: {
    fontWeight: 700,
    color: theme.colors.dark[7],
  },
  link: {
    color: theme.colors.blue[6],
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  socialIcon: {
    color: theme.colors.dark[6],
    '&:hover': {
      color: theme.colors.blue[6],
    },
  },
  divider: {
    margin: `${theme.spacing.md}px 0`,
  },
  bottomText: {
    color: theme.colors.gray[6],
    fontSize: theme.fontSizes.xs,
  },
}));
