import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    gap: '4%'
  },

  container: {
    margin: 0,
    padding: 0,
    display: 'flex',
    gap: '12px'
  },

  vacancies: {
    display: 'flex',
    alignItems: 'flex-start',
    padding: 0,
    gap: '16px',
    width: '70%',
    justifyContent: 'center'
  },

  wrap_vacancy: {
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

  vacance_location: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },

  iconStar: {
    color: 'gray',
    '&:hover': {
      color: '#5E96FC'
    },
  },

  iconStarFilled: {
    color: '#5E96FC',
    '&:hover': {
      color: 'gray'
    },
  },

  paginationContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    listStyleType: 'none',
    gap: '8px',
    cursor: 'pointer',
    marginRight: 'auto',
    marginLeft: 'auto'
  },

  paginationPage: {
    border: '0',
    borderRadius: '4px',
  },

  paginationPageLink: {
    border: '1px solid #EAEBED',
    borderRadius: '4px',
    padding: '8px',
    height: '32px',
    width: '32px',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  },

  activePageLink: {
    backgroundColor: '#5E96FC',
    color: '#fff',
  }, 

  disabledPage: {
    color: '#EAEBED',
  }
}));

export default useStyles;