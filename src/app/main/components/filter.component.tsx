import { useState } from "react";

import { Grid, Button, Select, Text, Container, Group, Autocomplete } from "@mantine/core";
import { IconChevronDown, IconSelector, IconX } from "@tabler/icons-react";

import useStyles from "../styles/filter.styles";
import { FilterProps } from "../types/filters.type";

export default function Filter({ catalogues, handleFilter }: FilterProps) {
  const { classes } = useStyles();

  const [selectedCatalogue, setSelectedCatalogue] = useState<string | null>(null);
  const [paymentFrom, setPaymentFrom] = useState<string | undefined>();
  const [paymentTo, setPaymentTo] = useState<string | undefined>();

  return (
    <Grid gutter={5} className={classes.filters}>
      <Container className={classes.container} fluid>
        <Text fz={'20px'} fw={700} lh={'20px'}>
          Фильтры
        </Text>
        <Button
          variant="subtle"
          color="gray"
          compact
          className={classes.resetBtn}
          onClick={() => {
            setSelectedCatalogue('');
            setPaymentFrom('');
            setPaymentTo('');
            handleFilter(null);
          }}
        >
          Сбросить все
          <Group ml={'5px'}>
            <IconX size={'20px'} />
          </Group>
        </Button>
      </Container>
      <Select
        data-elem="industry-select"
        label="Отрасль"
        placeholder="Выберите отрасль"
        rightSection={<IconChevronDown size="1rem" />}
        rightSectionWidth={30}
        styles={{ rightSection: { pointerEvents: 'none' } }}
        classNames={classes}
        data={catalogues}
        dropdownPosition="bottom"
        value={selectedCatalogue}
        onChange={setSelectedCatalogue}
      />
      <Autocomplete
        data-elem="salary-from-input"
        label="Оклад"
        data={['0', '1000', '5000', '7000', '10000', '20000', '30000']}
        placeholder="От"
        classNames={classes}
        value={paymentFrom}
        onChange={setPaymentFrom}
        rightSection={
          <IconSelector
            height={'26px'}
            className={classes.selector}
          />
        }
      />
      <Autocomplete
        data-elem="salary-to-input"
        data={['10000', '50000', '70000', '90000', '100000', '200000']}
        placeholder="До"
        classNames={classes}
        value={paymentTo}
        onChange={setPaymentTo}
        rightSection={
          <IconSelector
            height={'26px'}
            className={classes.selector}
          />
        }
      />
      <Button
        data-elem="search-button"
        fullWidth
        onClick={() => handleFilter({
          catalogue: selectedCatalogue,
          from: paymentFrom,
          to: paymentTo
        })}
      >
        Применить
      </Button>
    </Grid>
  )
}