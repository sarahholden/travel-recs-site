import Link from "next/link";
import useUser from "../hooks/User";
import SignOut from "./SignOut";
import Favorites from "./Favorites";

export default function Nav() {
  const user = useUser();

  return (
    <nav>
      <ul>
        <li>
          <Link href="/guides">Guides</Link>
        </li>

        {user ? (
          <>
            <li>
              <Link href="/create">Create Guide</Link>
            </li>
            <li>
              <Link href="/account">Account</Link>
            </li>
            <SignOut />
          </>
        ) : (
          <li>
            <Link href="/signin">Sign In</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
