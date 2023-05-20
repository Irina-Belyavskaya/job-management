import { Container, Grid, List, Text, createStyles } from "@mantine/core";
import { IconMapPin, IconStar } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    gap: '20px',
    width: '773px',
    marginTop: '40px',
    marginBottom: '40px'
  },

  wrapper: {
    backgroundColor: '#FFF',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '24px',
    flexWrap: 'wrap',
    gap: '20px',
    width: '773px',
  },

  wrap_vacance: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 0,
    backgroundColor: '#FFF',
    borderRadius: '12px',
    width: '773px',
  },

  vacance: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: '16px',
    padding: 0,
    marginLeft: 0,
    marginRight: 0
  },

  vacance_location: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    gap: '8px'
  },

  wrap_paragraph: {
    padding: 0,
    margin: 0
  }
}));

export default function VacanceContent() {
  const { classes } = useStyles();

  return (
    <Container  className={classes.container} fluid >
      <Container className={classes.wrapper} fluid>
        <Container className={classes.wrap_vacance}>
          <Container className={classes.vacance}>
            <Text fw={700} fz="28px" lh={'34px'}>
              Менежер-дизайнер
            </Text>
            <Text fw={700} fz="20px" lh={'20px'}>
              ffdfdfd
            </Text>
            <Text fw={400} fz="16px" lh={'140%'} className={classes.vacance_location}>
              <IconMapPin stroke={'1px'}/>
              Tokio
            </Text>
          </Container>     
          <IconStar/>       
        </Container>
      </Container>
      <Container className={classes.wrapper} fluid>
        <Container className={classes.wrap_paragraph} fluid>
          <Text fw={700} fz="20px" lh={'20px'} mb={'16px'}>
            Обязанности:
          </Text>
          <List sx={{width: '100%'}} withPadding={true}>
            <List.Item>Clone or download repository from GitHub</List.Item>
            <List.Item>Install dependencies with yarn</List.Item>
            <List.Item>To start development server run npm start command</List.Item>
            <List.Item>Run tests to make sure your changes do not break the build</List.Item>
            <List.Item>Submit a pull request once you are done</List.Item>
          </List>
        </Container>
        <Container className={classes.wrap_paragraph} fluid>
          <Text fw={700} fz="20px" lh={'20px'} mb={'16px'}>
            Требования:
          </Text>
          <List sx={{width: '100%'}} withPadding={true}>
            <List.Item>Clone or download repository from GitHub</List.Item>
            <List.Item>Install dependencies with yarn</List.Item>
            <List.Item>To start development server run npm start command</List.Item>
            <List.Item>Run tests to make sure your changes do not break the build</List.Item>
            <List.Item>Submit a pull request once you are done</List.Item>
          </List>
        </Container>
        <Container className={classes.wrap_paragraph} fluid>
          <Text fw={700} fz="20px" lh={'20px'} mb={'16px'}>
            Условия:
          </Text>
          <List sx={{width: '100%'}} withPadding={true}>
            <List.Item>Clone or download repository from GitHub</List.Item>
            <List.Item>Install dependencies with yarn</List.Item>
            <List.Item>To start development server run npm start command</List.Item>
            <List.Item>Run tests to make sure your changes do not break the build</List.Item>
            <List.Item>Submit a pull request once you are done</List.Item>
          </List>
        </Container>
      </Container>
    </Container>
  )
}