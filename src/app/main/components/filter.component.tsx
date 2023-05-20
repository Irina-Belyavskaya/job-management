import { Grid, Button, CloseButton, Select, Text, createStyles, rem } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
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

export default function Filter() {
  const { classes } = useStyles();

  return (
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
      <Button fullWidth>
        Применить
      </Button>
    </Grid>
  )
}