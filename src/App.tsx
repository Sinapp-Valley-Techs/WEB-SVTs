import "./App.css";
import React, { useState } from "react";
import { FaLaptopCode, FaMobileAlt, FaServer, FaLightbulb, FaRobot, FaCloud, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

function Navbar() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center shadow z-20 transition-colors duration-300 bg-white/80 text-blue-900 border-b border-gray-200 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full flex items-center justify-center border-2 shadow-sm transition-all duration-300 bg-gradient-to-tr from-blue-700 to-purple-400 border-blue-700">
          <span className="text-white font-bold text-lg">SVT</span>
        </div>
        <span className="font-bold text-xl tracking-wide select-none">Sinapp Valley Techs</span>
      </div>
      <ul className="flex gap-6 items-center">
        {[
          { id: 'inicio', label: 'Inicio' },
          { id: 'nosotros', label: 'Nosotros' },
          { id: 'servicios', label: 'Servicios' },
          { id: 'agents', label: 'Agents' },
          { id: 'noticias', label: 'Noticias' },
          { id: 'faq', label: 'FAQ' },
          { id: 'footer-contacto', label: 'Contacto' },
        ].map((item) => (
          <li key={item.id}>
            <a
              href="#"
              className={`relative px-3 py-1 rounded-md font-medium transition-colors duration-200
                group
                hover:bg-blue-50
                hover:text-purple-700
                focus:outline-none focus:ring-2 focus:ring-blue-300`}
              onClick={e => handleNavClick(e, item.id)}
            >
              <span className="transition-colors duration-200 group-hover:text-purple-700 group-focus:text-purple-700">
                {item.label}
              </span>
              {/* Línea animada debajo */}
              <span className={`absolute left-1/2 -bottom-1 w-0 h-0.5 rounded-full transition-all duration-300
                bg-gradient-to-r from-blue-500 to-purple-400
                group-hover:w-2/3 group-focus:w-2/3 group-hover:h-1 group-focus:h-1 group-hover:opacity-80 group-focus:opacity-80 opacity-0`}
                style={{transform: 'translateX(-50%)'}}
              ></span>
              {/* Borde minimalista animado */}
              <span className={`absolute inset-0 pointer-events-none rounded-md transition-all duration-200
                group-hover:ring-2 group-hover:ring-blue-400 group-hover:ring-opacity-40
                group-focus:ring-2 group-focus:ring-blue-400 group-focus:ring-opacity-60`}></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function App() {
  const [showFooterContact, setShowFooterContact] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showApp, setShowApp] = useState(false);

  // Solución universal: bloquear scroll horizontal en toda la app
  React.useEffect(() => {
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.width = '100vw';
    document.documentElement.style.width = '100vw';
    return () => {
      document.body.style.overflowX = '';
      document.documentElement.style.overflowX = '';
      document.body.style.width = '';
      document.documentElement.style.width = '';
    };
  }, []);

  // Loader splash al inicio
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setShowApp(true), 600); // 0.6s para fade out
    }, 1800); // 1.8s splash
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-50 transition-all duration-700 animate-fade-in">
        <div className="w-24 h-24 rounded-full flex items-center justify-center bg-gradient-to-tr from-blue-700 to-purple-400 shadow-lg animate-pulse">
          <span className="text-white font-extrabold text-4xl tracking-widest drop-shadow-lg">SVT</span>
        </div>
        <span className="mt-6 text-2xl font-bold text-blue-900 animate-fade-in-slow">Sinapp Valley Techs</span>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className={showApp ? 'animate-app-fade-in' : 'opacity-0'}>
        <div className="relative flex flex-col min-h-screen overflow-x-hidden overflow-y-auto w-full bg-gray-50" style={{ boxShadow: 'none', borderLeft: 'none', borderRight: 'none' }}>
          <main id="inicio" className="flex-1 flex flex-col items-center justify-center pt-24">
            {/* INICIO HERO CON PARALLAX Y TEXTO ANIMADO */}
            <section className="relative w-full max-w-4xl flex flex-col items-center justify-center mb-8 bg-white/80 rounded-xl shadow-lg p-8 scroll-mt-24 overflow-hidden">
              {/* Fondo parallax sutil */}
              <div
                className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-100 via-purple-100 to-white opacity-80 pointer-events-none"
                style={{ backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover' }}
              />
              {/* Imagen decorativa parallax */}
              <ParallaxImage />
              <motion.h1
                className="text-5xl md:text-7xl font-extrabold text-blue-900 mb-2 text-center drop-shadow"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <AnimatedTitle text="Sinapp Valley Techs" />
              </motion.h1>
              <motion.h2
                className="text-2xl md:text-3xl font-semibold text-purple-700 mb-4 text-center italic"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                Innovación que transforma tu negocio.
              </motion.h2>
              <button
                onClick={e => {
                  e.preventDefault();
                  setShowFooterContact((prev) => !prev);
                  setTimeout(() => {
                    const section = document.getElementById('footer-contacto');
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }, 100);
                }}
                className="mt-2 px-8 py-3 bg-blue-900 text-white rounded-lg shadow hover:bg-blue-800 transition font-semibold text-lg"
              >
                Contáctanos
              </button>
            </section>
            {/* NOSOTROS */}
            <motion.section
              id="nosotros"
              className="w-full max-w-4xl bg-white/80 rounded-xl shadow-lg p-8 mb-8 scroll-mt-24"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Sobre Nosotros</h2>
              {/* Quiénes somos */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-purple-700 mb-2">¿Quiénes somos?</h3>
                <p className="text-gray-700">Sinapp Valley Techs nació en 2021 con la visión de transformar la manera en que las empresas adoptan la tecnología. Desde nuestros inicios, hemos acompañado a organizaciones de todos los tamaños en su camino hacia la innovación digital, combinando experiencia, creatividad y cercanía.</p>
              </div>
              {/* Misión, Visión y Valores */}
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-gray-100 rounded-lg p-4 shadow">
                  <h4 className="font-bold text-blue-900 mb-1">Misión</h4>
                  <p className="text-gray-700 text-sm">Impulsar el crecimiento de nuestros clientes a través de soluciones tecnológicas innovadoras, personalizadas y de alto impacto.</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 shadow">
                  <h4 className="font-bold text-blue-900 mb-1">Visión</h4>
                  <p className="text-gray-700 text-sm">Ser referentes en innovación tecnológica y aliados estratégicos de empresas que buscan transformar su futuro digital.</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 shadow">
                  <h4 className="font-bold text-blue-900 mb-1">Valores</h4>
                  <ul className="list-disc list-inside text-gray-700 text-sm">
                    <li>Innovación constante</li>
                    <li>Compromiso con el cliente</li>
                    <li>Transparencia y ética</li>
                    <li>Trabajo en equipo</li>
                    <li>Excelencia profesional</li>
                  </ul>
                </div>
              </div>
              {/* Enfoque */}
              <div>
                <h3 className="text-xl font-semibold text-purple-700 mb-2">Nuestro Enfoque</h3>
                <p className="text-gray-700">Nos distingue nuestra pasión por la innovación, la cercanía con cada cliente y la capacidad de adaptarnos a los retos de un mundo digital en constante cambio. Combinamos experiencia, creatividad y tecnología para ofrecer soluciones únicas y personalizadas.</p>
              </div>
              {/* Estadísticas animadas debajo de Nuestro Enfoque */}
              <div className="w-full flex flex-wrap justify-center items-stretch gap-6 py-8 mb-2">
                <div className="flex flex-col md:flex-row gap-6 w-auto">
                  <AnimatedBar label="Clientes satisfechos" value={120} max={150} color="bg-blue-600" icon={<FaLaptopCode className="text-blue-700" />} />
                  <AnimatedBar label="Proyectos completados" value={85} max={100} color="bg-purple-600" icon={<FaServer className="text-purple-700" />} />
                  <AnimatedBar label="Años de experiencia" value={4} max={10} color="bg-yellow-400" icon={<FaLightbulb className="text-yellow-500" />} />
                  <AnimatedBar label="Agentes IA activos" value={7} max={10} color="bg-blue-400" icon={<FaRobot className="text-blue-400" />} />
                </div>
              </div>
            </motion.section>
            {/* INTEGRANTES - Carrusel tipo tren */}
            <motion.section
              id="integrantes"
              className="w-full max-w-4xl bg-white/80 rounded-xl shadow-lg p-8 mb-8 scroll-mt-24 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Nuestro Equipo</h2>
              <div className="relative w-full overflow-x-hidden">
                <InfiniteTrainCarousel />
              </div>
            </motion.section>
            {/* SERVICIOS */}
            <motion.section
              id="servicios"
              className="w-full max-w-4xl bg-white/80 rounded-xl shadow-lg p-8 mb-8 scroll-mt-24"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Servicios</h2>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {/* Desarrollo de software a medida */}
                <div className="flex flex-col items-center bg-gray-50 rounded-lg p-6 shadow group hover:shadow-xl transition">
                  <motion.div
                    className="mb-3"
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <FaLaptopCode className="w-10 h-10 text-blue-700 group-hover:text-blue-900 transition" />
                  </motion.div>
                  <h3 className="font-bold text-lg text-blue-900 mb-2">Desarrollo de software a medida</h3>
                  <p className="text-gray-600 text-sm mb-4 text-center">Soluciones personalizadas para tu empresa, desde la idea hasta la implementación.</p>
                  <button className="mt-auto px-4 py-2 bg-blue-900 text-white rounded-lg shadow hover:bg-blue-800 transition text-sm">Solicitar demo</button>
                </div>
                {/* Aplicaciones móviles */}
                <div className="flex flex-col items-center bg-gray-50 rounded-lg p-6 shadow group hover:shadow-xl transition">
                  <motion.div
                    className="mb-3"
                    whileHover={{ scale: 1.15, rotate: -8 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <FaMobileAlt className="w-10 h-10 text-purple-600 group-hover:text-purple-800 transition" />
                  </motion.div>
                  <h3 className="font-bold text-lg text-blue-900 mb-2">Aplicaciones móviles</h3>
                  <p className="text-gray-600 text-sm mb-4 text-center">Desarrollo de apps nativas y multiplataforma para iOS y Android.</p>
                  <button className="mt-auto px-4 py-2 bg-blue-900 text-white rounded-lg shadow hover:bg-blue-800 transition text-sm">Solicitar demo</button>
                </div>
                {/* Sistemas web y backend */}
                <div className="flex flex-col items-center bg-gray-50 rounded-lg p-6 shadow group hover:shadow-xl transition">
                  <motion.div
                    className="mb-3"
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <FaServer className="w-10 h-10 text-blue-400 group-hover:text-blue-700 transition" />
                  </motion.div>
                  <h3 className="font-bold text-lg text-blue-900 mb-2">Sistemas web y backend</h3>
                  <p className="text-gray-600 text-sm mb-4 text-center">Desarrollo de plataformas web, APIs, bases de datos y sistemas escalables.</p>
                  <button className="mt-auto px-4 py-2 bg-blue-900 text-white rounded-lg shadow hover:bg-blue-800 transition text-sm">Solicitar demo</button>
                </div>
                {/* Consultoría tecnológica */}
                <div className="flex flex-col items-center bg-gray-50 rounded-lg p-6 shadow group hover:shadow-xl transition">
                  <motion.div
                    className="mb-3"
                    whileHover={{ scale: 1.15, rotate: -8 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <FaLightbulb className="w-10 h-10 text-purple-400 group-hover:text-purple-700 transition" />
                  </motion.div>
                  <h3 className="font-bold text-lg text-blue-900 mb-2">Consultoría tecnológica</h3>
                  <p className="text-gray-600 text-sm mb-4 text-center">Acompañamiento experto para definir y ejecutar tu estrategia digital.</p>
                  <button className="mt-auto px-4 py-2 bg-blue-900 text-white rounded-lg shadow hover:bg-blue-800 transition text-sm">Ver más</button>
                </div>
                {/* Integración IA / Automatización */}
                <div className="flex flex-col items-center bg-gray-50 rounded-lg p-6 shadow group hover:shadow-xl transition">
                  <motion.div
                    className="mb-3"
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <FaRobot className="w-10 h-10 text-blue-500 group-hover:text-blue-800 transition" />
                  </motion.div>
                  <h3 className="font-bold text-lg text-blue-900 mb-2">IA, Automatización y ML</h3>
                  <p className="text-gray-600 text-sm mb-4 text-center">Implementación de inteligencia artificial, automatización y machine learning en tus procesos.</p>
                  <button className="mt-auto px-4 py-2 bg-blue-900 text-white rounded-lg shadow hover:bg-blue-800 transition text-sm">Ver más</button>
                </div>
                {/* Infraestructura en la nube / DevOps */}
                <div className="flex flex-col items-center bg-gray-50 rounded-lg p-6 shadow group hover:shadow-xl transition">
                  <motion.div
                    className="mb-3"
                    whileHover={{ scale: 1.15, rotate: -8 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <FaCloud className="w-10 h-10 text-blue-300 group-hover:text-blue-600 transition" />
                  </motion.div>
                  <h3 className="font-bold text-lg text-blue-900 mb-2">Nube y DevOps</h3>
                  <p className="text-gray-600 text-sm mb-4 text-center">Infraestructura escalable, segura y automatizada en la nube.</p>
                  <button className="mt-auto px-4 py-2 bg-blue-900 text-white rounded-lg shadow hover:bg-blue-800 transition text-sm">Ver más</button>
                </div>
              </div>
            </motion.section>
            {/* AGENTS */}
            <motion.section
              id="agents"
              className="w-full max-w-4xl bg-white/80 rounded-xl shadow-lg p-8 mb-8 scroll-mt-24"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Agents</h2>
              <div className="flex flex-col gap-8 mb-8">
                {/* Agent 1 */}
                <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-lg p-6 shadow group hover:shadow-xl transition">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Valeria Bussiness" className="w-28 h-28 rounded-full object-cover mb-4 md:mb-0 md:mr-8 border-4 border-blue-200 shadow" />
                  <div className="flex-1 flex flex-col items-center md:items-start">
                    <h3 className="font-bold text-2xl text-blue-900 mb-1">Valeria Bussiness</h3>
                    <p className="text-gray-600 text-base mb-2 text-center md:text-left">Motor de innovación y soluciones empresariales en Sinapp Valley Techs.</p>
                    <ul className="list-disc list-inside text-purple-700 text-sm mb-4 text-left">
                      <li>Consultoría tecnológica</li>
                      <li>Desarrollo de software</li>
                      <li>Transformación digital</li>
                      <li>Soporte y acompañamiento</li>
                    </ul>
                  </div>
                  <div className="flex flex-col items-center justify-center w-full md:w-auto mt-4 md:mt-0">
                    <button className="px-6 py-2 bg-purple-700 text-white rounded-lg shadow hover:bg-purple-800 transition text-base font-semibold">Pruebame</button>
                  </div>
                </div>
                {/* Agent 2 Ejemplo */}
                <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-lg p-6 shadow group hover:shadow-xl transition">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Miguel AI" className="w-28 h-28 rounded-full object-cover mb-4 md:mb-0 md:mr-8 border-4 border-blue-200 shadow" />
                  <div className="flex-1 flex flex-col items-center md:items-start">
                    <h3 className="font-bold text-2xl text-blue-900 mb-1">Miguel AI</h3>
                    <p className="text-gray-600 text-base mb-2 text-center md:text-left">Especialista en automatización y machine learning para empresas.</p>
                    <ul className="list-disc list-inside text-purple-700 text-sm mb-4 text-left">
                      <li>Automatización de procesos</li>
                      <li>Integración de IA</li>
                      <li>Optimización de recursos</li>
                    </ul>
                  </div>
                  <div className="flex flex-col items-center justify-center w-full md:w-auto mt-4 md:mt-0">
                    <button className="px-6 py-2 bg-purple-700 text-white rounded-lg shadow hover:bg-purple-800 transition text-base font-semibold">Pruebame</button>
                  </div>
                </div>
              </div>
            </motion.section>
            {/* NOTICIAS */}
            <motion.section
              id="noticias"
              className="w-full max-w-4xl bg-white/80 rounded-xl shadow-lg p-8 mb-8 scroll-mt-24"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Noticias</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>Lanzamiento de nuestra nueva plataforma de gestión empresarial.</li>
                <li>Participación en el evento Tech Innovators 2025.</li>
                <li>Reconocimiento como empresa líder en transformación digital.</li>
              </ul>
            </motion.section>
            {/* FAQ */}
            <motion.section
              id="faq"
              className="w-full max-w-4xl bg-white/80 rounded-xl shadow-lg p-8 mb-8 scroll-mt-24"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Preguntas Frecuentes (FAQ)</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li><span className="font-semibold">¿Qué servicios ofrecen?</span> Consultoría, desarrollo de software, transformación digital y soporte.</li>
                <li><span className="font-semibold">¿Trabajan con empresas pequeñas?</span> Sí, ayudamos a empresas de todos los tamaños.</li>
                <li><span className="font-semibold">¿Dónde están ubicados?</span> Operamos de forma remota y atendemos clientes en todo el mundo.</li>
              </ul>
            </motion.section>
          </main>
          <footer className={
            `w-screen left-1/2 right-1/2 -translate-x-1/2 bg-neutral-900 text-white text-center py-8 mt-8 shadow-inner flex flex-col items-center gap-4`
          } id="footer-contacto" style={{borderRadius: 0, boxShadow: 'none', position: 'relative'}}>
            <div className={`flex flex-col md:flex-row md:justify-between w-full max-w-4xl px-4 gap-6 md:gap-0 transition-all duration-300 ${showFooterContact ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden md:max-h-[1000px] md:opacity-100 md:overflow-visible'}`}>
              <div className="flex-1 flex flex-col items-center md:items-start">
                <span className="font-bold text-xl text-blue-400 mb-2">Contacto</span>
                <div className="flex flex-col gap-1 text-sm text-gray-200">
                  <span className="flex items-center gap-2"><FaEnvelope className="text-purple-400" /> info@sinappvalleytechs.com</span>
                  <span className="flex items-center gap-2"><FaEnvelope className="text-purple-400" /> valeria@sinappvalleytechs.com</span>
                  <span className="flex items-center gap-2"><FaPhoneAlt className="text-blue-400" /> +52 55 1234 5678</span>
                  <span className="flex items-center gap-2"><FaPhoneAlt className="text-blue-400" /> +52 55 8765 4321</span>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center md:items-end mt-6 md:mt-0">
                <span className="font-bold text-xl text-purple-400 mb-2">Redes Sociales</span>
                <div className="flex gap-4 text-2xl">
                  <motion.a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition" whileHover={{ scale: 1.2, rotate: -8 }} whileTap={{ scale: 0.95 }}><FaFacebook /></motion.a>
                  <motion.a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition" whileHover={{ scale: 1.2, rotate: 8 }} whileTap={{ scale: 0.95 }}><FaTwitter /></motion.a>
                  <motion.a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition" whileHover={{ scale: 1.2, rotate: -8 }} whileTap={{ scale: 0.95 }}><FaLinkedin /></motion.a>
                  <motion.a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition" whileHover={{ scale: 1.2, rotate: 8 }} whileTap={{ scale: 0.95 }}><FaInstagram /></motion.a>
                </div>
              </div>
            </div>
            <div className="w-full border-t border-gray-700 mt-6 pt-4 text-xs text-gray-400 flex flex-col items-center gap-2">
              <div className="flex flex-wrap gap-4 justify-center items-center">
                <a href="#" className="hover:underline hover:text-blue-300 transition">Políticas de privacidad</a>
                <span className="mx-2">/</span>
                <a href="#" className="hover:underline hover:text-blue-300 transition">Aviso legal</a>
              </div>
              <span>
                © {new Date().getFullYear()} Sinapp Valley Techs. Todos los derechos reservados.
              </span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

// AnimatedCounter component
function AnimatedBar({ label, value, max, color, icon }: { label: string; value: number; max: number; color: string; icon: React.ReactNode }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    if (isInView) {
      const duration = 1200;
      const startTime = performance.now();
      function animate(now: number) {
        const elapsed = now - startTime;
        const prog = Math.min(elapsed / duration, 1);
        setProgress(Math.floor(prog * value));
        if (prog < 1) requestAnimationFrame(animate);
        else setProgress(value);
      }
      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center bg-white/90 rounded-xl shadow p-6 min-w-[200px] w-full max-w-[240px]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div animate={{ scale: isInView ? 1.15 : 1 }} transition={{ type: 'spring', stiffness: 300 }} className="mb-2 text-4xl">
        {icon}
      </motion.div>
      <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden mb-2">
        <motion.div
          className={`h-4 rounded-full transition-all duration-700 ${color}`}
          style={{ width: `${Math.round((progress / max) * 100)}%` }}
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${Math.round((value / max) * 100)}%` : 0 }}
          transition={{ duration: 1 }}
        />
      </div>
      <span className="text-2xl font-extrabold text-blue-900 mb-1">{progress}</span>
      <span className="text-sm text-gray-600 font-medium text-center">{label}</span>
    </motion.div>
  );
}

// AnimatedTitle: animación de letras para el título
function AnimatedTitle({ text }: { text: string }) {
  return (
    <span className="inline-block">
      {[...text].map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 * i, duration: 0.4 }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}

// ParallaxImage: fondo decorativo con efecto parallax sutil
function ParallaxImage() {
  const [offset, setOffset] = React.useState(0);
  React.useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <motion.img
      src="/vite.svg"
      alt="Decorativo Parallax"
      className="absolute right-0 bottom-0 w-48 md:w-64 opacity-30 pointer-events-none select-none"
      style={{ transform: `translateY(${offset}px)` }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 0.3, y: 0 }}
      transition={{ duration: 1.2, delay: 0.5 }}
    />
  );
}

// Nuevo componente para carrusel infinito automático
function InfiniteTrainCarousel() {
  const integrantes = [
    {
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      nombre: "Juan Pérez",
      rol: "CEO & Fundador",
      desc: "Líder visionario y apasionado por la innovación tecnológica.",
      border: "border-blue-200"
    },
    {
      img: "https://randomuser.me/api/portraits/women/46.jpg",
      nombre: "Ana Gómez",
      rol: "CTO",
      desc: "Especialista en desarrollo de software y arquitecturas cloud.",
      border: "border-purple-200"
    },
    {
      img: "https://randomuser.me/api/portraits/men/47.jpg",
      nombre: "Carlos Ruiz",
      rol: "Lead DevOps",
      desc: "Experto en infraestructura, automatización y seguridad.",
      border: "border-blue-200"
    },
    {
      img: "https://randomuser.me/api/portraits/women/47.jpg",
      nombre: "Lucía Torres",
      rol: "UX/UI Designer",
      desc: "Diseñadora creativa enfocada en experiencia de usuario.",
      border: "border-purple-200"
    },
    {
      img: "https://randomuser.me/api/portraits/men/48.jpg",
      nombre: "Miguel López",
      rol: "AI Engineer",
      desc: "Desarrollador de soluciones de inteligencia artificial y ML.",
      border: "border-blue-200"
    }
  ];

  // Duplicar integrantes para efecto infinito
  const items = [...integrantes, ...integrantes];
  const [offset, setOffset] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let frame: number;
    let last = performance.now();
    function animate(now: number) {
      const delta = now - last;
      last = now;
      setOffset(prev => {
        let next = prev - (delta * 0.06); // velocidad
        // Ancho total de un item (incluyendo gap)
        const itemWidth = 220 + 32; // min-w-[220px] + gap-8 (32px)
        const totalWidth = itemWidth * integrantes.length;
        if (Math.abs(next) >= totalWidth) {
          return 0;
        }
        return next;
      });
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="flex gap-8 py-4 min-w-[700px]" ref={ref} style={{ transform: `translateX(${offset}px)` }}>
      {items.map((item, idx) => (
        <div key={idx} className="flex flex-col items-center bg-gray-50 rounded-lg p-6 shadow min-w-[220px]">
          <img src={item.img} alt={item.nombre} className={`w-20 h-20 rounded-full object-cover mb-3 border-4 ${item.border} shadow`} />
          <span className="font-bold text-blue-900 text-lg">{item.nombre}</span>
          <span className="text-purple-700 text-sm mb-2">{item.rol}</span>
          <span className="text-gray-600 text-xs text-center">{item.desc}</span>
        </div>
      ))}
    </div>
  );
}

export default App;
