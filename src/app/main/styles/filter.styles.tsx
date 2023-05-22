import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  filters: {
    width: '315px',
    height: '360px',
    padding: '20px',
    backgroundColor: '#FFF',
    border: 'border: 1px solid #EAEBED',
    borderRadius: '12px'
  },

  container: {
    display: 'flex', 
    justifyContent: 'space-between',
    alignItems: 'center', 
    padding: 0, 
    margin: 0,
    width: '100%'
  },

  resetBtn: {
    marginLeft: 'auto', 
    alignItems: 'center',
  },

  root: {
    position: 'relative',
    width: '100%'
  },

  input: {
    height: '50px'
  },

  label: {
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '19.36px'
  },

  selector: {
    color: 'gray'
  }
}));

export default useStyles;