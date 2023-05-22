import { useNavigate } from "react-router-dom";

import { Button, Grid } from "@mantine/core";

import Vacances from "components/vacancies.component";
import EmptyPage from "components/empty-page.component";

export default function FavoritesContent() {
  const navigate = useNavigate();

  return (
    <>
      {
        JSON.parse(localStorage.getItem("favorites") || "[]").length !== 0
          ?
            <Grid
              sx={{
                width: '60%',
                marginTop: '40px',
                marginLeft: 'auto',
                marginRight: 'auto',
                gap: '12px'
              }}
            >
              <Vacances vacancies={null} />
            </Grid>
          :
            <EmptyPage my={'204px'}>
              <Button 
                variant="light"
                onClick={() => navigate('/')}
              >
                Поиск вакансий
              </Button> 
            </EmptyPage> 
      }
    </>
  )
}