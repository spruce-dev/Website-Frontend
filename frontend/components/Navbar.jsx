import Link from "next/link"

function Navbar() {

    return (
        <>
        <nav className="flex bg-red-600 p-10 justify-center">
            <ul className="flex flex-wrap items-center justify-between">
                <li className="flex items-center">
                    <Link href="/" passHref>
                    <button className="mx-5 p-5 px-10 border-black text-gray-200 bg-gray-800 hover:bg-green-600 transition-all rounded-xl shadow-sm" >
                        Home
                    </button>
                    </Link>
                </li>
                <li className="flex items-center">
                    <Link href="/memes" passHref>
                    <button className="mx-5 p-5 px-10 border-black text-gray-200 bg-gray-800 hover:bg-green-600 transition-all rounded-xl shadow-sm" >
                        Memes
                    </button>
                    </Link>
                </li>
                <li className="flex items-center">
                    <Link href="/shit" passHref>
                    <button className="mx-5 p-5 px-10 border-black text-gray-200 bg-gray-800 hover:bg-green-600 transition-all rounded-xl shadow-sm" >
                        Shit
                    </button>
                    </Link>
                </li>
                <li className="flex items-center">
                    <Link href="/auhhh" passHref>
                    <button className="mx-5 p-5 px-10 border-black text-gray-200 bg-gray-800 hover:bg-green-600 transition-all rounded-xl shadow-sm" >
                        AUHHH
                    </button>
                    </Link>
                </li>
                <li className="flex items-center">
                    <Link href="/signup" passHref>
                    <button className="mx-5 p-5 px-10 border-black text-gray-200 bg-gray-800 hover:bg-green-600 transition-all rounded-xl shadow-sm">
                        Sign Up
                    </button>
                    </Link>
                </li>
            </ul>
        </nav>

        </>
  )
}

export default Navbar

