import Router from "next/router";
import useUser from "../hooks/User"
import SignIn from "../components/SignIn";

export default function AccountPage() {
  const user = useUser();
  
  if (!user) {
    return <SignIn />;
  }
  return <div>
    <p>Name: {user.name}</p>
    <p>Email: {user.email}</p>
  </div>
}

