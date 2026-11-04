import workforceImage from "../assets/WorkForce.jpg";

function About() {
  return (
    <section
      className="relative isolate min-h-[430px] overflow-hidden bg-gradient-to-b from-[#111d30]/45 to-[#0b121f]/20 py-[100px] max-sm:flex max-sm:min-h-0 max-sm:flex-col max-sm:py-[75px]"
      id="About"
    >
      <div className="absolute inset-y-0 left-[48%] right-0 z-0 max-sm:relative max-sm:order-2 max-sm:left-auto max-sm:right-auto max-sm:mx-[-18px] max-sm:mt-8 max-sm:h-[260px]">
        <img
          className="absolute inset-0 size-full object-cover object-center max-sm:relative"
          src={workforceImage}
          alt="Workers in safety gear working together on a construction site"
          loading="lazy"
        />
        <div
          className="pointer-events-none absolute inset-y-0 left-0 right-auto w-1/3 bg-gradient-to-r from-[#111d30] via-[#111d30]/45 to-transparent backdrop-blur-xl [mask-image:linear-gradient(to_right,black,transparent)]"
          aria-hidden="true"
        />
      </div>
      <div className="relative z-10 order-1 mx-auto w-[min(1120px,calc(100%_-_48px))] max-sm:w-[min(560px,calc(100%_-_36px))]">
        <div className="max-w-[530px]">
          <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.13em] text-accent-yellow before:h-px before:w-[23px] before:bg-current">
            About K&amp;Y Operations
          </p>
          <h2 className="m-0 font-display text-[clamp(2rem,4vw,3.15rem)] font-extrabold leading-[1.12] tracking-[-0.055em] text-[#f7f9ff]">
            A practical partner for{" "}
            <span className="text-accent-blue">busy production floors.</span>
          </h2>
          <p className="mb-0 mt-5 max-w-[520px] text-[1.05rem] leading-7 text-[#a7b5ca]">
            We work alongside manufacturing teams to align workforce support
            with the realities of day-to-day operations.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
