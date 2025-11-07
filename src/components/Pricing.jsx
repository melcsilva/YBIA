import semente from "../assets/semente.svg"
import raiz from "../assets/raiz.svg"
import floresta from "../assets/floresta.svg"

export default function Pricing() {
  const plans = [
    {
      name: "🌱 Semente",
      desc: "IA básica para automação de tarefas simples e chatbots inteligentes. Ideal para pequenas empresas que estão começando a digitalizar seus processos.",
      img: semente,
    },
    {
      name: "🌿 Raiz",
      desc: "Soluções intermediárias com integração de sistemas, relatórios automáticos e análise de dados.",
      img: raiz,
    },
    {
      name: "🌳 Floresta",
      desc: "IA completa e personalizada, com inteligência preditiva, consultoria estratégica e automações complexas.",
      img: floresta,
    },
  ]

  return (
    <section className="relative py-20 bg-[var(--color-offwhitec)]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <h2 className="text-5xl font-bold text-[var(--color-softblack)] mb-4">
        Planos Empresariais
        </h2>
        <p className="text-lg text-[var(--color-softblack)] mb-16">
          Comece com a semente. Crie raízes. Cresça com a floresta.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative rounded-3xl overflow-hidden shadow-lg group"
            >
              {/* imagem de fundo */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${plan.img})` }}
              ></div>
              <div className="absolute inset-0 bg-black/50"></div>

              {/* efeito de vidro */}
              <div className="relative backdrop-blur-sm bg-white/10 p-15 h-full flex flex-col justify-between text-left text-white z-10">
                <div>
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <p className="text-base leading-relaxed">{plan.desc}</p>
                </div>
                <button className="mt-8 px-5 py-3 rounded-lg border border-[var(--color-offwhitec)] cursor-pointer hover-[var(--color-gold)] text-[var(--color-offwhitec)] font-semibold hover:bg-[var(--color-gold)]/90 transition">
                  Contratar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
