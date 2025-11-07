export default function Testimonials() {
  return (
    <>
    <div className="p-4 md:p-6 text-[var(--color-softblack)] bg-[var(--color-offwhitec)]">
      <div className="flex flex-wrap">
        <h2 className="flex mb-8 text-center align-center w-full text-3xl md:text-4xl font-bold justify-center">
            Nossos Números Impressionantes
        </h2>
        {/* 1 */}
        <div className="w-full md:w-1/2 lg:w-1/4 py-8">
          <div className="md:border-r border-[var(--color-softblack)] px-12">
            <h2 className="text-4xl text-[var(--color-softblack)] md:text-5xl font-semibold text-center">
              2+
            </h2>
            <p className="mb-2 text-center text-[var(--color-softblack)]">Anos de Experiência</p>
          </div>
        </div>

        {/* 2 */}
        <div className="w-full md:w-1/2 lg:w-1/4 py-8">
          <div className="lg:border-r border-[var(--color-softblack)] px-12">
            <h2 className="text-4xl text-[var(--color-softblack)] md:text-5xl font-semibold text-center">
              10+
            </h2>
            <p className="mb-2 text-center text-[var(--color-softblack)]">Clientes Satisfeitos</p>
          </div>
        </div>

        {/* 3 */}
        <div className="w-full md:w-1/2 lg:w-1/4 py-8">
          <div className="md:border-r border-[var(--color-softblack)] px-12">
            <h2 className="text-4xl text-[var(--color-softblack)] md:text-5xl font-semibold text-center">
              20+
            </h2>
            <p className="mb-2 text-center text-[var(--color-softblack)]">Soluções em tempo real</p>
          </div>
        </div>

        {/* 4 */}
        <div className="w-full md:w-1/2 lg:w-1/4 py-8">
          <div className="px-12">
            <h2 className="text-4xl text-[var(--color-softblack)] md:text-5xl font-semibold text-center">
              10+
            </h2>
            <p className="mb-2 text-center text-[var(--color-softblack)]">Prêmios</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}