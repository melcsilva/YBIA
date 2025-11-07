import Logo from "../assets/logobranca.png";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#0a0a0a] via-[#1a1408] to-[var(--color-gold)]/10 text-[var(--color-offwhitec)] overflow-hidden">

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--color-gold)] rounded-full filter blur-3xl animate-float1"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-[var(--color-gold)] rounded-full filter blur-3xl animate-float2"></div>
        <div className="absolute bottom-10 left-1/2 w-48 h-48 bg-[var(--color-gold)] rounded-full filter blur-3xl animate-float3"></div>
      </div>

      {/* conteúdo principal */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {/* logo */}
          <div>
            <img
              src={Logo}
              alt="logo"
              className="w-28 md:w-36 mx-auto md:mx-0 mb-6"
            />
            <p className="text-[var(--color-offwhitec)]">
              Criando experiências digitais únicas.
            </p>
          </div>

          {/* links de navegação */}
          <div>
            <ul className="space-y-3 text-[var(--color-offwhitec)]">
              <li>
                <a href="#hero" className="hover:text-[var(--color-gold)] transition">
                  home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[var(--color-gold)] transition">
                  quem somos
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[var(--color-gold)] transition">
                  planos
                </a>
              </li>
              <li>
                <a href="#clients" className="hover:text-[var(--color-gold)] transition">
                  clientes
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-[var(--color-gold)] transition">
                  contato
                </a>
              </li>
            </ul>
          </div>

          {/* contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">contato</h3>
            <ul className="space-y-3 text-[var(--color-offwhitec)]/80">
              <li>
                <strong>email:</strong>{" "}
                <a
                  className="cursor-pointer text-[var(--color-offwhitec)] hover:text-[var(--color-gold)] transition"
                >
                  melissasilva245@gmail.com
                </a>
              </li>
              <li>
                <strong>telefone:</strong>{" "}
                <a
                  className="cursor-pointer text-[var(--color-offwhitec)] hover:text-[var(--color-gold)] transition"
                >
                  +55 11 93948-3539
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* linha inferior */}
        <div className="mt-12 pt-8 border-t border-[var(--color-offwhitec)]/60 text-center">
          <p className="text-[var(--color-offwhitec)]/80 text-sm">
            &copy; {new Date().getFullYear()} Mel Silva. todos os direitos
            reservados.
          </p>
        </div>
      </div>

      {/* orb decorativo */}
      <div className="orb absolute w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 filter blur-3xl pointer-events-none bottom-0 right-10 opacity-40"></div>

      {/* estilos extras */}
      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, 20px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-15px, 15px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(0, -20px); }
        }
        .animate-float1 {
          animation: float1 8s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 10s ease-in-out infinite;
        }
        .animate-float3 {
          animation: float3 12s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}