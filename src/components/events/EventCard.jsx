export default function EventCard({
  icon: Icon,
  title,
  date,
  description,
  reverse,
}) {
  return (
    <>
      {/* ================= Desktop ================= */}
      <div className="event-card hidden items-center gap-10 lg:grid lg:grid-cols-[1fr_auto_1fr]">
        {/* Left */}
        {!reverse ? (
          <div className="justify-self-end w-full max-w-xl">
            <Card
              Icon={Icon}
              title={title}
              date={date}
              description={description}
            />
          </div>
        ) : (
          <div />
        )}

        {/* Timeline */}
        <div className="flex justify-center">
          <div className="timeline-dot flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#0B0B0B] text-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,.2)]">
            <Icon size={22} />
          </div>
        </div>

        {/* Right */}
        {reverse ? (
          <div className="justify-self-start w-full max-w-xl">
            <Card
              Icon={Icon}
              title={title}
              date={date}
              description={description}
            />
          </div>
        ) : (
          <div />
        )}
      </div>

      {/* ================= Mobile ================= */}
      <div className="event-card relative flex gap-6 pl-14 lg:hidden">
        {/* Timeline Dot */}
        <div className="absolute left-[7px] top-8 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#0B0B0B] text-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,.2)]">
          <Icon size={18} />
        </div>

        <div className="w-full">
          <Card
            Icon={Icon}
            title={title}
            date={date}
            description={description}
          />
        </div>
      </div>
    </>
  );
}

function Card({ title, date, description }) {
  return (
    <div
      className="
      group
      rounded-[24px]
      md:rounded-[30px]
      border
      border-white/10
      bg-white/[0.03]
      backdrop-blur-2xl
      p-6
      md:p-8
      transition-all
      duration-700
      hover:border-[#D4AF37]/30
      hover:-translate-y-2
    "
    >
      <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.4em] text-[#D4AF37]">
        {date}
      </span>

      <h3 className="mt-4 text-2xl md:text-3xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-5 text-sm md:text-base leading-7 md:leading-8 text-gray-400">
        {description}
      </p>
    </div>
  );
}
