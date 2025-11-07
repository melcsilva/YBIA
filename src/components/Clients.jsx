import { motion } from "framer-motion";

export default function Clients() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div
        id="clients"
        className="p-4 md:p-6 text-[var(--color-softblack)] bg-[var(--color-offwhitec)] scroll-mt-32"
      >
        <div className="flex flex-wrap justify-center">
          <motion.div
            className="relative z-10 w-full text-left"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="flex mb-8 text-center w-full text-3xl md:text-4xl font-bold justify-center">
              Nossos Números Impressionantes
            </h2>
          </motion.div>

          {/* 1 */}
          <motion.div
            className="w-full md:w-1/2 lg:w-1/4 py-8"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <div className="md:border-r border-[var(--color-softblack)] px-12">
              <h2 className="text-4xl md:text-5xl font-semibold text-center">
                2+
              </h2>
              <p className="mb-2 text-center">Anos de Experiência</p>
            </div>
          </motion.div>

          {/* 2 */}
          <motion.div
            className="w-full md:w-1/2 lg:w-1/4 py-8"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="lg:border-r border-[var(--color-softblack)] px-12">
              <h2 className="text-4xl md:text-5xl font-semibold text-center">
                10+
              </h2>
              <p className="mb-2 text-center">Clientes Satisfeitos</p>
            </div>
          </motion.div>

          {/* 3 */}
          <motion.div
            className="w-full md:w-1/2 lg:w-1/4 py-8"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <div className="md:border-r border-[var(--color-softblack)] px-12">
              <h2 className="text-4xl md:text-5xl font-semibold text-center">
                20+
              </h2>
              <p className="mb-2 text-center">Soluções em Tempo Real</p>
            </div>
          </motion.div>

          {/* 4 */}
          <motion.div
            className="w-full md:w-1/2 lg:w-1/4 py-8"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <div className="px-12">
              <h2 className="text-4xl md:text-5xl font-semibold text-center">
                10+
              </h2>
              <p className="mb-2 text-center">Prêmios</p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
