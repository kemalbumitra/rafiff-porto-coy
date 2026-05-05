export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6 tracking-tighter">Ready For Collaboration?</h2>
        <p className="text-slate-500 text-lg mb-10 italic">
          "Where Art Meets Gameplay, Bringing Worlds to Life."
        </p>
        <div className="inline-flex flex-col gap-4">
          <a href="mailto:rafifw05@gmail.com" className="text-3xl font-bold hover:text-blue-600 underline decoration-blue-200 underline-offset-8">
            email : rafifw05@gmail.com
          </a>
          <p className="text-slate-400 mt-4">Jakarta, Indonesia</p>
        </div>
      </div>
    </section>
  );
}