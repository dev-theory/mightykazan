import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  overrides: {
    MuiSvgIcon: {
      root: {
        height: '1.5rem',
        width: '1.5rem',
        color: '#FFFFFF',
      },
    },
  },
  palette: {
    primary: {
      light: '#ffc947',
      main: '#ff9800',
      dark: '#c66900',
      contrastText: '#000000',
    },
    // secondary: {
    //   light: '#cfff95',
    //   main: '#9ccc65',
    //   dark: '#6b9b37',
    //   contrastText: '#000000',
    // },
    error: {
      main: red.A400,
    },
    background: {
      default: '#FFFFFF',
    },
    divider: '#FFFFFF',
    text: {
      primary: '#FFFFFF',
    },
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
