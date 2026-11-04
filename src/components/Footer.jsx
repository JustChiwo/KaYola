function Footer() {
  return (
    <footer className="border-t border-blue-100/10 bg-gradient-to-b from-[#0b1423] to-[#060b14]">
      <div className="mx-auto grid w-[min(1120px,calc(100%_-_48px))] grid-cols-[1fr_auto] gap-x-12 gap-y-8 py-10 max-sm:w-[min(560px,calc(100%_-_36px))] max-sm:grid-cols-1">
        <div>
          <a className="font-display text-lg font-extrabold tracking-tight text-[#f3f6ff] no-underline" href="#Home">
            KaYola
          </a>
          <p className="mb-0 mt-3 text-xs text-[#8496af]">
            © {new Date().getFullYear()} KaYola. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col items-start gap-2 max-sm:row-start-2">
          <h2 className="mb-1 mt-0 font-display text-sm font-bold text-[#eaf1fd]">Contact</h2>
          <a className="text-sm text-[#aebdd2] no-underline transition hover:text-accent-blue" href="tel:+27612694185">061 269 4185</a>
          <a className="text-sm text-[#aebdd2] no-underline transition hover:text-accent-blue" href="tel:+27717209253">071 720 9253</a>
          <a className="text-sm text-[#aebdd2] no-underline transition hover:text-accent-blue" href="mailto:kyoperationsgroup@gmail.com">kyoperationsgroup@gmail.com</a>
        </div>
       
      </div>
    </footer>
  )
}

export default Footer