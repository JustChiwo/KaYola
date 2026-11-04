function Footer() {
  return (
    <footer className="border-t border-blue-100/10 bg-[#060b14]/60">
      <div className="mx-auto flex min-h-[90px] w-[min(1120px,calc(100%_-_48px))] items-center justify-between gap-5 max-sm:w-[min(560px,calc(100%_-_36px))] max-sm:flex-col max-sm:items-start max-sm:justify-center max-sm:py-[22px]">
        <a className="flex items-center gap-3 no-underline" href="#Home" aria-label="K&Y Operations Group, back to top">
          <span className="grid size-[41px] place-items-center rounded-xl bg-accent-yellow font-display text-sm font-extrabold text-[#142033]">K&amp;Y</span>
          <span className="flex flex-col gap-[3px]">
            <strong className="font-display text-sm text-[#eaf1fd]">K&amp;Y Operations Group</strong>
            <small className="text-[0.63rem] uppercase tracking-[0.06em] text-[#8fa2bc]">Manufacturing workforce solutions</small>
          </span>
        </a>
        <span className="text-xs text-[#8496af] max-sm:order-1">Workforce capacity, built around your operation.</span>
        <a className="text-xs text-[#c4d2e5] no-underline" href="#Home">Back to top <span className="ml-1 text-accent-yellow" aria-hidden="true">↑</span></a>
      </div>
    </footer>
  )
}

export default Footer