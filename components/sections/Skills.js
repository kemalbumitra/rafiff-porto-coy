const skills = [
  "3D Texturing", "3D Modeling", "Adobe Illustrator", "Blender",
  "Game Development"
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-transparent text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Skills & Expertise</h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, i) => (
            <div key={i} className="px-8 py-4 border border-white/20 rounded-2xl hover:bg-white hover:text-black transition-all font-medium text-lg">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}