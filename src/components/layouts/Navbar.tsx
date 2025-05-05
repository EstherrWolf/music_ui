import Link from 'next/link'
import DarkModeToggle from '../common/DarkModeToggle'

export default function Navbar() {
  return (
    <header className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">🎧 MusicWeb</h1>
      <nav className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/browse">Browse</Link>
        <Link href="/playlist/1">Playlist</Link>
        <DarkModeToggle />
      </nav>
    </header>
  )
}
