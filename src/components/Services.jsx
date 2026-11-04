import stairsIcon from '../assets/stairs.svg'
import peopleIcon from '../assets/people.svg'
import cashIcon from '../assets/cash.svg'

const services = [
  {
    title: 'Manufacturing subcontracting',
    description:
      'Deploy skilled personnel to support production work at your facility.',
    icon: stairsIcon,
    iconAlt: 'Production',
  },
  {
    title: 'Workforce solutions',
    description:
      'Plan staffing around your project, shift requirements, and timeline.',
    icon: peopleIcon,
    iconAlt: 'Workforce',
  },
  {
    title: 'Payroll & compliance',
    description:
      'We manage payroll and workforce compliance for deployed personnel.',
    icon: cashIcon,
    iconAlt: 'Payroll',
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
            Explore the services K&amp;Y provides to manufacturing businesses.
          </p>
        </div>
        <div className="mt-[46px] grid grid-cols-3 gap-4 max-sm:grid-cols-1">
          {services.map((service) => (
            <article className="min-h-[265px] rounded-[20px] border border-white/10 bg-gradient-to-br from-[#21324d]/70 to-[#0f192b]/70 p-[26px] shadow-[0_24px_70px_rgba(0,0,0,0.18),inset_0_1px_rgba(255,255,255,0.08)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-accent-blue/35 max-sm:min-h-[230px]" key={service.title}>
              <div className="grid size-11 place-items-center rounded-[14px] border border-accent-blue/20 bg-blue-400/10">
                <img className="size-6 brightness-0 invert" src={service.icon} alt={service.iconAlt} />
              </div>
              <h3 className="mb-2 mt-1 max-w-[260px] font-display text-xl font-bold tracking-tight text-[#eaf1fd]">{service.title}</h3>
              <p className="m-0 max-w-[310px] text-[0.91rem] leading-relaxed text-[#a9b8cc]">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services