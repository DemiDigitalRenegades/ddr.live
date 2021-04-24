import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  overrides: {
    MuiOutlinedInput: {
      root: {
        color: 'white',
        '&$focused': {
          borderColor: 'green',
          backgroundColor: 'gray',
        },
      },
    },
  },
})
