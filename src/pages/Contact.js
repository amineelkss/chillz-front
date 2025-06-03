import React, { useState } from "react";
import { FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`bg-white rounded-xl p-4 shadow-md mb-4 border ${
        open ? "border-yellow-400" : ""
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex justify-between items-center font-semibold"
      >
        <span>{question}</span>
        {open ? <FiChevronDown size={20} /> : <FiChevronRight size={20} />}
      </button>
      {open && <p className="mt-3 text-sm text-gray-700">{answer}</p>}
    </div>
  );
};

const Contact = () => {
  const [form, setForm] = useState({ subject: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xpzvnqvo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: form.subject,
          email: form.email,
          message: form.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setForm({ subject: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  const faqs = [
    {
      question: "Où peut-on acheter les boissons CHILL'Z ?",
      answer:
        "Tu peux choper nos canettes en ligne directement sur notre site ou dans une sélection de points de vente près de chez toi. On débarque petit à petit dans les épiceries, snacks et grandes surfaces partenaires — donc reste branché, on arrive dans ton frigo très bientôt 😎.",
    },
    {
      question: "Est-ce que vos boissons sont 100 % naturelles ?",
      answer:
        "Oui, toutes nos boissons sont faites avec des ingrédients 100 % naturels, sans additifs ni conservateurs."
    },
    {
      question: "Les boissons CHILL'Z sont-elles vegan / sans allergènes ?",
      answer:
        "Oui, elles sont 100 % vegan et ne contiennent aucun des principaux allergènes reconnus."
    },
    {
      question: "Est-ce que vous comptez sortir d'autres saveurs bientôt ?",
      answer:
        "Carrément ! De nouvelles saveurs sont en cours de préparation. Suis-nous sur les réseaux pour être au courant des prochaines sorties."
    }
  ];

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-start">
          <h2 className="text-2xl font-bold mb-4">Une question, un mot doux,<br />une collab’ en tête ?</h2>
          <p className="mb-6 text-gray-800">
            T’écris pas dans le vide. Chez CHILL’Z, on lit tout (vraiment), et on te répond vite.<br />
            Que ce soit pour une info sur nos produits, une idée à partager ou juste nous dire que t’as kiffé — t’as qu’à remplir le formulaire juste en dessous.
          </p>

          <div className="mb-6">
            <h3 className="font-bold text-lg mb-1">Email</h3>
            <p>infochillz.drink@gmail.com</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Socials</h3>
            <div className="flex gap-4 text-2xl">
              <a href="https://www.instagram.com/chillz.drink?igsh=MWxoOWZ6Mzg2MHNxNg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.tiktok.com/@chillzdrink?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer">
                <FaTiktok />
              </a>
              <a href="https://www.linkedin.com/in/chill-z-drink-711087364/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block mb-1 font-medium">Sujet</label>
            <input type="text" name="subject" value={form.subject} onChange={handleChange} className="w-full bg-gray-100 p-3 rounded-md" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">Adresse email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full bg-gray-100 p-3 rounded-md" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} className="w-full bg-gray-100 p-3 rounded-md h-32" required></textarea>
          </div>
          <button type="submit" className="bg-gradient-to-r from-[#C32056] to-pink-500 text-white py-3 rounded-full shadow-md font-semibold">Envoyer</button>
          {status === "success" && <p className="text-green-600 font-medium mt-2">Message envoyé avec succès !</p>}
          {status === "error" && <p className="text-red-600 font-medium mt-2">Une erreur est survenue. Veuillez réessayer plus tard.</p>}
        </form>
      </div>

      {/* FAQ Section */}
      <div className="bg-peach-100 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Questions fréquemment posées</h2>
          <div className="h-1 bg-cyan-400 w-24 mx-auto mb-8 rounded" />
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;