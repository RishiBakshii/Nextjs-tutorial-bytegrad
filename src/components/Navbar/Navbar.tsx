import Link from "next/link"

export const Navbar = () => {
  return (
    <nav className="bg-indigo-400 h-16 flex justify-around items-center">
        <h1 className="font-bold text-4xl text-white">Code Help</h1>
        <ul className="flex items-center gap-x-4 font-medium">
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
            <Link href='/services'>Servies</Link>
            <Link href='/posts'>Posts</Link>
        </ul>
    </nav>
  )
}
