import { useNavigate } from "react-router-dom";

import { Grid, Text, Container } from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";

import dot from "../app/assets/dot.svg";

import useStyles from "styles/vacancy-info.styles";

import { VacancyInfoProps } from "types/vacancy-info-props.type";

export default function VacancyInfo({vacancy} : VacancyInfoProps) {
  const { classes } = useStyles();
  const navigate = useNavigate(); 
  
  return(
    <Grid 
      className={classes.vacance} 
      onClick={() => navigate('/app/vacance?id=' + vacancy.id)}
    >
      <Text fw={600} c="blue" fz="20px">
        {vacancy.profession}
      </Text>
      <Container className={classes.container}> 
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
    </Grid>    
  )
}