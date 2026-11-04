import { useState } from 'react'

function Estimator() {
  const [workers, setWorkers] = useState(10)
  const weeklyHours = workers * 40
  const rangeProgress = `${((workers - 1) / 99) * 100}%`

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#101d30]/55 to-[#0b121f]/25 py-[100px] max-sm:py-[75px]" id="Estimator">
      <div className="pointer-events-none absolute -left-[12%] top-[10%] size-[440px] rounded-full bg-blue-500/10 blur-[110px]" aria-hidden="true" />
      <div className="relative z-10 mx-auto grid w-[min(1120px,calc(100%_-_48px))] grid-cols-[0.85fr_1.15fr] items-center gap-20 max-[900px]:gap-[42px] max-sm:w-[min(560px,calc(100%_-_36px))] max-sm:grid-cols-1 max-sm:gap-9">
        <div>
          <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.13em] text-accent-yellow before:h-px before:w-[23px] before:bg-current">Plan your capacity</p>
          <h2 className="m-0 max-w-[480px] font-display text-[clamp(2rem,4vw,3.15rem)] font-extrabold leading-[1.12] tracking-[-0.055em] text-[#f7f9ff]">See the hours your <span className="text-accent-blue">team can deliver.</span></h2>
          <p className="mt-[18px] max-w-[440px] text-[1.05rem] leading-7 text-[#a7b5ca]">
            Estimate weekly hours using a standard 40-hour work week per worker.
          </p>
        </div>
        <div className="rounded-[22px] border border-white/10 bg-gradient-to-br from-[#21324d]/70 to-[#0f192b]/70 p-[31px] shadow-[0_24px_70px_rgba(0,0,0,0.18),inset_0_1px_rgba(255,255,255,0.08)] backdrop-blur-xl max-sm:p-[22px]">
          <label className="flex items-baseline justify-between gap-3 text-sm text-[#c6d3e6]" htmlFor="worker-count">
            <span>Number of subcontracted workers</span>
            <strong className="font-display text-2xl text-accent-yellow">{workers}</strong>
          </label>
          <input
            id="worker-count"
            className="my-6 block h-1.5 w-full cursor-pointer appearance-none rounded-full bg-[linear-gradient(to_right,#43a3ff_var(--range-progress),rgba(148,170,201,0.22)_var(--range-progress))] focus-visible:outline-2 focus-visible:outline-offset-[7px] focus-visible:outline-accent-blue [&::-webkit-slider-thumb]:size-[18px] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-[#0e1828] [&::-webkit-slider-thumb]:bg-accent-yellow [&::-webkit-slider-thumb]:shadow-[0_0_0_3px_rgba(255,196,61,0.18)] [&::-moz-range-thumb]:size-[13px] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-[3px] [&::-moz-range-thumb]:border-[#0e1828] [&::-moz-range-thumb]:bg-accent-yellow"
            type="range"
            min="1"
            max="100"
            value={workers}
            onChange={(event) => setWorkers(Number(event.target.value))}
            style={{ '--range-progress': rangeProgress }}
          />
          <div className="-mt-3 flex justify-between text-[0.7rem] text-[#8293ac]"><span>1 worker</span><span>100 workers</span></div>
          <div className="mt-7 flex min-h-[170px] flex-col items-center justify-center rounded-2xl border border-blue-200/15 bg-[radial-gradient(ellipse_at_50%_-10%,rgba(61,137,220,0.2),transparent_70%),rgba(8,15,28,0.65)] text-center">
            <span className="text-xs uppercase tracking-[0.08em] text-[#a9c5e7]">Total weekly output hours</span>
            <strong className="mt-1 font-display text-[clamp(2.4rem,5vw,3.4rem)] font-extrabold tracking-[-0.06em] text-accent-yellow">{weeklyHours.toLocaleString()} <span className="text-[0.58em] tracking-tight">hours</span></strong>
          </div>
          <a className="mt-[18px] inline-flex min-h-[52px] w-full items-center justify-center gap-2.5 rounded-[14px] bg-accent-yellow px-6 font-bold text-[#111827] shadow-[0_9px_28px_rgba(255,196,61,0.17)] transition hover:bg-[#ffd15f]" href="#Contact">
            Discuss your requirements
          </a>
        </div>
      </div>
    </section>
  )
}

export default Estimator
