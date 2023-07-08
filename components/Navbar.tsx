import Link from "next/link"
import { BsCart4 } from "react-icons/bs"



const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 z-10 flex items-center justify-between px-14 py-5 bg-[#141414]/95">
      <div>
        <Link href='/' className="text-4xl font-bold">
          <BsCart4 />
        </Link>
      </div>
      
      <div className="flex space-x-5">
        <button className="bg-purple-600 px-4 py-2 text-sm rounded">Log in</button>
        <button className="border border-purple-500 px-4 py-2 text-sm rounded">Sign up</button>
      </div>
    </nav>
  )
}

export default Navbar