import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from '@material-ui/core'
import { UserMenu } from './UserMenu'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

export const Topbar = (props) => {
  const { title, buttons } = props
  const classes = useStyles()

  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' className={classes.title}>
          {title}
        </Typography>
        {buttons?.map((item) => (
          <Button color='inherit' onClick={item.handler}>
            {item.name}
          </Button>
        ))}
        <UserMenu />
      </Toolbar>
    </AppBar>
  )
}
