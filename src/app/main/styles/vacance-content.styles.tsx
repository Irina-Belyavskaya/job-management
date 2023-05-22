import { createStyles } from "@mantine/core";

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

  wrap_vacancy: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 0,
    backgroundColor: '#FFF',
    borderRadius: '12px',
    width: '773px',
  },

  container_info: {
    margin: 0,
    padding: 0,
    display: 'flex',
    gap: '12px'
  },

  vacancy: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: '16px',
    padding: 0,
    marginLeft: 0,
    marginRight: 0
  },

  vacancy_location: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    gap: '8px'
  },

  wrap_paragraph: {
    padding: 0,
    margin: 0,

    'p': {
      fontWeight: 700,
      fontSize: '20px',
      lineHeight: '20px'
    },
    'ul': {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '22.4px',
      color: '#232134'
    }
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
  }
}));

export default useStyles;