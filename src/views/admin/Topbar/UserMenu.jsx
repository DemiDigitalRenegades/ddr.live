import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state'
import { Auth } from 'aws-amplify'
import { SignOut } from '../AuthFunc'
import { useHistory } from 'react-router-dom'

export const UserMenu = () => {
  const [username, setUsername] = useState()
  const history = useHistory()

  const handleGoHome = () => {
    history.push('/')
  }

  const getUsername = async () => {
    const user = await Auth.currentAuthenticatedUser()

    setUsername(user.username)
  }

  useEffect(() => {
    getUsername()
  }, [])

  return (
    <div>
      {username && (
        <PopupState variant='popover' popupId='demo-popup-menu'>
          {(popupState) => (
            <React.Fragment>
              <Button
                variant='contained'
                color='primary'
                startIcon={<AccountCircleIcon />}
                {...bindTrigger(popupState)}>
                {username}
              </Button>
              <Menu {...bindMenu(popupState)}>
                <MenuItem
                  onClick={() => {
                    popupState.close()
                    SignOut()
                    handleGoHome()
                  }}>
                  Logout
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    popupState.close()
                    handleGoHome()
                  }}>
                  Home
                </MenuItem>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
      )}
    </div>
  )
}
