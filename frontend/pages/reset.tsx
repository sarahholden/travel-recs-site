import PasswordResetRequest from "../components/PasswordResetRequest";
import Reset from '../components/Reset'

type resetPageProps = {
  query: {
    token: string;
  }
}

export default function resetPasswordPage({ query }: resetPageProps) {
  
  if (!query?.token) {
    return (
      <>
        <p>You are trying to access this page directly, but you must access through the link sent via email.</p>
        <PasswordResetRequest/>
      </>
    )
  }
  return (
    <Reset token={query.token}/>
  )

}