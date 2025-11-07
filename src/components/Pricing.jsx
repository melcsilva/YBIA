import semente from "../assets/semente.svg";
import raiz from "../assets/raiz.svg";
import floresta from "../assets/floresta.svg";
import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "🌱 Semente",
      desc: "IA básica para automação de tarefas simples e chatbots inteligentes. Ideal para pequenas empresas que estão começando a digitalizar seus processos.",
      img: semente,
      features: [
        "Automação de tarefas simples",
        "Chatbots inteligentes",
        "Ideal para pequenas empresas",
        "Digitalização inicial de processos",
      ],
    },
    {
      name: "🌿 Raiz",
      desc: "Soluções intermediárias com integração de sistemas, relatórios automáticos e análise de dados.",
      img: raiz,
      features: [
        "Integração entre sistemas",
        "Relatórios automáticos",
        "Análise de dados",
        "Suporte técnico prioritário",
      ],
    },
    {
      name: "🌳 Floresta",
      desc: "IA completa e personalizada, com inteligência preditiva, consultoria estratégica e automações complexas.",
      img: floresta,
      features: [
        "IA personalizada para o negócio",
        "Inteligência preditiva",
        "Consultoria estratégica",
        "Automações complexas",
      ],
    },
  ];

  return (
    <section id="pricing" className="relative py-20 bg-[var(--color-offwhitec)]">
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
                className="absolute inset-0 bg-cover bg-center brightness-90 transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${plan.img})` }}
              ></div>

              {/* overlay escuro */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* efeito de vidro e conteúdo */}
              <div className="relative backdrop-blur-sm bg-white/5 p-10 h-full flex flex-col justify-between text-left text-white z-10">
                <div>
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <p className="text-base leading-relaxed mb-4">{plan.desc}</p>

                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="mt-8 px-5 py-3 rounded-lg border border-[var(--color-offwhitec)] text-[var(--color-offwhitec)] font-semibold hover:bg-[var(--color-gold)] cursor-pointer hover:text-[var(--color-softblack)] transition">
                  Contratar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
