import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import profile from '../../assets/profile.jpeg';

export default function CardMarquee() {
  const cards = useMemo(() => [
    {
      title: 'Dubai — Life‑Changing Opportunity!',
      content: 'Thanks to BOSSMI, I landed a job opportunity in Dubai that completely transformed my life. They managed my visa, flights, accommodation, and even assisted with cultural orientation. Their 24/7 support made a world of difference!'
    },
    {
      title: 'Work Abroad — Seamless Process!',
      content: 'I never imagined relocating abroad could be so easy. BOSSMI handled all interviews, legal paperwork, and even helped me settle in. Their transparent communication and expert guidance were exceptional from start to finish.'
    },
    {
      title: 'Education in Japan!',
      content: 'With BOSSMI’s help, I secured a student visa and admission to a top university in Tokyo. They assisted with applications, language prep, and finding accommodation. I’m now thriving in Japan—Arigato BOSSMI!'
    },
    {
      title: 'Grateful Client',
      content: 'They turned my dream of working in the Gulf into reality. BOSSMI’s honest advice, swift processing, and consistent updates made the whole journey stress-free. Truly the most professional agency I’ve encountered.'
    },
    {
      title: 'Moses Mulumia',
      content: 'I’m forever grateful to BOSSMI for helping me secure my career abroad. From documentation to pre-departure orientation, everything was smooth and timely. Their team’s dedication is unmatched!'
    },
  ], []);

  const Card = ({ title, content }) => (
    <div className="bg-white bg-opacity-90 border border-gray-200 rounded-3xl shadow-lg p-10 w-[90vw] max-w-2xl mx-auto text-black">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-base text-gray-700 mb-7">"{content}"</p>
      <div className="flex items-center gap-3">
        <img className="w-12 h-12 rounded-full" src={profile} alt="client" />
        <span className="text-sm text-gray-600">Client Testimonial</span>
      </div>
    </div>
  );

  const total = cards.length;
  const cardHeight = 350;
  const gap = 40;
  const step = cardHeight + gap;
  const yLoop = -total * step;

  return (
    <div className="relative w-full py-16 px-4 bg-[#f5f8fa] overflow-hidden">
      <h2 className="text-3xl font-bold text-center text-[#00879E]">Testimonials</h2>
      <p className="text-xl text-center mt-2 mb-10 text-gray-800">What Our Clients Say</p>

      <div
        className="relative h-[500px] w-full flex items-start justify-center overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
        }}
      >
        <motion.div
          className="flex flex-col items-center"
          animate={{ y: [0, yLoop] }}
          transition={{
            duration: total * 4,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {[...cards, ...cards].map((c, idx) => (
            <div key={idx} style={{ marginBottom: `${gap}px` }}>
              <Card title={c.title} content={c.content} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
