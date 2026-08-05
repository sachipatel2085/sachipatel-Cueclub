import galleryData from "./galleryData";
import GalleryItem from "./GalleryItem";

export default function GalleryGrid({ setSelectedImage }) {
  return (
    <div
      className="
        mt-24
        grid
        auto-rows-[180px]
        gap-8
        md:grid-cols-2
        xl:grid-cols-3
      "
    >
      {galleryData.map((item) => (
        <GalleryItem
          key={item.id}
          {...item}
          setSelectedImage={setSelectedImage}
        />
      ))}
    </div>
  );
}
