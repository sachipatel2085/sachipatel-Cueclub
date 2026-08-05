export default function EventCard({
  icon: Icon,
  title,
  date,
  description,
  reverse,
}) {
  return (
    <div className="event-card grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr]">
      {/* LEFT CARD */}
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

      {/* CENTER TIMELINE */}
      <div className="flex justify-center">
        <div className="timeline-dot flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#0B0B0B] text-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,.2)]">
          <Icon size={22} />
        </div>
      </div>

      {/* RIGHT CARD */}
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
  );
}
function Card({ Icon, title, date, description }) {
  return (
    <div
      className="
      group
      rounded-[30px]
      border
      border-white/10
      bg-white/[0.03]
      backdrop-blur-2xl
      p-8
      transition-all
      duration-700
      hover:border-[#D4AF37]/30
      hover:-translate-y-2
    "
    >
      <span className="text-xs uppercase tracking-[0.4em] text-[#D4AF37]">
        {date}
      </span>

      <h3 className="mt-5 text-3xl font-bold text-white">{title}</h3>

      <p className="mt-6 leading-8 text-gray-400">{description}</p>
    </div>
  );
}
