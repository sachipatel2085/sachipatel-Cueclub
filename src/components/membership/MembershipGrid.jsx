import membershipData from "./membershipData";
import MembershipCard from "./MembershipCard";

export default function MembershipGrid() {
  return (
    <div
      className="
        mx-auto
        mt-28
        grid
        max-w-7xl
        gap-10

        lg:grid-cols-3
      "
    >
      {membershipData.map((plan, index) => (
        <MembershipCard
          key={plan.id}
          {...plan}
          delay={index * 0.15}
          className={
            plan.name === "Gold"
              ? "membership-gold"
              : plan.name === "Bronze"
                ? "membership-bronze"
                : "membership-elite"
          }
        />
      ))}
    </div>
  );
}
