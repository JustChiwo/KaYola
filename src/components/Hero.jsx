function Hero() {
  return (
    <section className="relative flex min-h-[710px] items-center py-24 pt-32 max-sm:min-h-0 max-sm:pb-16 max-sm:pt-36" id="Home">
      <div className="pointer-events-none absolute -right-[5%] top-[4%] size-[500px] rounded-full bg-blue-500/15 blur-[110px]" aria-hidden="true" />
      <div className="relative z-10 mx-auto grid w-[min(1120px,calc(100%_-_48px))] grid-cols-[minmax(0,1.2fr)_minmax(330px,0.8fr)] items-center gap-[70px] max-[900px]:grid-cols-[minmax(0,1.1fr)_minmax(285px,0.9fr)] max-[900px]:gap-10 max-sm:w-[min(560px,calc(100%_-_36px))] max-sm:grid-cols-1 max-sm:gap-11">
        <div className="relative z-10">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent-yellow/25 bg-accent-yellow/7 px-3.5 py-2 text-xs font-semibold text-amber-200 max-sm:mb-7 max-sm:flex-wrap max-sm:text-[0.68rem]">
            <span className="size-[7px] rounded-full bg-accent-yellow shadow-[0_0_12px_rgba(255,196,61,0.8)]" />
            100% on our payroll <span className="text-white/35">/</span> zero direct HR liability
          </div>
          <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.13em] text-accent-yellow before:h-px before:w-[23px] before:bg-current">K&amp;Y Operations Group</p>
          <h1 className="m-0 max-w-[720px] font-display text-[clamp(3rem,6vw,5.15rem)] font-extrabold leading-[1.03] tracking-[-0.075em] text-[#f5f7fd] max-[900px]:text-[clamp(2.75rem,6.5vw,4.5rem)] max-sm:text-[clamp(2.7rem,12vw,4rem)]">
            Reliable manufacturing
            <br className="max-sm:hidden" /> subcontracting &amp;
            <span className="text-accent-blue"> workforce solutions</span>
          </h1>
          <p className="mt-6 max-w-[660px] text-[1.08rem] leading-7 text-[#b6c3d7] max-sm:text-base">
            We deploy vetted, skilled personnel directly to your plant or factory floor.
            Scale capacity when you need it, while we manage payroll and workforce
            compliance.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 max-sm:flex-col">
            <a className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-[14px] bg-accent-yellow px-6 font-bold text-[#111827] shadow-[0_9px_28px_rgba(255,196,61,0.17)] transition hover:-translate-y-0.5 hover:bg-[#ffd15f] max-sm:w-full" href="#Contact">
              Request workforce capacity <span aria-hidden="true">↗</span>
            </a>
            <a className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-[14px] border border-white/15 bg-white/[0.045] px-6 font-bold text-blue-50 transition hover:-translate-y-0.5 hover:bg-white/[0.09] max-sm:w-full" href="#Estimator">
              Calculate labor hours
            </a>
          </div>
          <div className="mt-7 flex items-center gap-2.5 text-sm text-[#9cabc0]">
            <span className="grid size-5 place-items-center rounded-full bg-accent-blue text-xs font-extrabold text-[#0e1b2b]" aria-hidden="true">✓</span>
            A responsive workforce partner for your operation
          </div>
        </div>
        <aside className="relative overflow-hidden rounded-[26px] border border-white/10 bg-gradient-to-br from-[#21324d]/70 to-[#0f192b]/70 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.18),inset_0_1px_rgba(255,255,255,0.08)] backdrop-blur-xl" aria-label="Workforce capacity overview">
          <div className="relative z-10 flex items-center justify-between gap-2">
            <span className="text-xs font-semibold text-[#b8c6da]">Your operation, supported</span>
            <span className="inline-flex items-center gap-2 text-[0.68rem] text-[#c1d9f6]"><i className="size-1.5 rounded-full bg-[#72dcaa] shadow-[0_0_12px_rgba(255,196,61,0.8)]" /> Ready to scale</span>
          </div>
          <div className="relative my-4 grid h-[275px] place-items-center" aria-hidden="true">
            <div className="absolute size-[222px] rounded-full border border-blue-300/20" />
            <div className="absolute size-[165px] rounded-full border border-blue-300/35" />
            <div className="relative z-10 flex size-[120px] flex-col items-center justify-center rounded-full border border-blue-200/40 bg-[radial-gradient(circle_at_30%_25%,#2f5c8b,#142643_72%)] shadow-[0_0_50px_rgba(59,145,245,0.24),inset_0_1px_rgba(255,255,255,0.2)]">
              <span className="font-display text-2xl font-extrabold tracking-[-0.07em]">K&amp;Y</span>
              <span className="mt-1 text-[0.63rem] uppercase tracking-[0.08em] text-[#b0c9e8]">Workforce</span>
            </div>
            <span className="absolute left-[21%] top-6 grid size-[38px] place-items-center rounded-xl border border-blue-200/25 bg-[#233a58]/90 text-[0.67rem] font-bold text-[#c1dbfb] shadow-lg">01</span>
            <span className="absolute bottom-10 right-[16%] grid size-[38px] place-items-center rounded-xl border border-blue-200/25 bg-[#233a58]/90 text-[0.67rem] font-bold text-[#c1dbfb] shadow-lg">02</span>
            <span className="absolute right-[18%] top-10 grid size-[38px] place-items-center rounded-xl border border-blue-200/25 bg-[#233a58]/90 text-[0.67rem] font-bold text-[#c1dbfb] shadow-lg">03</span>
          </div>
          <div className="flex flex-col gap-1 border-b border-blue-100/10 px-0.5 pb-5">
            <strong className="font-display text-base text-[#eef4ff]">People power production.</strong>
            <span className="text-xs text-[#9eafc7]">Skilled support, aligned with your floor.</span>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-5">
            <div className="flex flex-col gap-1"><strong className="font-display text-2xl leading-none text-accent-blue">40<span className="text-sm text-accent-yellow">h</span></strong><small className="text-xs text-[#9eafc7]">per worker / week</small></div>
            <div className="flex flex-col gap-1"><strong className="font-display text-2xl leading-none text-accent-blue">01<span className="text-sm text-accent-yellow">+</span></strong><small className="text-xs text-[#9eafc7]">clear point of contact</small></div>
          </div>
        </aside>
      </div>
      <div className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-200/20 to-transparent" aria-hidden="true" />
    </section>
  )
}

export default Hero