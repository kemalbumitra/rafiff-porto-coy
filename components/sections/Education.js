import { GraduationCap, Monitor, Rocket } from 'lucide-react';

export default function Education() {
  const educationData = [
    {
      title: "Bachelor of Applied Science in Game Technology",
      icon: <GraduationCap className="w-6 h-6 text-white" />,
      desc: "A graduate of Politeknik Negeri Media Kreatif with a Bachelor of Applied Computer Science (S.Tr.Kom) in Game Development, achieving a GPA of 3.56 and successfully completing a final thesis in Game Technology.",
      status: "Unemployed",
      statusColor: "bg-emerald-500",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      title: "Self-Taught Developer",
      icon: <Monitor className="w-6 h-6 text-white" />,
      desc: "Skilled in creating optimized 3D game assets using Blender, with additional experience in 2D asset creation using Adobe Illustrator, and implementation within Unity. Demonstrates a solid understanding of the game development pipeline, including asset creation, optimization, and integration into game engines.",
      extra: "Learning Method: Online & Self-Study",
      status: "Work in progress",
      statusColor: "bg-indigo-500",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Future Goals",
      icon: <Rocket className="w-6 h-6 text-white" />,
      desc: "Combines technical proficiency with strong visual sensibility to produce high-quality, performance-efficient 3D assets that enhance gameplay and visual storytelling..",
      status: "Work in progress",
      statusColor: "bg-purple-500",
      gradient: "from-indigo-500 to-cyan-600"
    }
  ];

  return (
    <section id="education" className="py-24 max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Education Status
        </h2>
        <p className="text-slate-400">You can read this to know more about me.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {educationData.map((item, index) => (
          <div 
            key={index}
            className="group relative bg-[#1e293b]/30 border border-white/5 p-8 rounded-[2rem] hover:bg-[#1e293b]/50 transition-all duration-500"
          >
            {/* Ikon dengan Background Gradient */}
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-8 shadow-lg shadow-indigo-500/20`}>
              {item.icon}
            </div>

            <h3 className="text-xl font-bold text-white mb-4 leading-tight">
              {item.title}
            </h3>
            
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {item.desc}
            </p>

            {item.extra && (
              <p className="text-slate-300 text-sm font-medium mb-6">
                • <span className="ml-2">{item.extra}</span>
              </p>
            )}

            {/* Status di bagian bawah */}
            <div className="flex items-center gap-3 mt-auto">
              <div className={`w-2 h-2 rounded-full ${item.statusColor} animate-pulse`}></div>
              <span className="text-xs font-bold text-slate-200 uppercase tracking-widest">
                Status: <span className="text-white">{item.status}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}