import React from 'react'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

const Admin = () => (
  <div>
    <AmplifySignOut />
    DDR.Live
  </div>
)

export default withAuthenticator(Admin)
