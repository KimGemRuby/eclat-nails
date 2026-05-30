'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Heart, Award, Star, Smile } from 'lucide-react';

const stats = [
  { n: '500+', label: 'Clientes fidèles', icon: Heart },
  { n: '5 ans', label: "D'expérience", icon: Award },
  { n: '4.9', label: 'Note Google', icon: Star },
  { n: '100%', label: 'Satisfaction', icon: Smile },
];

const values = [
  { title: 'Qualité Premium', text: 'Produits professionnels sélectionnés pour leur tenue et leur sécurité.' },
  { title: 'Chez vous', text: "Le confort de votre domicile, le luxe d'un salon professionnel." },
  { title: 'Hygiène irréprochable', text: 'Matériel désinfecté ou à usage unique à chaque prestation.' },
];

function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-60px' });

  return (
    <section id="about" className="py-28 md:py-36 px-6 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-champagne/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-blush/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Visual side */}
          <AnimatedSection>
            <div className="relative">
              {/* Main visual card */}
              <div className="about-visual w-full aspect-[4/5] relative overflow-hidden">
                {/* Real photo */}
                <Image
                  src="/sreynouv-portrait.jpg"
                  alt="Sreynouv Rann — Manucure professionnelle à domicile"
                  fill
                  className="object-cover object-top rounded-[32px]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Floating card — experience */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-5 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-champagne flex items-center justify-center">
                    <Award size={18} className="text-rose-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-warm-dark">Certifiée</div>
                    <div className="text-xs text-warm-mid">Formation professionnelle</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating card — clients */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -top-4 -right-4 glass-card rounded-2xl p-4 shadow-xl"
              >
                <div className="text-center">
                  <div className="font-display text-3xl font-light gradient-text">500+</div>
                  <div className="text-xs text-warm-mid mt-0.5">Clientes ravies</div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Text side */}
          <div className="space-y-8">
            <AnimatedSection delay={0.1}>
              <p className="eyebrow mb-4">À propos</p>
              <h2 className="font-display text-5xl md:text-6xl font-light leading-tight text-warm-dark">
                Bonjour, je suis
                <br />
                <span className="gradient-text italic">Sreynouv Rann</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-warm-mid text-lg leading-relaxed font-light">
                Passionnée par l'art des ongles depuis plus de 5 ans, je me déplace
                directement à votre domicile pour vous offrir une prestation digne des
                meilleurs salons parisiens — dans le confort et l'intimité de votre chez-vous.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="text-warm-mid text-base leading-relaxed font-light">
                Chaque rendez-vous est une expérience personnalisée : je prends le
                temps d'écouter vos envies, de conseiller les meilleures teintes et
                de créer des designs uniques qui vous ressemblent.
              </p>
            </AnimatedSection>

            {/* Values */}
            <div className="space-y-4 pt-2">
              {values.map(({ title, text }, i) => (
                <AnimatedSection key={title} delay={0.35 + i * 0.08}>
                  <div className="flex gap-4 group">
                    <div className="w-1 bg-gradient-to-b from-rose-gold to-rose-gold-light rounded-full flex-shrink-0" />
                    <div>
                      <div className="font-medium text-warm-dark text-sm mb-0.5">{title}</div>
                      <div className="text-warm-mid text-sm font-light">{text}</div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-16 border-t border-rose-gold/10"
        >
          {stats.map(({ n, label, icon: Icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="w-10 h-10 rounded-2xl bg-champagne/60 flex items-center justify-center mx-auto mb-3 group-hover:bg-champagne transition-colors">
                <Icon size={18} className="text-rose-gold" />
              </div>
              <div className="stat-number gradient-text">{n}</div>
              <div className="text-xs text-warm-mid tracking-wide mt-1">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
