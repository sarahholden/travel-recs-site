import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/city">City</Link>
        </li>
        <li>
          <Link href="/account">Account</Link>
        </li>
      </ul>
      
      
    </nav>

  )
}