import ExperienceCard from "./ExperienceCard";
import experienceData from "./experienceData";

export default function ExperienceGrid() {
  return (
    <div
      className="
      experience-grid
        mx-auto
        mt-28
        grid
        max-w-7xl
        gap-8

        md:grid-cols-2
      "
    >
      {experienceData.map((item) => (
        <ExperienceCard
          key={item.id}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}
