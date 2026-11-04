function Navbar() {
  return (
    <nav className="fixed left-1/2 top-4 z-20 flex h-17.5 w-[90%] max-w-xl -translate-x-1/2 items-center justify-center rounded-full border-2 border-gray-200 bg-white/70 text-black shadow-[0px_4px_25px_0px_#0000000D] backdrop-blur-md transition-all">
      <ul className="flex items-center gap-5 text-sm sm:gap-10 sm:text-base">
        <li>
          <a className="transition hover:text-gray-500" href="/#Home">
            Home
          </a>
        </li>
        <li>
          <a className="transition hover:text-gray-500" href="/#About">
            About
          </a>
        </li>
        <li>
          <a className="transition hover:text-gray-500" href="/#Services">
            Services
          </a>
        </li>
        <li>
          <a className="transition hover:text-gray-500" href="/contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
