import { createStyles } from "@mantine/core";

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
  }
}));

export default useStyles;