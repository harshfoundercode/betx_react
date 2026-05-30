export default function AnimatedGrid() {
  return (
    <>
      {/* Background */}
      <div className="absolute inset-0 bg-black" />

      {/* Grid */}
     <div
  className="
    absolute inset-0
    bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)]
    bg-[size:48px_48px]
  "
/>

      {/* Purple Glow */}
      <div
        className="
          absolute
          bottom-[-120px]
          left-1/2
          -translate-x-1/2
          w-[500px]
          h-[500px]
          rounded-full
          blur-[120px]
          bg-violet-600/15
        "
      />

      {/* Blue Glow */}
      <div
        className="
          absolute
          right-[-100px]
          top-1/2
          -translate-y-1/2
          w-[300px]
          h-[300px]
          rounded-full
          blur-[120px]
          bg-cyan-500/10
        "
      />
    </>
  );
}