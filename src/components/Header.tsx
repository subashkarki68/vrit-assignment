import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="p-2 flex gap-2 bg-white text-black justify-between">
      <nav className="flex flex-row">
        <div className="px-2 font-bold flex flex-row gap-4">
          <Link 
            to="/"
            className="hover:text-blue-600 transition-colors"
            activeProps={{
              className: "text-blue-600 border-b-2 border-blue-600"
            }}
          >
            Home
          </Link>
          <Link 
            to="/testimonials"
            className="hover:text-blue-600 transition-colors"
            activeProps={{
              className: "text-blue-600 border-b-2 border-blue-600"
            }}
          >
            Testimonials
          </Link>
        </div>
      </nav>
    </header>
  )
}
