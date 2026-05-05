"use client"
import { use } from 'react';
import { motion } from 'framer-motion';
import { myProjects } from '../../data/projects';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectDetail({ params }) {
  // 1. Ambil slug tanpa async/await agar tidak error di Client Component
  const { slug } = use(params);
  
  const projectIndex = myProjects.findIndex((p) => p.slug === slug);
  const project = myProjects[projectIndex];

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
        <Link href="/" className="mt-6 px-6 py-2 bg-blue-600 rounded-full hover:bg-blue-500 transition-all">
          Back to Home
        </Link>
      </div>
    );
  }

  const nextProject = myProjects[(projectIndex + 1) % myProjects.length];
  const shareText = encodeURIComponent(`Lihat aset 2D art ${project.title} karya Rafif phadillah .W.!`);
  const baseAppUrl = "https://rafif-phadillah-portfolio.vercel.app";
  const shareUrl = encodeURIComponent(`${baseAppUrl}/blender/${project.slug}`);

  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-[#0f172a] text-white"
    >
      {/* 1. NAVIGASI */}
      <nav className="p-6 max-w-6xl mx-auto">
        <Link href="/" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
          ← Back to Portfolio
        </Link>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* 2. HEADER */}
        <span className="text-blue-500 font-bold uppercase tracking-widest text-xs">
          {project.tag}
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-10 tracking-tighter text-white">
          {project.title}
        </h1>
        
        {/* PREVIEW UTAMA */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="aspect-video relative rounded-3xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl"
        >
          {project.videoID ? (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${project.videoID}`}
              title="Project Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <Image 
              src={project.image || "/images/placeholder.jpg"} 
              alt={project.title}
              fill
              className="object-cover"
              unoptimized
            />
          )}
        </motion.div>

        {/* 3. INFO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">About the Project</h2>
            <div className="text-slate-300 leading-relaxed text-lg">
              <p className="border-l-4 border-blue-500/30 pl-6 py-2 bg-white/5 rounded-r-xl">
                {project.desc}
              </p>
            </div>
          </div>
          
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 h-fit space-y-8">
            <div>
              <h3 className="text-sm font-bold text-slate-500 uppercase mb-2 tracking-widest">Role</h3>
              <p className="text-xl font-semibold text-white">Game Artist</p>
            </div>
            
            <div>
              <h3 className="text-sm font-bold text-slate-500 uppercase mb-3 tracking-widest">Software Tools</h3>
              <div className="flex flex-wrap gap-2">
                {project.tools ? (
                  project.tools.map((tool, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-slate-300">
                      {tool}
                    </span>
                  ))
                ) : (
                  <span className="px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-lg text-sm text-blue-400 font-bold">
                    {project.tag}
                  </span>
                )}
              </div>
            </div>

            {project.downloadUrl && (
              <div className="pt-6 border-t border-white/10">
                <a 
                  href={project.downloadUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all active:scale-95 shadow-lg shadow-blue-500/20"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Download Game
                </a>
              </div>
            )}
          </div>
        </div>

        {/* 4. ASSET GALLERY */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-24 pt-16 border-t border-white/5">
            <h2 className="text-3xl font-bold mb-10 text-white">Asset Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.gallery.map((img, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative aspect-video bg-slate-800/20 rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-500 shadow-xl"
                >
                  <Image
                    src={img}
                    alt={`${project.title} gallery ${index}`}
                    fill
                    unoptimized
                    className="object-contain p-6 group-hover:scale-110 transition-transform duration-700"
                    style={{ imageRendering: 'pixelated' }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* 5. NEXT PROJECT NAVIGATION */}
        <div className="mt-32 pt-16 border-t border-white/5">
          <Link href={`/blender/${nextProject.slug}`} className="group block text-center">
            <span className="text-slate-500 text-sm uppercase tracking-[0.3em] font-bold">Up Next</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 text-white group-hover:text-blue-400 transition-all duration-300">
              {nextProject.title} <span className="inline-block transition-transform group-hover:translate-x-4">→</span>
            </h2>
          </Link>
        </div>

        {/* 6. SOCIAL MEDIA */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-slate-500 text-sm italic">Bagikan karya ini:</div>
          <div className="flex gap-4">
            <a 
              href={`https://x.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
              target="_blank" rel="noopener noreferrer"
              className="px-6 py-2 bg-white/5 hover:bg-[#1DA1F2] hover:text-white rounded-xl transition-all text-sm font-bold border border-white/10"
            >
              Twitter / X
            </a>
            <a 
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
              target="_blank" rel="noopener noreferrer"
              className="px-6 py-2 bg-white/5 hover:bg-[#0077b5] hover:text-white rounded-xl transition-all text-sm font-bold border border-white/10"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      
      <footer className="py-12 text-center text-slate-600 text-sm">
        © {new Date().getFullYear()} Rafif Phadillah .W - Game Artist Portfolio.
      </footer>
    </motion.main>
  );
}