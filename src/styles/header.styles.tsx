import { createStyles, rem } from "@mantine/core";
import HEADER_HEIGHT from "constants/header-height";

const useStyles = createStyles((theme) => ({
  header: {
    height: HEADER_HEIGHT,
    borderBottom: 0,
    backgroundColor: '#FFF'
  },

  container: {
    display: "flex",
    alignItems: "center",
    padding: "0 162px",
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
    position: 'absolute',
    left: 'calc(50% - 275px/2 + 0.5px)'
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
    '&:hover': {
      color: '#5E96FC'
    },
  },

  linkLabel: {
    marginRight: rem(5),
  },
}));

export default useStyles;