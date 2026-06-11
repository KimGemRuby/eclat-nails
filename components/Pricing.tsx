'use client';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Essentiel',
    tagline: "L'indispensable",
    price: '25',
    unit: '/ soin',
    color: '#8B6040',
    bg: 'bg-white',
    features: [
      'Manucure classique complète',
      'Lime & mise en forme',
      'Soin des cuticules',
      'Vernis couleur au choix',
      'Massage des mains (5 min)',
    ],
    cta: 'Réserver',
    popular: false,
  },
  {
    name: 'Prestige',
    tagline: 'Notre best-seller',
    price: '55',
    unit: '/ soin',
    color: 'white',
    bg: '',
    features: [
      "Tout l'Essentiel inclus",
      'Pose semi-permanente UV',
      'Nail art basique (2 doigts)',
      'Soin hydratant intensif',
      'Tenue garantie 3 semaines',
      'Retrait offert',
    ],
    cta: 'Réserver maintenant',
    popular: true,
  },
  {
    name: 'Couture',
    tagline: "L'expérience ultime",
    price: '85',
    unit: '/ soin',
    color: '#8B6040',
    bg: 'bg-white',
    features: [
      'Tout le Prestige inclus',
      'Extensions gel complètes',
      'Nail art élaboré (tous doigts)',
      'Gommage mains premium',
      'Masque & paraffine',
      'Pose vernis pieds offerte',
    ],
    cta: 'Réserver',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 md:py-36 px-6 bg-ivory relative overflow-hidden">
      <div className="absolute top-0 left-0 w-60 h-60 rounded-full bg-blush/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="eyebrow mb-4">Tarifs</p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-warm-dark leading-tight">
            Des soins pour
            <br />
            <span className="gradient-text italic">tous les budgets</span>
          </h2>
          <p className="text-warm-mid mt-5 max-w-md mx-auto font-light">
            Déplacement inclus dans un rayon de 15 km. Supplément au-delà.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-center">
          {plans.map(({ name, tagline, price, unit, color, bg, features, cta, popular }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.12 }}
              className={`relative rounded-3xl overflow-hidden ${popular ? 'md:-my-4 md:shadow-2xl' : 'shadow-md'}`}
            >
              {popular && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-rose-gold to-transparent" />
              )}

              <div
                className={`h-full p-8 ${bg} ${popular ? 'text-white' : ''}`}
                style={
                  popular
                    ? { background: 'linear-gradient(145deg, #C4956A 0%, #9F7248 60%, #7B5530 100%)' }
                    : {}
                }
              >
                {/* Badge */}
                {popular && (
                  <div className="flex items-center gap-1.5 mb-4">
                    <Star size={12} fill="white" className="text-white" />
                    <span className="text-xs font-medium tracking-wide opacity-90">Plus populaire</span>
                  </div>
                )}

                {/* Name & tagline */}
                <div className="mb-6">
                  <h3
                    className="font-display text-2xl font-semibold mb-1"
                    style={{ color: popular ? 'white' : color }}
                  >
                    {name}
                  </h3>
                  <p className={`text-sm font-light ${popular ? 'text-white/70' : 'text-warm-mid'}`}>
                    {tagline}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <span className="price-big" style={{ color: popular ? 'white' : undefined }}>
                                        {!popular && (
                      <span className="font-display text-5xl font-light gradient-text">{price} €</span>
                    )}
                    {popular && (
                      <span className="font-display text-5xl font-light text-white">{price} €</span>
                    )}
                  </span>
                  <span className={`text-sm ml-1 font-light ${popular ? 'text-white/70' : 'text-warm-mid'}`}>
                    {unit}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {features.map(f => (
                    <li key={f} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          popular ? 'bg-white/20' : 'bg-champagne'
                        }`}
                      >
                        <Check size={11} className={popular ? 'text-white' : 'text-rose-gold'} strokeWidth={2.5} />
                      </div>
                      <span className={`text-sm font-light leading-snug ${popular ? 'text-white/90' : 'text-warm-mid'}`}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#booking"
                  className={`block text-center py-3.5 rounded-2xl text-sm font-medium tracking-wide transition-all duration-300 ${
                    popular
                      ? 'bg-white text-rose-gold-dark hover:bg-white/90 shadow-md'
                      : 'btn-primary'
                  }`}
                >
                  {cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-warm-mid mt-10"
        >
          Tous les prix incluent les produits et le matériel. Suppléments possibles pour nail art complexe ou distances &gt; 15 km.
        </motion.p>
      </div>
    </section>
  );
}
