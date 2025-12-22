import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Proyectos Entregados" },
  { value: 98, suffix: "%", label: "Clientes Satisfechos" },
  { value: 24, suffix: "/7", label: "Soporte Disponible" },
  { value: 10, suffix: "+", label: "Años de Experiencia" },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const Stats = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="py-16 lg:py-24 bg-primary relative overflow-hidden">
      {/* Animated background patterns */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary-foreground)) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
        animate={{ 
          backgroundPosition: ["0px 0px", "40px 40px"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating accent shapes */}
      <motion.div 
        className="absolute top-1/2 left-10 w-32 h-32 bg-primary-foreground/10 rounded-full blur-2xl"
        animate={{ 
          y: [-20, 20, -20],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/2 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"
        animate={{ 
          y: [20, -20, 20],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative mx-auto px-4 lg:px-8">
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              variants={itemVariants}
            >
              <motion.div 
                className="text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-2"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </motion.div>
              <motion.div 
                className="text-primary-foreground/80 text-sm lg:text-base"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {stat.label}
              </motion.div>
              
              {/* Underline animation on hover */}
              <motion.div 
                className="h-0.5 bg-accent mx-auto mt-2 rounded-full"
                initial={{ width: 0 }}
                whileHover={{ width: "60%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
