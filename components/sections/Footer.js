"use client"
import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-16 border-t border-white/5 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h2 className="text-2xl font-bold text-white tracking-tighter">
              Rafif Phadillah .W
            </h2>
            <p className="text-blue-500 font-medium text-sm mt-2 uppercase tracking-[0.2em]">
              2D & 3D Artist | S.Tr.Kom
            </p>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-sm max-w-md leading-relaxed"
          >
            Berfokus pada pengembangan asset game 2D dan modeling 3D. 
            Terima kasih telah berkunjung ke portofolio saya.
          </motion.p>

          <div className="mt-10 pt-8 border-t border-white/5 w-full text-slate-600 text-[10px] tracking-[0.3em] uppercase">
            © {new Date().getFullYear()} Rafif Phadillah .W • Terkoneksi via Politeknik Negeri Media Kreatif
          </div>
          
        </div>
      </div>
    </footer>
  );
}