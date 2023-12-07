import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/guides">Guides</Link>
        </li>
        <li>
          <Link href="/create">Create Guide</Link>
        </li>
        <li>
          <Link href="/account">Account</Link>
        </li>
      </ul>
      
      
    </nav>

  )
}