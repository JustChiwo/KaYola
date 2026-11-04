const highlights = [
  {
    title: 'People, ready to work',
    description: 'Skilled personnel placed directly into your manufacturing environment.',
  },
  {
    title: 'Payroll, handled',
    description: 'Your deployed workforce remains on our payroll, reducing your admin load.',
  },
  {
    title: 'Capacity that flexes',
    description: 'Add workforce capacity to support changing production requirements.',
  },
]

function About() {
  return (
    <section className="relative bg-gradient-to-b from-[#111d30]/45 to-[#0b121f]/20 py-[100px] max-sm:py-[75px]" id="About">
      <div className="mx-auto w-[min(1120px,calc(100%_-_48px))] max-sm:w-[min(560px,calc(100%_-_36px))]">
        <div className="flex items-end justify-between gap-12 max-[900px]:items-start max-[900px]:flex-col max-[900px]:gap-4">
          <div className="max-w-[600px]">
            <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.13em] text-accent-yellow before:h-px before:w-[23px] before:bg-current">Who's KaYola</p>
            <h2 className="m-0 font-display text-[clamp(2rem,4vw,3.15rem)] font-extrabold leading-[1.12] tracking-[-0.055em] text-[#f7f9ff]">
              A practical partner for <span className="text-accent-blue">busy production floors.</span>
            </h2>
          </div>
          <p className="mb-1 mt-4 max-w-[400px] text-[1.05rem] leading-7 text-[#a7b5ca]">
            KaYola helps manufacturing businesses meet workforce
            demands with reliable subcontracting support and a straightforward
            operating model.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-4 max-sm:grid-cols-1">
          {highlights.map((item) => (
            <article className="group relative min-h-[250px] rounded-[20px] border border-white/10 bg-gradient-to-br from-[#21324d]/70 to-[#0f192b]/70 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.18),inset_0_1px_rgba(255,255,255,0.08)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-accent-blue/35 max-sm:min-h-[220px]" key={item.title}>
              <div className="mt-7 grid size-11 place-items-center rounded-[14px] border border-accent-blue/20 bg-blue-400/10" aria-hidden="true"><span className="size-3.5 rotate-45 rounded-[4px] border-2 border-accent-blue" /></div>
              <h3 className="mb-2 mt-[18px] font-display text-lg font-bold tracking-tight text-[#eaf1fd]">{item.title}</h3>
              <p className="m-0 max-w-[310px] text-[0.91rem] leading-relaxed text-[#a9b8cc]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About