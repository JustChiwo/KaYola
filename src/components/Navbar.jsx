function Navbar() {
  return (
    <nav className="fixed left-1/2 top-4 z-20 hidden h-17.5 w-[90%] max-w-xl -translate-x-1/2 items-center justify-center rounded-full border border-blue-100/15 bg-slate-950/65 text-slate-100 shadow-[0_8px_32px_rgba(0,0,0,0.28),inset_0_1px_rgba(255,255,255,0.08)] backdrop-blur-xl transition-all sm:flex">
      <ul className="flex items-center gap-5 text-sm sm:gap-10 sm:text-base">
        <li>
          <a className="transition-colors hover:text-accent-blue" href="/#Home">
            Home
          </a>
        </li>
        <li>
          <a className="transition-colors hover:text-accent-blue" href="/#About">
            About
          </a>
        </li>
        <li>
          <a className="transition-colors hover:text-accent-blue" href="/#Services">
            Services
          </a>
        </li>
         <li>
          <a className="transition-colors hover:text-accent-blue" href="/#Estimator">
            Calculator
          </a>
        </li>
        <li>
          <a className="transition-colors hover:text-accent-blue" href="/#Contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
