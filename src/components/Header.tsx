import logo from "../assets/images/logo.svg";

export default function Header() {
  return (
    <header className="w-full bg-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-6 px-4">
        {/* left side - logo */}
        <img src={logo} alt="Shortly logo" className="h-6" />

        {/* center nav links */}
        <nav className="hidden md:flex items-center gap-8 text-gray-600 text-sm font-medium">
          <a href="#" className="hover:text-gray-900">
            Features
          </a>
          <a href="#" className="hover:text-gray-900">
            Pricing
          </a>
          <a href="#" className="hover:text-gray-900">
            Resources
          </a>
        </nav>

        {/* right side - login */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <button className="text-gray-600 hover:text-gray-900">Login</button>
          <button className="bg-teal-400 hover:bg-teal-300 text-white py-2 px-5 rounded-full">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
