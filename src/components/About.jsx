import { motion } from "framer-motion";
import about from "../assets/luminaiabout.svg";
import luminai from "../assets/luminai.svg";

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* seção sobre a Ybia */}
      <section className="relative min-h-[100vh] flex flex-col lg:flex-row items-center justify-between overflow-hidden py-20 bg-[var(--color-offwhitec)] px-8 lg:px-20 gap-10">
        {/* efeitinhos dourados */}
        <div className="absolute top-0 left-5 w-1/3 h-full sm:h-72 bg-[var(--color-gold)] rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 right-5 w-1/3 h-full sm:h-72 bg-[var(--color-gold)] rounded-full blur-3xl opacity-20"></div>

        {/* texto de sobre */}
        <motion.div
          className="relative z-10 lg:w-1/2 text-left"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl font-bold mb-8 text-[var(--color-softblack)]">
            Um salto orgânico rumo ao futuro.
          </h2>
          <p className="text-lg leading-relaxed text-[var(--color-softblack)]">
            Nossa IA é projetada para aprender e se adaptar, assim como a natureza, garantindo que sua empresa não apenas acompanhe as mudanças, mas prospere nelas. Junte-se a nós e descubra como a tecnologia pode florescer em harmonia com o mundo ao nosso redor.
          </p>
        </motion.div>

        {/* imagem de sobre */}
        <motion.div
          className="relative z-10 lg:w-1/2 flex justify-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <img
            src={about}
            alt="Sobre a Ybia"
            className="w-80 h-80 lg:w-[420px] lg:h-[420px] object-cover rounded-full shadow-lg shadow-yellow-500/50 transition-transform duration-500 ease-in-out hover:shadow-xl hover:scale-105"
          />
        </motion.div>
      </section>

      {/* sobre o LuminAI */}
      <section className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden py-24 px-8 lg:px-20 bg-gradient-to-b from-[#0a0a0a] via-[#1a1408] to-[var(--color-gold)]/10">
      
      {/* efeitinho de luz douradas */}
      <div className="absolute inset-0 overflow-hidden">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute bg-[var(--color-gold)] rounded-full opacity-30 animate-pulse"
        style={{
          width: `${Math.random() * 6 + 2}px`,
          height: `${Math.random() * 6 + 2}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${2 + Math.random() * 4}s`,
          animationDelay: `${Math.random() * 3}s`,
        }}
      ></div>
    ))}
    </div>
    
    {/* título */}
    <h2 className="relative z-10 text-5xl font-bold mb-10 text-[var(--color-offwhitec)] text-center">
    Conheça o LuminAI
    </h2>
    {/* conteúdo principal */}
    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl">
        
        {/* LuminAI */}
        <div className="flex-1 flex justify-center lg:justify-start mb-12 lg:mb-0">
            <div className="relative">
        <div className="absolute inset-0 rounded-full blur-3xl bg-[var(--color-gold)] opacity-30 animate-pulse"></div>
        <img
          src={luminai}
          alt="LuminAI mascote"
          className="relative w-80 h-80 lg:w-[420px] lg:h-[420px] object-contain drop-shadow-[0_0_60px_rgba(217,164,65,0.3)] transition-transform duration-700 ease-in-out hover:scale-110"
        />
        </div>
        </div>
        
        {/* texto + botão */}
        <div className="flex-1 text-center lg:text-left lg:pl-20 text-[var(--color-offwhitec)] mt-[-40px]">
            <p className="text-xl leading-relaxed text-[var(--color-offwhitec)]/90 mb-6">
            LuminAI é a nossa <span className="font-bold">inteligência artificial</span>, um colibri de luz que simboliza a harmonia entre natureza e tecnologia.
            </p>
            <p className="text-xl leading-relaxed text-[var(--color-offwhitec)]/90 mb-8">
            Ele aprende, conversa e ilumina caminhos, guiando empresas e pessoas por um universo onde a inteligência é viva, gentil e transformadora.
            </p>

            {/* botão do WhatsApp */}
            <a
            href="https://wa.me/5511939483539" // substitui pelo número real
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-gold)] text-[var(--color-softblack)] font-semibold rounded-full shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 hover:scale-105 transition-all duration-300"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
                >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.768.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.373-.025-.522-.075-.149-.669-1.612-.916-2.21-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.793.372-.273.298-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.08 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347zM12.004 2.002c-5.514 0-9.998 4.484-9.998 9.998 0 1.764.465 3.49 1.35 5.004l-1.435 5.26 5.38-1.414c1.466.801 3.1 1.23 4.702 1.23h.002c5.514 0 9.998-4.484 9.998-9.998 0-2.67-1.04-5.182-2.93-7.07a9.935 9.935 0 00-7.07-2.93z" />
                    </svg>
                    conversar com o LuminAI
                    </a>
                    </div>
                    </div>
        </section>
    </>
  );
}
