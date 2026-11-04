const services = [
  {
    number: '01',
    title: 'Manufacturing subcontracting',
    description:
      'Put additional hands on the floor to help meet production needs and keep work moving.',
    tag: 'Production support',
  },
  {
    number: '02',
    title: 'Workforce solutions',
    description:
      'Scale your deployed workforce to suit your project, shift requirements, and timeline.',
    tag: 'Flexible capacity',
  },
  {
    number: '03',
    title: 'Payroll & compliance',
    description:
      'Keep the workforce on our payroll and under our compliance management.',
    tag: 'Less admin',
  },
]

function Services() {
  return (
    <section className="relative bg-[radial-gradient(ellipse_at_7%_54%,rgba(38,84,139,0.13),transparent_35rem)] py-[100px] max-sm:py-[75px]" id="Services">
      <div className="mx-auto w-[min(1120px,calc(100%_-_48px))] max-sm:w-[min(560px,calc(100%_-_36px))]">
        <div className="flex items-end justify-between gap-12 max-[900px]:items-start max-[900px]:flex-col max-[900px]:gap-4">
          <div className="max-w-[600px]">
            <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.13em] text-accent-yellow before:h-px before:w-[23px] before:bg-current">What we do</p>
            <h2 className="m-0 font-display text-[clamp(2rem,4vw,3.15rem)] font-extrabold leading-[1.12] tracking-[-0.055em] text-[#f7f9ff]">Workforce support that <span className="text-accent-blue">works on your floor.</span></h2>
          </div>
          <p className="mb-1 mt-4 max-w-[400px] text-[1.05rem] leading-7 text-[#a7b5ca]">
            One operational partner for the people and practical support behind your
            manufacturing output.
          </p>
        </div>
        <div className="mt-[46px] grid grid-cols-3 gap-4 max-sm:grid-cols-1">
          {services.map((service) => (
            <article className="min-h-[265px] rounded-[20px] border border-white/10 bg-gradient-to-br from-[#21324d]/70 to-[#0f192b]/70 p-[26px] shadow-[0_24px_70px_rgba(0,0,0,0.18),inset_0_1px_rgba(255,255,255,0.08)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-accent-blue/35 max-sm:min-h-[230px]" key={service.number}>
              <div className="flex items-center justify-between">
                <span className="font-display text-xs font-bold tracking-[0.09em] text-[#7d91ad]">{service.number}</span>
                <span className="text-accent-yellow" aria-hidden="true">↗</span>
              </div>
              <h3 className="mb-2 mt-[34px] max-w-[260px] font-display text-xl font-bold tracking-tight text-[#eaf1fd]">{service.title}</h3>
              <p className="m-0 max-w-[310px] text-[0.91rem] leading-relaxed text-[#a9b8cc]">{service.description}</p>
              <span className="mt-5 inline-flex rounded-lg border border-accent-blue/20 bg-blue-400/7 px-2.5 py-1.5 text-xs font-semibold text-[#acd0f7]">{service.tag}</span>
            </article>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-5 rounded-[18px] border border-white/10 bg-gradient-to-br from-[#21324d]/70 to-[#0f192b]/70 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.18),inset_0_1px_rgba(255,255,255,0.08)] backdrop-blur-xl max-sm:flex-wrap max-sm:p-5" id="Benefits">
          <div className="grid size-[46px] shrink-0 place-items-center rounded-[14px] border border-accent-yellow/25 bg-accent-yellow/10 text-xl text-accent-yellow" aria-hidden="true">✦</div>
          <div className="flex-1 max-sm:min-w-[calc(100%-70px)]">
            <span className="text-xs text-[#a6b6cc]">The K&amp;Y difference</span>
            <h3 className="m-0 mt-1 font-display text-lg font-bold text-[#edf3fd]">More capacity. Less direct HR liability.</h3>
          </div>
          <a className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-[14px] border border-white/15 bg-white/[0.045] px-6 font-bold text-blue-50 transition hover:bg-white/[0.09] max-sm:w-full" href="#Contact">Talk to our team <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  )
}

export default Services