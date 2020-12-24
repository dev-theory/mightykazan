import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  overrides: {
    MuiSvgIcon: {
      root: {
        height: '1.5rem',
        width: '1.5rem',
        color: 'white',
      },
    },
  },
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#ff0000',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    divider: '#fff',
  },
  typography: {
    body1: {
      fontSize: '1.2rem',
    },
    button: {
      fontSize: '1.2rem',
    },
  },
});

export default theme;
