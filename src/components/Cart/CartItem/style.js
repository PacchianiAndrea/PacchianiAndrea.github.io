import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 260,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    display: 'flex',
    
    bottom: 0
  },
  buttons: {
    bottom: 0,
    display: 'flex',
    // alignItems: 'center',
  },
  palette:{
    primary: {
      main:"#388e3c"
    }
  },
  carta:{
    height:"500px"
  }
}));
