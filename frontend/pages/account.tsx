import useUser from "../hooks/User";
import SignIn from "../components/SignIn";
import SignOut from "../components/SignOut";
import Link from "next/link";

export default function AccountPage() {
  const user = useUser();

  if (!user) {
    return <SignIn />;
  }
  return (
    <div>
      <Link href="/create">Create Guide</Link>
      <SignOut />
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}
