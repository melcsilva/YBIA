import { useState } from "react";
import emailjs from "emailjs-com";
import { InstagramIcon, LinkedinIcon, GithubIcon } from "lucide-react";
import Logo1 from "../assets/logomel2.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formData,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => alert("Mensagem enviada com sucesso!"),
        () => alert("Erro ao enviar, tente novamente!")
      );

    setFormData({ name: "", company: "", email: "", message: "" });
  };

  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-[var(--color-offwhitec)] py-20 px-8 lg:px-20 min-h-[100vh] flex items-center justify-center"
    >
      {/* DECORAÇÃO DOURADA */}
      <div className="absolute left-[-50px] w-[400px] h-[400px] bg-[var(--color-gold)] opacity-30 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-100px] right-[-50px] w-[500px] h-[500px] bg-[var(--color-gold)] opacity-20 blur-[150px] rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* INFO */}
        <div className="flex flex-col justify-center">
          {/* título mais pra cima */}
          <h2 className="text-4xl font-bold mb-4 -mt-6 text-[var(--color-softblack)]">
            Entre em contato comigo!
          </h2>

          <p className="text-lg text-gray-600 mb-6">
            Olá, me chamo Mel, sou de São Paulo. Se você gostou do meu trabalho
            e quer entrar em contato, preencha o formulário ou use as informações abaixo.
          </p>

          <div className="space-y-3">
            <p className="text-gray-700">São Paulo, SP.</p>
            <p className="text-gray-700">
              Email:{" "}
              <span className="font-medium">melissasilva245@gmail.com</span>
            </p>

            <div className="mt-6">
              <p className="text-gray-700 mb-2 font-semibold">
                Minhas redes sociais
              </p>
              <div className="flex space-x-4 text-[var(--color-emerald)]">
                <a
                  href="https://www.instagram.com/meli.cs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-petrol)] transition-transform hover:scale-110"
                >
                  <InstagramIcon size={28} />
                </a>
                <a
                  href="https://www.linkedin.com/in/melissa-cassia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-petrol)] transition-transform hover:scale-110"
                >
                  <LinkedinIcon size={28} />
                </a>
                <a
                  href="https://github.com/melcsilva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-petrol)] transition-transform hover:scale-110"
                >
                  <GithubIcon size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FORMULÁRIO */}
        <div className="backdrop-blur-lg drop-shadow-xl bg-white/30 shadow-xl rounded-xl p-8 border border-white/40">
          <h3 className="text-2xl font-semibold mb-6 text-center text-[var(--color-softblack)]">
            Envie sua mensagem
          </h3>

          <form onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="nome"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md border border-gray-300 bg-white/70 placeholder-gray-500"
            />

            <input
              type="text"
              name="company"
              placeholder="nome da empresa (opcional)"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-3 rounded-md border border-gray-300 bg-white/70 placeholder-gray-500"
            />

            <input
              type="email"
              name="email"
              placeholder="e-mail"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md border border-gray-300 bg-white/70 placeholder-gray-500"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="escreva sua mensagem..."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md border border-gray-300 bg-white/70 placeholder-gray-500"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 bg-[var(--color-emerald)] text-white font-semibold rounded-md hover:bg-[var(--color-petrol)] transition-all duration-200"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
