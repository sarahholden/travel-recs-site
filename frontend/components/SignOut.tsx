import { refetchUserQuery, useSignOutMutation } from "../types/generated-queries"

export default function SignOut() {
  const [signOutMutation] = useSignOutMutation({
    refetchQueries: [refetchUserQuery()],
  });

  async function handleClick() {
    await signOutMutation();
  }


  return (
    <button type="button" onClick={handleClick}>
      Sign Out
    </button>
  )
}