import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import loadingTimeline from "../../animations/loadingTimeline";

export default function LoadingScreen() {
  const loaderRef = useRef();
  const [progress, setProgress] = useState(0);

  useGSAP(() => {
    loadingTimeline(loaderRef, setProgress);
  }, []);

  return (
    <div
      ref={loaderRef}
      className="loader fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505]"
    >
      <div className="text-center">
        <h1 className="loader-logo text-5xl font-black tracking-[0.4em] text-white">
          CUE CLUB
        </h1>

        <p className="mt-4 text-sm tracking-[0.6em] text-gray-400">COVENTRY</p>

        <div className="loader-line mx-auto mt-10 h-[2px] w-0 rounded-full bg-gradient-to-r from-[#D4AF37] via-white to-[#0D7C3E]" />

        <p className="loader-percent mt-6 text-lg font-semibold tracking-[0.3em] text-gray-300">
          {progress}%
        </p>
      </div>
    </div>
  );
}
