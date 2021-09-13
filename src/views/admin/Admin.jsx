import React, { useState, useEffect } from 'react'

// import UploadVideo from './UploadVideo'
// import DeleteVideo from './DeleteVideo'
import { Grid, makeStyles } from '@material-ui/core'
import { withAuthenticator } from '@aws-amplify/ui-react'
import { Topbar } from './Topbar/Topbar'
import Auth from '@aws-amplify/auth'

const Admin = (props) => {
  // const [showUpload, setShowUpload] = useState(true)
  // const [showEdit, setShowEdit] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)

  const isAdminCheck = async () => {
    const user = await Auth.currentAuthenticatedUser()

    setIsAdmin(
      user.signInUserSession.accessToken.payload['cognito:groups']?.includes(
        'Admin'
      )
    )
  }

  // useEffect(() => {
  //   isAdminCheck()
  // }, [])

  // const handleSetShowUpload = () => {
  //   // setShowEdit(false)
  //   setShowUpload(true)
  // }

  // const handleSetShowEdit = () => {
  //   setShowUpload(false)
  //   setShowEdit(true)
  // }

  // const topBarButtons = [{ name: 'Upload', handler: handleSetShowUpload }]

  return (
    <div>
      <Topbar title='Admin Panel' />
      <Grid>
        {/* {showUpload && <UploadVideo />} */}
        {/* {showEdit && <DeleteVideo />} */}
      </Grid>
    </div>
  )
}

export default withAuthenticator(Admin)
