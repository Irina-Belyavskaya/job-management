import { Container, Grid, Text, createStyles, Button, Autocomplete, Pagination } from '@mantine/core';
import { useRef, useState } from 'react';
import { IconSearch, IconStar, IconMapPin } from '@tabler/icons-react';
import Filter from './filter.component';
import { useNavigate } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    gap: '4%'
  },

  vacancies: {
    display: 'flex',
    alignItems: 'flex-start',
    padding: 0,
    gap: '16px',
    width: '70%',
    justifyContent: 'center'
  },

  wrap_vacance: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '24px',
    backgroundColor: '#FFF',
    borderRadius: '12px',
    height: '137px',
    width: '773px',
  },

  vacance: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    gap: '12px'
  },

  vacance_name: {
  },

  vacance_description: {
  },

  vacance_location: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  }
}));

export default function AppContent() {
  const { classes } = useStyles();
  const [activePage, setPage] = useState(1); 
  const navigate = useNavigate(); 

  const timeoutRef = useRef<number>(-1);
  const [value, setValue] = useState('');
  const [data, setData] = useState<string[]>([]);

  const handleChange = (val: string) => {
    setValue(val);
    setData([]);

    if (val.trim().length === 0 || val.includes('@')) {
    } else {
      setData(['gmail.com', 'outlook.com', 'yahoo.com'].map((provider) => `${val}@${provider}`));
    }
  };

  return (
    <Container className={classes.wrapper} fluid py={40}>
      <Filter/>
      <Grid gutter={5} className={classes.vacancies}>
        <Autocomplete
          value={value}
          data={data}
          size='md'
          radius={'8px'}
          onChange={handleChange}
          icon={<IconSearch/>}
          rightSection={
            <Button size="xs" 
              sx={{
                padding: '4px 20px', 
                borderRadius: '8px',
                marginRight: '52px'
              }}
            >
              Поиск
            </Button>
          }
          placeholder="Введите название вакансии"
          sx={{width: '100%', height: '48px'}}
        />        
        <Grid.Col 
          className={classes.wrap_vacance} 
          onClick={() => navigate('/app/vacance')}
        >
          <Grid className={classes.vacance}>
            <Text fw={600} c="blue" fz="20px" className={classes.vacance_name}>Text 1</Text>
            <Text fw={600} fz="16px" className={classes.vacance_description}>ffdfdfd</Text>
            <Text fw={400} fz="16px" className={classes.vacance_location}>
              <IconMapPin stroke={'1px'}/>
              Tokio
            </Text>
          </Grid>     
          <IconStar/>       
        </Grid.Col>
        <Grid.Col className={classes.wrap_vacance}>
          <Grid className={classes.vacance}>
            <Text fw={600} c="blue" fz="20px" className={classes.vacance_name}>Text 2</Text>
            <Text fw={600} fz="16px" className={classes.vacance_description}>ffdfdfd</Text>
            <Text fw={400} fz="16px" className={classes.vacance_location}>
              <IconMapPin stroke={'1px'}/>
              Minsk
            </Text>
          </Grid>     
          <IconStar/>       
        </Grid.Col>
        <Grid.Col className={classes.wrap_vacance}>
          <Grid className={classes.vacance}>
            <Text fw={600} c="blue" fz="20px" className={classes.vacance_name}>
              Text 3
            </Text>
            <Text fw={600} fz="16px" className={classes.vacance_description}>
              ffdfdfd
            </Text>
            <Text fw={400} fz="16px" className={classes.vacance_location}>
              <IconMapPin stroke={'1px'}/>
              New-York
            </Text>
          </Grid>     
          <IconStar/>       
        </Grid.Col>
        <Pagination 
          size="sm" 
          value={activePage} 
          onChange={setPage} 
          total={3}
        />
      </Grid>
    </Container>
  );
}