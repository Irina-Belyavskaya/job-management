import { Container, Grid, SimpleGrid, Skeleton, useMantineTheme, rem, Text, createStyles, Button, CloseButton, Menu, UnstyledButton, Group, Select, Autocomplete, Loader } from '@mantine/core';
import { useRef, useState } from 'react';
import { IconChevronDown, IconSearch } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex'
  },

  button: {
    backgroundColor: '#F7F7F8',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    margin: 0,
    padding: 0,
    border: 0,
    width: '115px',
    height: '20px',

    '&:hover': {
      backgroundColor: '#F7F7F8',
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: '20px',
    fontWeight: 700,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(42),
      lineHeight: 1.2,
    },
  },

  filters: {
    width: '315px',
    height: '360px',
    padding: '20px',
    backgroundColor: '#FFF',
    border: 'border: 1px solid #EAEBED',
    borderRadius: '12px'
  },

  vacancies: {
    backgroundColor: 'red',
    display: 'flex',
    width: '100%'
  },

  vacance: {
    backgroundColor: 'green',
    display: 'block'
  },

  root: {
    position: 'relative',
    width: '100%'
  },

  input: {
    height: '50px'
  },

  label: {
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '19.36px'
  }
}));

export default function AppContent() {
  const { classes } = useStyles();

  const timeoutRef = useRef<number>(-1);
  const [value, setValue] = useState('');
  const [data, setData] = useState<string[]>([]);

  const handleChange = (val: string) => {
    window.clearTimeout(timeoutRef.current);
    setValue(val);
    setData([]);

    if (val.trim().length === 0 || val.includes('@')) {
    } else {
      setData(['gmail.com', 'outlook.com', 'yahoo.com'].map((provider) => `${val}@${provider}`));
    }
  };

  return (
    <Container my="md">
      <Container className={classes.wrapper}>
        <Grid gutter={5} className={classes.filters}>
          <Text className={classes.title}>
            Фильтры
          </Text>
          <Button variant="subtle" color="gray" compact sx={{ marginLeft: 'auto' }}>
            Сбросить все
            <CloseButton />
          </Button>
          <Select
            label="Отрасль"
            placeholder="Выберите отрасль"
            rightSection={<IconChevronDown size="1rem" />}
            rightSectionWidth={30}
            styles={{ rightSection: { pointerEvents: 'none' } }}
            classNames={classes}
            data={['Разработка ПО', 'Дизайн', 'Обучение']}
          />
          <Select
            label="Оклад"
            data={['50', '100', '200', '300', '400', '500']}
            placeholder="От"
            classNames={classes}
          />
          <Select
            data={['1000', '2000', '3000', '4000', '5000']}
            placeholder="До"
            classNames={classes}
          />
        </Grid>
        <Grid gutter={5} className={classes.vacancies}>
          <Autocomplete
            value={value}
            data={data}
            onChange={handleChange}
            rightSection={<Button>Поиск</Button>}
            placeholder="Введите название вакансии"
          />
          <Grid.Col className={classes.vacance}>
            Some text
          </Grid.Col>
          <Grid.Col className={classes.vacance}>
            Some text
          </Grid.Col>
          <Grid.Col className={classes.vacance}>
            Some text
          </Grid.Col>
        </Grid>
      </Container>
    </Container>
  );
}