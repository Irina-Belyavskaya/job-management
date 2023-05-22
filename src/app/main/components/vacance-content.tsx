import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Container, Text } from "@mantine/core";
import { IconMapPin, IconStar, IconStarFilled } from '@tabler/icons-react';

import { getVacanceById } from "api/vacances";

import parse from 'html-react-parser';

import dot from "../../assets/dot.svg";

import useStyles from "../styles/vacance-content.styles";

export default function VacanceContent() {
  const { classes } = useStyles();
  const [params] = useSearchParams();

  const [vacancy, setVacancy] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const [favorites, setFavorites] = useState<any[]>([]);
  const [isStart, setIsStart] = useState(true);

  const handleSave = (vacance: any) => {
    setIsStart(false);
    const repeat = favorites.find(favorite_vacance => favorite_vacance.id === vacance.id);

    if (repeat) {
      const newFavorites = favorites.filter(favorite_vacance => favorite_vacance.id !== repeat.id);
      setFavorites([...newFavorites]);
    } else {
      setFavorites([...favorites,vacance]);
    }
  };

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("favorites") || ""));
  },[])

  useEffect(() => {
    if (!isStart)
      localStorage.setItem("favorites", JSON.stringify(favorites));
  },[favorites, isStart])

  useEffect(() => {
    const id = Number(params.get("id")); 
    if (id) {
      getVacanceById(id)
        .then(data => {
          setVacancy(data);
          setIsLoading(false);
          setError('');
        })
        .catch((error) => {
          setIsLoading(false);
          setError(error.message);
        });
    }
  }, [params])

  return (
    <>
    { !isLoading && vacancy && !error && 
      <Container  className={classes.container} fluid >
        <Container className={classes.wrapper} fluid>
          <Container className={classes.wrap_vacancy}>
            <Container className={classes.vacancy}>
              <Text fw={700} fz="28px" lh={'34px'}>
                {vacancy.profession}
              </Text>
              <Container className={classes.container_info}> 
                <Text fw={600} fz="16px" lh={'20px'}>
                  з/п от {vacancy.payment_from} {vacancy.currency} 
                </Text>
                <img src={dot} alt="dot"/>
                <Text fw={400} fz="16px" lh={'20px'}>
                  {vacancy.type_of_work.title}
                </Text>  
              </Container>
              <Text fw={400} fz="16px" className={classes.vacancy_location}>
                <IconMapPin stroke={'1px'}/>
                {vacancy.town.title}
              </Text>
            </Container>     
            { favorites.find(favorite_vacancy => favorite_vacancy.id === vacancy.id)
              ? 
                <IconStarFilled 
                  className={classes.iconStarFilled}
                  onClick={() => {handleSave(vacancy)}}
                />
              :
                <IconStar 
                  className={classes.iconStar}
                  onClick={() => {handleSave(vacancy)}}
                />  
            }
          </Container>
        </Container>
        <Container className={classes.wrapper} fluid>
          <Container className={classes.wrap_paragraph} fluid>
            {parse(vacancy.vacancyRichText)}
          </Container>
        </Container>
      </Container>
    }
    {
      isLoading && !error && 
        <Container 
              my={'204px'}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '32px',
                padding: 0
              }}
            >
          <Text fz="xl" fw={700} c="blue">Loading...</Text>
        </Container>
    }
    {
      error && !isLoading && 
      <Container 
        my={'204px'}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '32px',
          padding: 0
        }}
      >
        <Text fz="xl" fw={700} c="red">{error + '('}</Text>
      </Container>
    }
    </>
  )
}