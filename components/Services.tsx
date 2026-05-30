'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Gem, Star, Leaf, Heart, Flower2 } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Manucure Classique',
    desc: 'Lime, forme, cuticules, soin hydratant et vernis couleur. Le soin essentiel pour des ongles parfaits.',
    price: 'À partir de 25 €',
    gradient: 'from-rose-100 to-rose-50',
    accent: '#E8A0A0',
    span: 'col-span-1 md:col-span-2 row-span-1',
    big: true,
  },
  {
    icon: Gem,
    title: 'Semi-Permanent',
    desc: 'Tenue 3 semaines, séchage UV, finition miroir.',
    price: 'À partir de 40 €',
    gradient: 'from-amber-50 to-orange-50',
    accent: '#C4956A',
    span: 'col-span-1 row-span-1',
    big: false,
  },
  {
    icon: Star,
    title: 'Nail Art',
    desc: 'Créations sur mesure, tendances et originales.',
    price: 'À partir de 15 €',
    gradient: 'from-purple-50 to-pink-50',
    accent: '#B07ED0',
    span: 'col-span-1 row-span-1',
    big: false,
  },
  {
    icon: Gem,
    title: 'Extensions Gel',
    desc: 'Capsules ou papier, allongement naturel ou spectaculaire selon vos envies.',
    price: 'À partir de 65 €',
    gradient: 'from-champagne to-rose-50',
    accent: '#C4956A',
    span: 'col-span-1 row-span-1',
    big: false,
  },
  {
    icon: Leaf,
    title: 'Pédicure Complète',
    desc: 'Soin complet des pieds, pose de vernis incluse.',
    price: 'À partir de 35 €',
    gradient: 'from-green-50 to-emerald-50',
    accent: '#5A9E7A',
    span: 'col-span-1 row-span-1',
    big: false,
  },
  {
    icon: Flower2,
    title: 'Soin Beauté Mains',
    desc: 'Gommage, masque, massage et soin hydratant intensif.',
    price: 'À partir de 20 €',
    gradient: 'from-blush to-rose-50',
    accent: '#E8A0A0',
    span: 'col-span-1 row-span-1',
    big: false,
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="py-28 md:py-36 px-6 bg-ivory relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-rose-gold/30" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="eyebrow mb-4">Nos Prestations</p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-warm-dark leading-tight">
            Tous les soins,
            <br />
            <span className="gradient-text italic">chez vous</span>
          </h2>
          <p className="text-warm-mid mt-5 max-w-lg mx-auto font-light text-lg">
            Du soin classique au nail art élaboré, chaque prestation est réalisée avec les meilleurs produits professionnels.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {services.map(({ icon: Icon, title, desc, price, gradient, accent, span, big }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`${span} service-card`}
            >
              <div className={`h-full glass-card rounded-3xl p-8 bg-gradient-to-br ${gradient} relative overflow-hidden`}>
                {/* Decorative glow */}
                <div
                  className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-2xl opacity-30"
                  style={{ background: accent }}
                />

                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: `${accent}20` }}
                  >
                    <Icon size={22} style={{ color: accent }} />
                  </div>

                  {/* Content */}
                  <h3 className={`font-display font-semibold text-warm-dark mb-2 ${big ? 'text-3xl' : 'text-xl'}`}>
                    {title}
                  </h3>
                  <p className="text-warm-mid font-light leading-relaxed flex-1 text-sm md:text-base">
                    {desc}
                  </p>

                  {/* Price */}
                  <div className="mt-5 pt-4 border-t border-black/5 flex items-center justify-between">
                    <span className="font-medium text-sm" style={{ color: accent }}>{price}</span>
                    <a
                      href="#booking"
                      className="text-xs font-medium tracking-wide hover:opacity-70 transition-opacity flex items-center gap-1"
                      style={{ color: accent }}
                    >
                      Réserver →
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA bottom */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-warm-mid text-sm mb-4">Des questions sur nos prestations ?</p>
          <a href="#booking" className="btn-secondary">
            Nous contacter
          </a>
        </motion.div>
      </div>
    </section>
  );
}
