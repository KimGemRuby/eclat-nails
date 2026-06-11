'use client';
import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import Image from 'next/image';

type Category = 'Tous' | 'Classique' | 'Nail Art' | 'Semi-permanent' | 'Extensions';

type GalleryItem = { gradient?: string; image?: string; label: string; cat: Category; aspect: string };

const galleryItems: GalleryItem[] = [
  { image: '/eclat-nails/sreynouv-portrait.jpg', label: 'Sreynouv Rann', cat: 'Classique', aspect: '3/4' },
  { image: '/eclat-nails/sreynouv-pro.jpg', label: 'Professionnelle certifiée', cat: 'Classique', aspect: '4/5' },
  { gradient: 'linear-gradient(145deg,#FADADD,#F4A7B9)', label: 'French Romantique', cat: 'Classique', aspect: '3/4' },
  { gradient: 'linear-gradient(145deg,#8B2252,#C2185B)', label: 'Bordeaux Velvet', cat: 'Semi-permanent', aspect: '4/5' },
  { gradient: 'linear-gradient(145deg,#E8D5C4,#C4956A)', label: 'Nude Caramel', cat: 'Classique', aspect: '3/4' },
  { gradient: 'linear-gradient(145deg,#B39DDB,#7B1FA2)', label: 'Lilas Art Deco', cat: 'Nail Art', aspect: '5/6' },
  { gradient: 'linear-gradient(145deg,#F8F8F8,#E0E0E0)', label: 'Blanc Glacier', cat: 'Extensions', aspect: '3/4' },
  { gradient: 'linear-gradient(145deg,#FFCCBC,#FF7043)', label: 'Corail Sunset', cat: 'Nail Art', aspect: '4/5' },
  { gradient: 'linear-gradient(145deg,#C8E6C9,#388E3C)', label: 'Sauge Botanique', cat: 'Semi-permanent', aspect: '3/4' },
  { gradient: 'linear-gradient(145deg,#FFF9C4,#F9A825)', label: 'Or Champagne', cat: 'Nail Art', aspect: '5/6' },
  { gradient: 'linear-gradient(145deg,#F8BBD9,#E91E63)', label: 'Rose Poudré', cat: 'Classique', aspect: '3/4' },
  { gradient: 'linear-gradient(145deg,#B0BEC5,#37474F)', label: 'Gris Perle', cat: 'Extensions', aspect: '4/5' },
  { gradient: 'linear-gradient(145deg,#FFCDD2,#D32F2F)', label: 'Rouge Passion', cat: 'Semi-permanent', aspect: '3/4' },
  { gradient: 'linear-gradient(145deg,#E1F5FE,#0288D1)', label: 'Bleu Azur', cat: 'Nail Art', aspect: '5/6' },
];

const categories: Category[] = ['Tous', 'Classique', 'Nail Art', 'Semi-permanent', 'Extensions'];

export default function Gallery() {
  const [active, setActive] = useState<Category>('Tous');
  const [selected, setSelected] = useState<(typeof galleryItems)[0] | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const filtered = active === 'Tous' ? galleryItems : galleryItems.filter(i => i.cat === active);

  return (
    <section id="gallery" className="py-28 md:py-36 px-6 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-champagne/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="eyebrow mb-4">Galerie</p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-warm-dark leading-tight">
            Chaque ongle,
            <br />
            <span className="gradient-text italic">une œuvre</span>
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex gap-2 justify-center flex-wrap mb-12"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? 'bg-rose-gold text-white shadow-md shadow-rose-gold/30'
                  : 'bg-champagne/60 text-warm-mid hover:bg-champagne'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry grid */}
        <div ref={ref} className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.label}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="gallery-item break-inside-avoid mb-4 relative group"
                style={{ aspectRatio: item.aspect }}
                onClick={() => setSelected(item)}
              >
                {item.image ? (
                  <div className="relative w-full h-full rounded-2xl overflow-hidden" style={{ minHeight: '160px' }}>
                    <Image
                      src={item.image}
                      alt={item.label}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                ) : (
                  <div
                    className="w-full h-full rounded-2xl"
                    style={{ background: item.gradient, minHeight: '160px' }}
                  />
                )}
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-2xl flex items-center justify-center">
                  <ZoomIn
                    size={24}
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/40 to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs font-medium">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-warm-mid text-sm mb-4">
            Vous ne trouvez pas ce que vous cherchez ?
          </p>
          <a href="#booking" className="btn-primary">
            Demandez un design sur mesure
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              className="relative max-w-sm w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              {selected.image ? (
                <Image
                  src={selected.image}
                  alt={selected.label}
                  fill
                  className="object-cover object-top"
                  sizes="400px"
                />
              ) : (
                <div className="w-full h-full" style={{ background: selected.gradient }} />
              )}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
                <p className="text-white font-display text-xl italic">{selected.label}</p>
                <p className="text-white/70 text-xs mt-1">{selected.cat}</p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-black/30 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-colors"
              >
                <X size={16} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
