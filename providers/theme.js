import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      outlined: {
        color: '#FFFFFF',
        borderColor: `rgba(255,255,255,0.5)`,
        '&:hover': {
          borderColor: '#FFFFFF',
        },
      },
    },
    MuiInputLabel: {
      root: {
        color: '#FFFFFF',
      },
    },
    MuiOutlinedInput: {
      notchedOutline: {
        borderColor: `rgba(255,255,255,0.5)`,
      },
    },
    MuiSvgIcon: {
      root: {
        height: '1.5rem',
        width: '1.5rem',
        color: '#FFFFFF',
      },
    },
    MuiTooltip: {
      tooltip: {
        fontSize: '1.1rem',
        border: '1px solid rgba(255,255,255,0.5)',
        backgroundColor: 'rgba(0,0,0,0.3)'
      },
      arrow: {
        color: 'rgba(255,255,255,0.9)',
      },
    },
  },
  palette: {
    brand: {
      light: '#ffc947',
      main: '#ff9800',
      dark: '#c66900',
      contrastText: '#000000',
    },
    primary: {
      light: '#cfff95',
      main: '#9ccc65',
      dark: '#6b9b37',
      contrastText: '#000000',
    },
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
