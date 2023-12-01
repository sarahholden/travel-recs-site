import Link from "next/link";
import Nav from "./Nav";

export default function Header() {
  return (
    <header>
      <h1>
        <Link href="/">
          Travel Buddy
        </Link>
      </h1>
      <Nav/>
    </header>

  )
}