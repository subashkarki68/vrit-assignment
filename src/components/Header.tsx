import { Link } from '@tanstack/react-router'

export default function Header() {
  const className =
    'text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors'
  const activeClassName = 'text-blue-600 border-b-2 border-blue-600'
  return (
    <header className="p-2 flex gap-2 bg-white text-black justify-between">
      <nav className="flex flex-row">
        <div className="px-2 font-bold flex flex-row gap-4">
          <Link
            to="/"
            className={className}
            activeProps={{
              className: activeClassName,
            }}
          >
            Home
          </Link>
          <Link
            to="/testimonials"
            className={className}
            activeProps={{
              className: activeClassName,
            }}
          >
            Testimonials
          </Link>
          <Link
            to="/classes"
            className={className}
            activeProps={{
              className: activeClassName,
            }}
          >
            Classes
          </Link>
        </div>
      </nav>
    </header>
  )
}
