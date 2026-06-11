'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const services = [
  'Manucure classique',
  'Semi-permanent',
  'Nail Art',
  'Extensions gel',
  'Pédicure',
  'Soin beauté mains',
  'Autre',
];

const infos = [
  {
    icon: Phone,
    label: 'Téléphone',
    value: '+33 6 18 79 88 93',
    href: 'tel:+33618798893',
    color: '#C4956A',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Message direct',
    href: 'https://wa.me/33618798893',
    color: '#25D366',
  },
  {
    icon: MapPin,
    label: "Zone d'intervention",
    value: 'Paris & banlieue proche (15 km)',
    href: null,
    color: '#C4956A',
  },
  {
    icon: Clock,
    label: 'Disponibilités',
    value: 'Lun–Sam · 9h – 20h',
    href: null,
    color: '#C4956A',
  },
];

export default function Booking() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', date: '', service: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Réservation — ${form.service || 'Prestation'} — ${form.name}`);
    const body = encodeURIComponent(
      `Prénom : ${form.name}\nTéléphone : ${form.phone}\nDate souhaitée : ${form.date}\nPrestation : ${form.service}\nMessage : ${form.message}`
    );
    window.location.href = `mailto:solykim@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="booking" className="py-28 md:py-36 px-6 bg-ivory relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-rose-gold/30" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-blush/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="eyebrow mb-4">Réservation</p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-warm-dark leading-tight">
            Prenez rendez-vous,
            <br />
            <span className="gradient-text italic">c'est simple</span>
          </h2>
          <p className="text-warm-mid mt-5 max-w-md mx-auto font-light text-lg">
            Répondez à votre message sous 2h en journée.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {sent ? (
              <div className="glass-card rounded-3xl p-10 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  <CheckCircle size={56} className="text-rose-gold mx-auto mb-5" />
                  <h3 className="font-display text-3xl font-light text-warm-dark mb-2">
                    Message envoyé !
                  </h3>
                  <p className="text-warm-mid font-light">
                    Je vous réponds dans les 2 heures. À très bientôt ✨
                  </p>
                </motion.div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-warm-mid mb-1.5 block font-medium tracking-wide">
                      Votre prénom
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Sophie"
                      className="form-input"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-xs text-warm-mid mb-1.5 block font-medium tracking-wide">
                      Téléphone
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+33 6 00 00 00 00"
                      className="form-input"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-warm-mid mb-1.5 block font-medium tracking-wide">
                      Date souhaitée
                    </label>
                    <input
                      type="date"
                      className="form-input"
                      value={form.date}
                      onChange={e => setForm({ ...form, date: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-xs text-warm-mid mb-1.5 block font-medium tracking-wide">
                      Prestation
                    </label>
                    <select
                      required
                      className="form-input"
                      value={form.service}
                      onChange={e => setForm({ ...form, service: e.target.value })}
                    >
                      <option value="">Choisir…</option>
                      {services.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-warm-mid mb-1.5 block font-medium tracking-wide">
                    Votre message (optionnel)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Décrivez vos envies, votre adresse, vos contraintes horaires…"
                    className="form-input resize-none"
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn-primary w-full group">
                  Envoyer ma demande
                  <Send size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-xs text-warm-mid text-center font-light">
                  Vos données sont confidentielles et ne sont jamais partagées.
                </p>
              </form>
            )}
          </motion.div>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            {infos.map(({ icon: Icon, label, value, href, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {href ? (
                  <a href={href} className="glass-card rounded-2xl p-5 flex items-center gap-4 block hover:scale-[1.02] transition-transform">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: `${color}18` }}>
                      <Icon size={20} style={{ color }} />
                    </div>
                    <div>
                      <div className="text-xs text-warm-mid font-medium tracking-wide mb-0.5">{label}</div>
                      <div className="text-warm-dark font-medium text-sm">{value}</div>
                    </div>
                  </a>
                ) : (
                  <div className="glass-card rounded-2xl p-5 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: `${color}18` }}>
                      <Icon size={20} style={{ color }} />
                    </div>
                    <div>
                      <div className="text-xs text-warm-mid font-medium tracking-wide mb-0.5">{label}</div>
                      <div className="text-warm-dark font-medium text-sm">{value}</div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/33618798893"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-[#25D366] text-white font-medium text-sm tracking-wide hover:bg-[#1ebe5d] transition-colors shadow-md shadow-green-200"
            >
              <MessageCircle size={18} />
              Réserver via WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
