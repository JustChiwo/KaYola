function About() {
  return (
    <section className="relative bg-gradient-to-b from-[#111d30]/45 to-[#0b121f]/20 py-[100px] max-sm:py-[75px]" id="About">
      <div className="mx-auto w-[min(1120px,calc(100%_-_48px))] max-sm:w-[min(560px,calc(100%_-_36px))]">
        <div className="max-w-[760px]">
          <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.13em] text-accent-yellow before:h-px before:w-[23px] before:bg-current">About KaYola</p>
          <h2 className="m-0 font-display text-[clamp(2rem,4vw,3.15rem)] font-extrabold leading-[1.12] tracking-[-0.055em] text-[#f7f9ff]">
            A practical partner for <span className="text-accent-blue">busy production floors.</span>
          </h2>
          <p className="mb-0 mt-5 max-w-[660px] text-[1.05rem] leading-7 text-[#a7b5ca]">
            We work alongside manufacturing teams to align workforce support with
            the realities of day-to-day operations.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About