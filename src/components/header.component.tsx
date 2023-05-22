import { NavLink } from 'react-router-dom';

import {Header, Container,Group} from '@mantine/core';

import logo from '../app/assets/logo.svg';

import HEADER_HEIGHT from 'constants/header-height';
import links from '../constants/nav-links';

import useStyles from 'styles/header.styles';

export default function AppHeader() {
  const { classes } = useStyles();

  const items = links?.map((link: any) => {
    return (
      <NavLink
        key={link.label}
        to={link.link}
        className={classes.link}
      >
        {link.label}
      </NavLink>
    );
  });

  return (
    <Header
      height={HEADER_HEIGHT}
      className={classes.header}
    >
      <Container
        className={classes.container}
        fluid
      >
        <Group>
          <img src={logo} alt="logo" width="141" />
        </Group>
        <Group
          spacing={5}
          className={classes.links}
        >
          {items}
        </Group>
      </Container>
    </Header>
  );
}