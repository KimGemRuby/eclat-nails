'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const nailColors = [
  { color: '#E8C4C4', label: 'Blush' },
  { color: '#C4956A', label: 'Caramel' },
  { color: '#8B3A5A', label: 'Bordeaux' },
  { color: '#D4B896', label: 'Nude' },
  { color: '#F0D5D5', label: 'Rose' },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section id="hero" ref={ref} className="relative h-[100svh] overflow-hidden flex items-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Floating orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      {/* Floating nail polish swatches (right side, decorative) */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-3">
        {nailColors.map(({ color, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 + i * 0.12, duration: 0.6 }}
            className="flex items-center gap-3 group"
          >
            <span className="text-xs text-warm-mid opacity-0 group-hover:opacity-100 transition-opacity font-light tracking-widest">
              {label}
            </span>
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
              className="nail-bottle"
              style={{ background: `linear-gradient(145deg, ${color}, ${color}cc)` }}
            />
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center"
      >
        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mb-4"
        >
          <span className="font-display text-2xl md:text-3xl font-semibold gradient-text tracking-tight">
            Sreynouv Rann
          </span>
        </motion.div>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="flex items-center justify-center gap-2 mb-7"
        >
          <Sparkles size={12} className="text-rose-gold" />
          <span className="eyebrow">Manucure professionnelle à domicile</span>
          <Sparkles size={12} className="text-rose-gold" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display leading-[0.92] tracking-tight mb-8"
          style={{ fontSize: 'clamp(56px, 10vw, 120px)' }}
        >
          <span className="block text-warm-dark">L&rsquo;art</span>
          <span className="block gradient-text italic font-light">de vos mains</span>
          <span className="block text-warm-dark">sublimé</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-warm-mid text-lg md:text-xl max-w-xl mx-auto mb-12 font-light leading-relaxed"
        >
          Une expérience beauté unique, chez vous. Par une professionnelle
          passionnée, pour des ongles parfaits au quotidien.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#booking" className="btn-primary group">
            Réserver maintenant
            <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#services" className="btn-secondary">
            Découvrir les soins
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex items-center justify-center gap-8 mt-14"
        >
          {[
            { n: '500+', label: 'Clientes satisfaites' },
            { n: '5 ans', label: "D'expérience" },
            { n: '4.9★', label: 'Note moyenne' },
          ].map(({ n, label }) => (
            <div key={label} className="text-center">
              <div className="font-display text-2xl font-semibold gradient-text">{n}</div>
              <div className="text-xs text-warm-mid tracking-wide mt-0.5">{label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="scroll-indicator" />
      </motion.div>
    </section>
  );
}
