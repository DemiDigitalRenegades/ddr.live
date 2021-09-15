import { Auth } from 'aws-amplify'

export async function SignOut() {
  try {
    await Auth.signOut()
  } catch (error) {
    console.log('error signing out: ', error)
  }
}
