import Link from 'next/link'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-800 p-4 flex flex-col justify-between">
      <div>
        <div className="mb-8">
          <h1 className="text-xl font-bold">ACME</h1>
        </div>
        <nav>
          <ul className="space-y-2">
            <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
            <li><Link href="/docs" className="text-gray-300 hover:text-white">Docs</Link></li>
            <li><Link href="/pricing" className="text-gray-300 hover:text-white">Pricing</Link></li>
            <li><Link href="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
            <li><Link href="/about" className="text-gray-300 hover:text-white">About</Link></li>
          </ul>
        </nav>
      </div>
      <div className="space-y-4">
        <div className="flex justify-around">
          <Link href="#" className="text-gray-300 hover:text-white">
            <FaTwitter size={20} />
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white">
            <FaGithub size={20} />
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white">
            <FaLinkedin size={20} />
          </Link>
        </div>
        <input type="text" placeholder="Search..." className="w-full p-2 bg-gray-700 rounded" />
        <button className="w-full p-2 bg-purple-600 text-white rounded">Sponsor</button>
      </div>
    </aside>
  )
}