import {
  createStyles,
  Header,
  Container,
  Group,
  rem,
} from '@mantine/core';
import logo from '../../assets/logo.svg';
import links from '../constants/nav-links';

export const HEADER_HEIGHT = '84px';

const useStyles = createStyles((theme) => ({
  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
    marginRight: 'auto',
  },
  container: {
    display: "flex",
    alignItems: "center",
    padding: "0 162px",
    height: '100%',
    gap: "400px"
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

export default function AppHeader() {
  const { classes } = useStyles();

  const items = links?.map((link: any) => {
    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Header 
      height={HEADER_HEIGHT} 
      sx={{
        height: HEADER_HEIGHT,
        borderBottom: 0,
        backgroundColor: '#FFF'
      }}
    >
      <Container 
        className={classes.container}
        fluid
      >
        <Group>
          <img src={logo} alt="logo" width="141"/>
        </Group>
        <Group 
          spacing={5} 
          className={classes.links}>
          {items}
        </Group>
      </Container>
    </Header>
  );
}