import { Calendar, Clock, Mail, Phone, User, ArrowRight } from "lucide-react";

export default function BookingForm() {
  const inputStyle = `
w-full
rounded-2xl
border
border-white/10
bg-white/[0.04]
px-5
py-4
text-white
outline-none
transition-all
duration-500

placeholder:text-gray-500

focus:border-[#D4AF37]/40
focus:bg-white/[0.06]
focus:shadow-[0_0_25px_rgba(212,175,55,.15)]
`;
  return (
    <div
      className="
    booking-card
    rounded-[34px]
    border
    border-white/10
    bg-white/[0.03]
    backdrop-blur-3xl
    p-10
  "
    >
      <div
        className="
absolute
inset-0
pointer-events-none
rounded-[34px]
bg-gradient-to-b
from-white/[0.06]
via-transparent
to-transparent
"
      />
      <h3 className="text-3xl font-bold text-white">Reserve Your Experience</h3>

      <p className="mt-4 text-gray-400">
        Fill in the details below and we'll get back to you.
      </p>

      <form className="mt-10 space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="relative">
            <User className="absolute left-4 top-4 text-gray-500" size={18} />
            <input className={`${inputStyle} pl-12`} placeholder="Full Name" />
          </div>

          <div className="relative">
            <Phone className="absolute left-4 top-4 text-gray-500" size={18} />
            <input className={`${inputStyle} pl-12`} placeholder="Phone" />
          </div>

          <div className="relative">
            <Mail className="absolute left-4 top-4 text-gray-500" size={18} />
            <input className={`${inputStyle} pl-12`} placeholder="Email" />
          </div>

          <div className="relative">
            <Calendar
              className="absolute left-4 top-4 text-gray-500"
              size={18}
            />
            <input type="date" className={`${inputStyle} pl-12`} />
          </div>
        </div>

        <div className="relative">
          <Clock className="absolute left-4 top-4 text-gray-500" size={18} />
          <input type="time" className={`${inputStyle} pl-12`} />
        </div>

        <textarea
          rows={5}
          className={`${inputStyle} resize-none`}
          placeholder="Tell us about your booking..."
        />

        <button
          className="
group
flex
w-full
items-center
justify-center
gap-3
rounded-full
bg-gradient-to-r
from-[#D4AF37]
to-[#E8C75D]
py-4
font-semibold
text-black
transition-all
duration-500
hover:-translate-y-1
hover:shadow-[0_0_40px_rgba(212,175,55,.4)]
active:scale-[0.98]
"
        >
          Book Your Table
          <ArrowRight
            size={18}
            className="
transition-transform
duration-300
group-hover:translate-x-1
"
          />
        </button>
      </form>
    </div>
  );
}
