import { useEffect, useState } from 'react';

import { Container, Grid, Text, Button, Autocomplete } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

import Filter from './filter.component';
import Vacances from 'components/vacancies.component';
import EmptyPage from 'components/empty-page.component';

import { auth } from "api/auth";
import { getCatalogues, getVacancies } from "api/vacances";

import Cookies from "js-cookie";

import useStyles from '../styles/main-content.styles';
import { Filters } from '../types/filters.type';

export default function AppContent() {
  const { classes } = useStyles();

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [vacancies, setVacancies] = useState<[]>([]);

  const [catalogues, setCatalogues] = useState<string[]>([]);

  const [inputText, setInputText] = useState('');
  const [data, setData] = useState<string[]>([]);

  const [searchVacancies, setSearchVacancies] = useState<any[]>([]);
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    auth()
      .then((data) => {
        Cookies.set('access_token', data.access_token);
        setError('');
        getVacancies()
          .then((data) => {
            setVacancies(data.objects);
            setData(data.objects.map((vacance: any) => vacance.profession));
            setIsLoading(false);
            setError('');
          })
          .catch((error) => {
            setIsLoading(false);
            setError(error.message);
          });
        getCatalogues()
          .then((data) => {
            setCatalogues(data.map((catalogue: any) => catalogue.title_rus));
            setIsLoading(false);
            setError('');
          })
          .catch((error) => {
            setIsLoading(false);
            setError(error.message);
          });
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      });
  }, [])

  const findVacance = () => {
    if (inputText.length === 0) {
      setIsSearch(false);
      setSearchVacancies([]);
    }
    const findedVacancies = vacancies.filter((vacancy: any) => (
      vacancy.profession.toLowerCase().includes(inputText.toLowerCase()) ||
      vacancy.profession.toLowerCase().includes(inputText.toLowerCase())
    ));
    setIsSearch(true);
    setSearchVacancies([...findedVacancies]);
  };

  const handleFilter = (filters: Filters) => {
    if (!filters || filters.catalogue === null) {
      setIsSearch(false);
      setSearchVacancies([]);
      return;
    }

    const findedVacancies: any[] = vacancies.filter((vacancy: any) =>
      vacancy.payment_from >= Number(filters.from) &&
      vacancy.payment_to <= Number(filters.to) &&
      vacancy.catalogues.find(
        (catalogue: any) => catalogue.title.toLowerCase() === filters.catalogue.toLowerCase()
      ));
    setIsSearch(true);
    setSearchVacancies([...findedVacancies]);
  };

  return (
    <Container className={classes.wrapper} fluid py={40}>
      <Filter catalogues={catalogues} handleFilter={handleFilter} />
      <Grid gutter={5} className={classes.vacancies}>
        <Autocomplete
          data-elem="search-input"
          value={inputText}
          data={data}
          size='md'
          radius={'8px'}
          onChange={(inputText) => {
            setInputText(inputText);
            if (inputText.length === 0)
              setIsSearch(false);
          }}
          icon={<IconSearch />}
          rightSection={
            <Button
              data-elem="search-button"
              size="xs"
              sx={{
                padding: '4px 20px',
                borderRadius: '8px',
                marginRight: '52px'
              }}
              onClick={() => findVacance()}
            >
              Поиск
            </Button>
          }
          placeholder="Введите название вакансии"
          sx={{ width: '100%', height: '48px' }}
        />

        {
          !isLoading && vacancies && !error && vacancies.length !== 0 &&
          !isSearch &&
          <Vacances vacancies={vacancies} />
        }
        {
          !isLoading && vacancies && !error && vacancies.length !== 0 &&
          isSearch && searchVacancies.length !== 0 &&
          <Vacances vacancies={searchVacancies} />
        }
        {
          !isLoading && vacancies && !error && vacancies.length !== 0 &&
          isSearch && searchVacancies.length === 0 &&
          <EmptyPage my={'0'} children={undefined} />
        }
        {
          !isLoading && vacancies && !error && vacancies.length === 0 &&
          <EmptyPage my={'0'}> </EmptyPage>
        }
        {
          isLoading && !error &&
          <Text fz="xl" fw={700} c="blue">Loading...</Text>
        }
        {
          error && !isLoading &&
          <Text fz="xl" fw={700} c="red">{error + '('}</Text>
        }
      </Grid>
    </Container>
  );
}