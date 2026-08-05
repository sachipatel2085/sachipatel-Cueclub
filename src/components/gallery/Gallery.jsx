import { useState } from "react";
import GalleryHeading from "./GalleryHeading";
import GalleryHero from "./GalleryHero";
import GalleryGrid from "./GalleryGrid";
import GalleryLightbox from "./GalleryLightbox";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#050505] py-40"
    >
      {/* Background */}

      <div className="absolute inset-0">
        <div className="gallery-green-glow absolute left-[-250px] top-20 h-[700px] w-[700px] rounded-full bg-[#0D7C3E]/10 blur-[220px]" />

        <div className="gallery-gold-glow absolute right-[-250px] bottom-20 h-[700px] w-[700px] rounded-full bg-[#D4AF37]/10 blur-[220px]" />
      </div>

      <div className="relative z-20 mx-auto max-w-[1500px] px-8">
        <GalleryHeading />

        <GalleryHero />

        <GalleryGrid
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      </div>

      <GalleryLightbox
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
    </section>
  );
}
