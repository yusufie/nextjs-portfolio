import Link from 'next/link'

function Home() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">Projects</Link>
      </li>
      <li>
        <Link href="/skills">Skills</Link>
      </li>
    </ul>
  )
}

export default Home