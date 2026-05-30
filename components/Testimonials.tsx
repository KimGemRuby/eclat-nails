'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Sophie M.',
    role: 'Cliente depuis 2 ans',
    text: "Un service absolument impeccable ! Mes ongles n’ont jamais été aussi beaux. La qualité du travail est vraiment professionnelle et le confort de recevoir chez soi est inestimable.",
    rating: 5,
    color: '#E8C4C4',
  },
  {
    name: 'Amélie R.',
    role: 'Cliente fidèle',
    text: 'Je recommande à toutes mes amies ! Le nail art proposé est vraiment créatif et unique. Ma pose semi-permanente tient parfaitement depuis 3 semaines.',
    rating: 5,
    color: '#C4956A',
  },
  {
    name: 'Laura B.',
    role: 'Nouvelle cliente',
    text: "J'étais sceptique au début mais j'ai été totalement conquise. La ponctualité, le soin apporté, les produits utilisés… tout est parfait. Je ne changerai plus !",
    rating: 5,
    color: '#B39DDB',
  },
  {
    name: 'Marie-Claire D.',
    role: 'Cliente depuis 3 ans',
    text: 'Des extensions gel magnifiques qui tiennent super bien. Je reçois des compliments partout ! Service très professionnel et tarifs vraiment raisonnables.',
    rating: 5,
    color: '#80CBC4',
  },
  {
    name: 'Isabelle K.',
    role: 'Cliente régulière',
    text: 'Enfin une manucure à domicile de qualité salon. Chaque rendez-vous est un vrai moment de détente. Les produits utilisés sont top et respectueux des ongles.',
    rating: 5,
    color: '#FFCC80',
  },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-amber-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section id="testimonials" className="py-28 md:py-36 bg-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-champagne/25 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="eyebrow mb-4">Témoignages</p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-warm-dark leading-tight">
            Ce qu'elles
            <br />
            <span className="gradient-text italic">en disent</span>
          </h2>
        </motion.div>

        {/* Rating summary */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex items-center justify-center gap-6 mb-12"
        >
          <div className="text-center">
            <div className="font-display text-5xl font-light gradient-text">4.9</div>
            <Stars n={5} />
            <div className="text-xs text-warm-mid mt-1">Note Google</div>
          </div>
          <div className="w-px h-14 bg-rose-gold/20" />
          <div className="text-center">
            <div className="font-display text-5xl font-light gradient-text">127</div>
            <div className="text-xs text-warm-mid mt-1">Avis vérifiés</div>
          </div>
          <div className="w-px h-14 bg-rose-gold/20" />
          <div className="text-center">
            <div className="font-display text-5xl font-light gradient-text">98%</div>
            <div className="text-xs text-warm-mid mt-1">Clientes satisfaites</div>
          </div>
        </motion.div>
      </div>

      {/* Scrollable reviews — full width */}
      <div ref={ref} className="relative">
        <div
          ref={trackRef}
          className="flex gap-5 px-6 md:px-16 overflow-x-auto scrollbar-none pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviews.map(({ name, role, text, rating, color }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, x: 32 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="testimonial-card p-7 rounded-3xl flex-shrink-0"
              style={{ minWidth: '340px', maxWidth: '400px' }}
            >
              <Quote size={20} className="text-rose-gold/40 mb-4" />
              <p className="text-warm-dark text-sm font-light leading-relaxed mb-6">
                &ldquo;{text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-display font-semibold text-white text-sm"
                  style={{ background: `linear-gradient(135deg, ${color}, ${color}99)` }}
                >
                  {name[0]}
                </div>
                <div>
                  <div className="font-medium text-sm text-warm-dark">{name}</div>
                  <div className="text-xs text-warm-mid">{role}</div>
                </div>
                <div className="ml-auto">
                  <Stars n={rating} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
