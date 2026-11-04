import { useEffect, useState } from 'react'
import phoneIcon from '../assets/phone-calling.svg'
import emailIcon from '../assets/email.svg'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (window.location.pathname === '/contact') {
      document.getElementById('Contact')?.scrollIntoView()
    }
  }, [])

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const subject = `Workforce request from ${formData.get('company')}`
    const body = [
      `Name: ${formData.get('name')}`,
      `Company: ${formData.get('company')}`,
      `Work email: ${formData.get('email')}`,
      `Phone: ${formData.get('phone')}`,
      '',
      'Project / staffing details:',
      formData.get('details'),
    ].join('\n')
    window.location.href = `mailto:kyoperationsgroup@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  return (
    <section className="relative bg-[radial-gradient(ellipse_at_95%_35%,rgba(35,83,145,0.12),transparent_34rem)] py-[100px] max-sm:py-[75px]" id="Contact">
      <div className="mx-auto grid w-[min(1120px,calc(100%_-_48px))] grid-cols-[0.8fr_1.2fr] items-start gap-[70px] max-[900px]:gap-[42px] max-sm:w-[min(560px,calc(100%_-_36px))] max-sm:grid-cols-1 max-sm:gap-9">
        <div>
          <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.13em] text-accent-yellow before:h-px before:w-[23px] before:bg-current">Let's talk</p>
          <h2 className="m-0 max-w-[460px] font-display text-[clamp(2rem,4vw,3.15rem)] font-extrabold leading-[1.12] tracking-[-0.055em] text-[#f7f9ff]">Get in touch with <span className="text-accent-blue">K&amp;Y Operations.</span></h2>
          <p className="mt-[18px] max-w-[460px] text-[1.05rem] leading-7 text-[#a7b5ca]">
            Our team is available to discuss your staffing needs.
          </p>
          <div className="mt-10 grid gap-6">
            <div className="flex items-center gap-4 max-[450px]:items-start">
              <span className="grid size-12 shrink-0 place-items-center rounded-[15px] border border-accent-blue/20 bg-blue-400/10">
                <img className="size-6 brightness-0 invert" src={phoneIcon} alt="" />
              </span>
              <div className="flex flex-wrap items-center gap-x-1">
                <span className="mb-1 block w-full text-[0.7rem] font-semibold uppercase tracking-[0.06em] text-[#91a5c1]">Direct phone inquiries</span>
                <a className="text-[0.93rem] font-bold text-[#e7eefb] underline decoration-blue-300/35 underline-offset-4 hover:text-accent-blue max-[450px]:text-[0.82rem]" href="tel:+27612694185">061 269 4185</a>
                <span className="text-[#7588a3]"> / </span>
                <a className="text-[0.93rem] font-bold text-[#e7eefb] underline decoration-blue-300/35 underline-offset-4 hover:text-accent-blue max-[450px]:text-[0.82rem]" href="tel:+27717209253">071 720 9253</a>
              </div>
            </div>
            <div className="flex items-center gap-4 max-[450px]:items-start">
              <span className="grid size-12 shrink-0 place-items-center rounded-[15px] border border-accent-blue/20 bg-blue-400/10">
                <img className="size-6 brightness-0 invert" src={emailIcon} alt="" />
              </span>
              <div className="flex flex-wrap items-center gap-x-1">
                <span className="mb-1 block w-full text-[0.7rem] font-semibold uppercase tracking-[0.06em] text-[#91a5c1]">Official proposals &amp; inquiries</span>
                <a className="text-[0.93rem] font-bold text-[#e7eefb] underline decoration-blue-300/35 underline-offset-4 hover:text-accent-blue max-[450px]:text-[0.82rem]" href="mailto:kyoperationsgroup@gmail.com">kyoperationsgroup@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
        <form className="rounded-[22px] border border-white/10 bg-gradient-to-br from-[#21324d]/70 to-[#0f192b]/70 p-[29px] shadow-[0_24px_70px_rgba(0,0,0,0.18),inset_0_1px_rgba(255,255,255,0.08)] backdrop-blur-xl max-sm:p-[22px]" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-x-4 gap-y-5 max-[450px]:grid-cols-1">
            <label className="flex flex-col gap-2 text-[0.72rem] font-bold uppercase tracking-[0.045em] text-[#d7e1f0]">
              Your name <span className="text-accent-yellow">*</span>
              <input className="h-[49px] w-full rounded-[11px] border border-blue-100/20 bg-[#060d19]/45 px-3.5 text-sm font-normal normal-case tracking-normal text-[#eff5ff] outline-none transition placeholder:text-[#72839c] focus:border-accent-blue/70 focus:ring-4 focus:ring-blue-400/10" name="name" type="text" placeholder="e.g. John Smith" autoComplete="name" required />
            </label>
            <label className="flex flex-col gap-2 text-[0.72rem] font-bold uppercase tracking-[0.045em] text-[#d7e1f0]">
              Company name <span className="text-accent-yellow">*</span>
              <input className="h-[49px] w-full rounded-[11px] border border-blue-100/20 bg-[#060d19]/45 px-3.5 text-sm font-normal normal-case tracking-normal text-[#eff5ff] outline-none transition placeholder:text-[#72839c] focus:border-accent-blue/70 focus:ring-4 focus:ring-blue-400/10" name="company" type="text" placeholder="e.g. Apex Manufacturing" autoComplete="organization" required />
            </label>
            <label className="flex flex-col gap-2 text-[0.72rem] font-bold uppercase tracking-[0.045em] text-[#d7e1f0]">
              Work email <span className="text-accent-yellow">*</span>
              <input className="h-[49px] w-full rounded-[11px] border border-blue-100/20 bg-[#060d19]/45 px-3.5 text-sm font-normal normal-case tracking-normal text-[#eff5ff] outline-none transition placeholder:text-[#72839c] focus:border-accent-blue/70 focus:ring-4 focus:ring-blue-400/10" name="email" type="email" placeholder="you@company.co.za" autoComplete="email" required />
            </label>
            <label className="flex flex-col gap-2 text-[0.72rem] font-bold uppercase tracking-[0.045em] text-[#d7e1f0]">
              Phone number <span className="text-accent-yellow">*</span>
              <input className="h-[49px] w-full rounded-[11px] border border-blue-100/20 bg-[#060d19]/45 px-3.5 text-sm font-normal normal-case tracking-normal text-[#eff5ff] outline-none transition placeholder:text-[#72839c] focus:border-accent-blue/70 focus:ring-4 focus:ring-blue-400/10" name="phone" type="tel" placeholder="e.g. 061 234 5678" autoComplete="tel" required />
            </label>
            <label className="col-span-full flex flex-col gap-2 text-[0.72rem] font-bold uppercase tracking-[0.045em] text-[#d7e1f0]">
              Project / staffing details <span className="text-accent-yellow">*</span>
              <textarea className="min-h-[116px] w-full resize-y rounded-[11px] border border-blue-100/20 bg-[#060d19]/45 px-3.5 py-3 text-sm font-normal normal-case tracking-normal text-[#eff5ff] outline-none transition placeholder:text-[#72839c] focus:border-accent-blue/70 focus:ring-4 focus:ring-blue-400/10" name="details" rows="4" placeholder="Share any details you would like us to know..." required />
            </label>
          </div>
          <button className="mt-5 inline-flex min-h-[52px] w-full cursor-pointer items-center justify-center gap-2.5 rounded-[14px] border-0 bg-accent-yellow px-6 font-bold text-[#111827] shadow-[0_9px_28px_rgba(255,196,61,0.17)] transition hover:-translate-y-0.5 hover:bg-[#ffd15f]" type="submit">
            {submitted ? 'Your email app should open now' : 'Send workforce request'}
          </button>
          <p className="mb-0 mt-3 text-center text-xs text-[#8799b2]">Your request will be prepared in your device&apos;s email app.</p>
        </form>
      </div>
    </section>
  )
}

export default Contact