import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  container: {
    margin: 0,
    padding: 0,
    display: 'flex',
    gap: '12px'
  },

  vacance: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    gap: '12px'
  },

  vacancy_location: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
}));

export default useStyles;