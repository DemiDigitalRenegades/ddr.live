import React, { useState, useEffect } from 'react'

import { UploadVideo } from './Sections/UploadVideo/UploadVideo'
// import DeleteVideo from './DeleteVideo'
import { Grid, Typography } from '@material-ui/core'
import { withAuthenticator } from '@aws-amplify/ui-react'
import { Topbar } from './Topbar/Topbar'

const Admin = (props) => {
  // const [showUpload, setShowUpload] = useState(true)
  // const [showEdit, setShowEdit] = useState(false)

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
        <UploadVideo />
        {/* {showEdit && <DeleteVideo />} */}
      </Grid>
    </div>
  )
}

export default withAuthenticator(Admin, true)
