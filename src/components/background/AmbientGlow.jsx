export default function AmbientGlow() {
  return (
    <>
      <div
        className="absolute top-[-150px] left-[-150px] h-[350px] w-[350px] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,184,0,.20), transparent 70%)",
        }}
      />

      <div
        className="absolute bottom-[-150px] right-[-150px] h-[350px] w-[350px] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,184,0,.15), transparent 70%)",
        }}
      />

      <div
        className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,.08), transparent 70%)",
        }}
      />
    </>
  );
}