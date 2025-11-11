import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
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
    <section
      id="hero"
      className="bg-[var(--color-offwhitec)] relative min-h-screen lg:min-h-[120vh]  flex flex-col lg:flex-row items-center justify-center lg:justify-start overflow-hidden px-4 sm:px-8 lg:px-12 py-24 sm:py-32"
    >
      {/* efeito do mouse */}
      <div
        className="absolute inset-0 z-20 opacity-70"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(217, 164, 65, 0.2), transparent 40%)`,
          mixBlendMode: "plus-lighter",
        }}
      />

      {/* imagem de fundo */}
      <div className="absolute inset-0 rounded-b-4xl overflow-hidden">
        <img
          src={imagemback}
          alt="hero background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" /> {/* camada escura */}
      </div>

      {/* conteúdo animado */}
      <motion.div
        className="relative z-30 text-center lg:text-left max-w-xl sm:max-w-2xl px-2 sm:px-0"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="font-hero text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[var(--color-offwhitec)] mb-4 leading-tight">
          Tecnologia enraizada no futuro.
        </h1>
        <p className="text-[var(--color-offwhitec)] text-base sm:text-lg md:text-xl max-w-md sm:max-w-lg mx-auto lg:mx-0">
          A inteligência artificial que conecta tecnologia, natureza e propósito.
        </p>
      </motion.div>

      {/* animação scroll */}
      <div className="absolute bottom-10 sm:bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 z-30">
        <DotLottieReact
          src="https://lottie.host/f0863168-2f00-4022-bd99-c82b9c1ed38c/lnGkleUowa.lottie"
          loop
          autoplay
          style={{ width: 70, height: 70 }}
        />
      </div>
    </section>
  );
}
