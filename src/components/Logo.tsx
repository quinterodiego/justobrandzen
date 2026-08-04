import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-start ${className}`}>
      <Image src="/logo.png" alt="" width={60} height={60} className="h-15 w-15" priority />
      <span className="mt-1 font-serif text-lg tracking-[0.2em] text-white">
        JUSTO BRANDZEN
      </span>
    </div>
  );
}
