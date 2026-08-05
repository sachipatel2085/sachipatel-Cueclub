import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <div className="scroll-arrow absolute bottom-10 left-1/2 z-30 -translate-x-1/2">
      <div className="flex flex-col items-center gap-3 text-gray-400">
        <span className="text-xs tracking-[0.3em]">SCROLL</span>

        <ChevronDown className="animate-bounce" />
      </div>
    </div>
  );
}
