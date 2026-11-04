function Hero() {
  return (
    <section
      className="relative flex min-h-[710px] items-center py-24 pt-32 max-sm:min-h-0 max-sm:pb-16 max-sm:pt-36"
      id="Home"
    >
      <div
        className="pointer-events-none absolute -right-[5%] top-[4%] size-[500px] rounded-full bg-blue-500/15 blur-[110px]"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto w-[min(1120px,calc(100%_-_48px))] max-sm:w-[min(560px,calc(100%_-_36px))]">
        <div className="relative z-10">
          <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.13em] text-accent-yellow before:h-px before:w-[23px] before:bg-current">
            K&amp;Y Operations
          </p>
          <h1 className="m-0 max-w-[720px] font-display text-[clamp(3rem,6vw,5.15rem)] font-extrabold leading-[1.03] tracking-[-0.075em] text-[#f5f7fd] max-[900px]:text-[clamp(2.75rem,6.5vw,4.5rem)] max-sm:text-[clamp(2.7rem,12vw,4rem)]">
            Reliable manufacturing
            <br className="max-sm:hidden" /> subcontracting &amp;
            <span className="text-accent-blue"> workforce solutions</span>
          </h1>
          <p className="mt-6 max-w-[660px] text-[1.08rem] leading-7 text-[#b6c3d7] max-sm:text-base">
            We deploy vetted, skilled personnel directly to your plant or
            factory floor. Scale capacity when you need it, while we manage
            payroll and workforce compliance.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 max-sm:flex-col">
            <a
              className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-[14px] bg-accent-yellow px-6 font-bold text-[#111827] shadow-[0_9px_28px_rgba(255,196,61,0.17)] transition hover:-translate-y-0.5 hover:bg-[#ffd15f] max-sm:w-full"
              href="#Contact"
            >
              Request workforce capacity
            </a>
            <a
              className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-[14px] border border-white/15 bg-white/[0.045] px-6 font-bold text-blue-50 transition hover:-translate-y-0.5 hover:bg-white/[0.09] max-sm:w-full"
              href="#Estimator"
            >
              Calculate labor hours
            </a>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-200/20 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}

export default Hero;
