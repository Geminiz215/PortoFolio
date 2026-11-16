const tech = [
  { name: "Golang", color: "#00ADD8" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "Node.js", color: "#5FA04E" },
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#FFFFFF" },
  { name: "GoFiber", color: "#00ADD8" },
  { name: "Gin", color: "#00A29C" },
  { name: "ASP.NET", color: "#7E4DD2" },
  { name: "SQL Server", color: "#CC2927" },
  { name: "MySQL", color: "#00758F" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Redis", color: "#FF4438" },
  { name: "Docker", color: "#2496ED" },
  { name: "Git", color: "#F05032" },
];

export default function TechMarquee() {
  return (
    <section
      aria-label="Technologies I work with"
      className="relative border-y border-slate-800/70 bg-slate-900/30 py-6 overflow-hidden"
    >
      <div className="absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#070B12] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#070B12] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
            {tech.map((t) => (
              <div key={t.name} className="flex items-center gap-2.5 px-7">
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: t.color, boxShadow: `0 0 10px ${t.color}55` }}
                />
                <span className="text-sm font-mono text-slate-300 whitespace-nowrap">{t.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
