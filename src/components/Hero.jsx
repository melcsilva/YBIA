import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import imagemback from "../assets/background1.svg";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(e) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-start overflow-hidden px-6 lg:px-16">
      {/* efeito do mouse */}
      <div
        className="absolute inset-0 z-20 opacity-70"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(217, 164, 65, 0.2), transparent 40%)`,
          mixBlendMode: 'plus-lighter'
        }}
      />

      {/* imagem de fundo */}
      <div className="absolute inset-0">
        <img
          src={imagemback}
          alt="hero background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" /> {/* camada escura */}
      </div>

      {/* conteúdo animado */}
      <motion.div
        className="relative z-30 text-left lg:text-left max-w-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="font-hero text-4xl mt-50 sm:text-5xl lg:text-6xl text-[var(--color-offwhitec)] mb-4 leading-tight">
          Tecnologia enraizada no futuro.
        </h1>
        <p className="text-[var(--color-offwhitec)] text-xl">
          A inteligência artificial que conecta tecnologia, natureza e propósito.
        </p>
      </motion.div>
    </section>
  );
}
