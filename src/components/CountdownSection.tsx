import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const EVENT_DATE = new Date("2026-07-18T00:00:00");

function getTimeLeft() {
  const now = new Date();
  const diff = EVENT_DATE.getTime() - now.getTime();

  if (diff <= 0) return { jours: 0, heures: 0, minutes: 0, secondes: 0 };

  return {
    jours: Math.floor(diff / (1000 * 60 * 60 * 24)),
    heures: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    secondes: Math.floor((diff / 1000) % 60),
  };
}

const CountdownSection = () => {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const blocks = [
    { label: "Jours", value: time.jours },
    { label: "Heures", value: time.heures },
    { label: "Minutes", value: time.minutes },
    { label: "Secondes", value: time.secondes },
  ];

  return (
    <section className="bg-secondary py-10 md:py-14">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          className="font-heading text-2xl md:text-3xl italic text-foreground mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Le compte à rebours est lancé
        </motion.h2>

        <motion.div
          className="flex items-center justify-center gap-3 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="h-px w-12 bg-primary" />
          <span className="diamond w-2 h-2" />
          <span className="h-px w-12 bg-primary" />
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-6 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {blocks.map((block) => (
            <div
              key={block.label}
              className="bg-card border border-border rounded-lg p-3 md:p-5"
            >
              <span className="block font-display text-3xl md:text-5xl font-bold text-primary tabular-nums">
                {String(block.value).padStart(2, "0")}
              </span>
              <span className="block text-muted-foreground text-[10px] md:text-xs uppercase tracking-[0.15em] mt-1">
                {block.label}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.p
          className="text-muted-foreground text-sm mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          18 - 26 juillet 2026 &middot; Tunis
        </motion.p>
      </div>
    </section>
  );
};

export default CountdownSection;
