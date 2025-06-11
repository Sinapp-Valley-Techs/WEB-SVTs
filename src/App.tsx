import "./App.css";
import React, { useState } from "react";
import { FaLaptopCode, FaServer, FaLightbulb, FaRobot, FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhoneAlt, FaImage, FaVideo, FaUserAstronaut, FaComments, FaCogs, FaTools, FaBars, FaTimes } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    sectionId: string
  ) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false); // Cerrar menú en móvil después de hacer clic
  };

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'agents', label: 'Agents' },
    { id: 'noticias', label: 'Noticias' },
    { id: 'faq', label: 'FAQ' },
    { id: 'footer-contacto', label: 'Contacto' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center shadow z-20 bg-white/80 text-blue-900 border-b border-gray-200 backdrop-blur-md">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img
          src="/imagenes/Logo Sinapp Valley Techs.jpg"
          alt="Logo Sinapp Valley Techs"
          className="w-10 h-10 rounded-full object-cover border-2 shadow-sm bg-white border-blue-700"
        />
        <span className="font-bold text-xl tracking-wide select-none leading-tight whitespace-nowrap">
          {/* Desktop: una sola línea, móvil: salto de línea */}
          <span className="hidden md:inline">Sinapp Valley Techs</span>
          <span className="inline md:hidden">Sinapp Valley<br />Techs</span>
        </span>
      </div>

      {/* Botón hamburguesa (solo en móvil) */}
      <div
        className="md:hidden text-2xl cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Menú en pantallas grandes */}
      <ul className="hidden md:flex gap-6 items-center">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href="#"
              className="relative px-3 py-1 rounded-md font-medium transition-colors duration-200 group hover:bg-blue-50 hover:text-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              onClick={(e) => handleNavClick(e, item.id)}
            >
              <span className="group-hover:text-purple-700 group-focus:text-purple-700">
                {item.label}
              </span>
              <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 rounded-full transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-400 group-hover:w-2/3 group-focus:w-2/3 group-hover:h-1 group-focus:h-1 group-hover:opacity-80 group-focus:opacity-80 opacity-0" style={{ transform: 'translateX(-50%)' }}></span>
              <span className="absolute inset-0 pointer-events-none rounded-md transition-all duration-200 group-hover:ring-2 group-hover:ring-blue-400 group-hover:ring-opacity-40 group-focus:ring-2 group-focus:ring-blue-400 group-focus:ring-opacity-60"></span>
            </a>
          </li>
        ))}
      </ul>

      {/* Menú desplegable en móvil */}
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-white shadow-md py-4 flex flex-col items-center gap-4 md:hidden z-10">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href="#"
                className="text-blue-900 font-medium hover:text-purple-700"
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

function App() {
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
        <div className="w-24 h-24 rounded-full flex items-center justify-center bg-gradient-to-tr from-blue-700 to-purple-400 shadow-lg animate-pulse overflow-hidden">
          <img
            src="/imagenes/Logo Sinapp Valley Techs.jpg"
            alt="Logo Sinapp Valley Techs"
            className="w-20 h-20 object-cover rounded-full border-2 border-blue-700 shadow-md bg-white"
          />
        </div>
        <span className="mt-6 text-2xl font-bold text-blue-900 animate-fade-in-slow">Sinapp Valley Techs</span>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className={showApp ? 'animate-app-fade-in' : 'opacity-0'}>
        <div className="relative flex flex-col min-h-screen overflow-x-hidden overflow-y-auto w-full bg-gray-50" style={{ boxShadow: 'none', borderLeft: 'none', borderRight: 'none', maxWidth: '100vw', paddingLeft: 0, paddingRight: 0 }}>
          <main id="inicio" className="flex-1 flex flex-col items-center justify-center pt-24 w-full px-0">
            {/* INICIO HERO CON PARALLAX Y TEXTO ANIMADO */}
            <section className="relative w-full flex flex-col items-center justify-center mb-8 bg-white/80 rounded-xl shadow-lg p-4 md:p-8 scroll-mt-24 overflow-hidden">
              {/* Fondo parallax sutil */}
              <div
                className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-100 via-purple-100 to-white opacity-80 pointer-events-none"
                style={{ backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover' }}
              />
              {/* Imagen decorativa parallax */}
              <ParallaxImage />
              <motion.h1
                className="text-4xl md:text-7xl font-extrabold text-blue-900 mb-2 text-center drop-shadow leading-tight"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                {/* Desktop: una línea, Mobile: dos líneas */}
                <span className="hidden md:inline">Sinapp Valley Techs</span>
                <span className="inline md:hidden">Sinapp Valley<br />Techs</span>
              </motion.h1>
              <motion.h2
                className="text-2xl md:text-3xl font-semibold text-purple-700 mb-4 text-center italic"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                Innovamos con inteligencia, transformamos con propósito.
              </motion.h2>
              <button
                onClick={e => {
                  e.preventDefault();
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
              className="w-full bg-white/80 rounded-xl shadow-lg p-4 md:p-8 mb-8 scroll-mt-24"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Sobre Nosotros</h2>
              {/* Quiénes somos */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-purple-700 mb-2">¿Quiénes somos?</h3>
                <p className="text-gray-700">Somos agencia de inteligencia artificial dedicada a conectar personas y procesos con IA a través de experiencias y productividad. Creemos que la tecnología no solo debe asistir, sino también potenciar la vida de las personas en todos los niveles.</p>
              </div>
              {/* Misión, Visión y Valores */}
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-gray-100 rounded-lg p-4 shadow">
                  <h4 className="font-bold text-blue-900 mb-1">Misión</h4>
                  <p className="text-gray-700 text-sm">Creamos arquitectura de software, agentes, aplicaciones y páginas web que integran IA para generar conexiones más significativas y optimizar el tiempo de nuestros usuarios, automatizamos empresas y organizaciones, creando soluciones personalizadas que mejoran eficiencia y experiencia del cliente.</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 shadow">
                  <h4 className="font-bold text-blue-900 mb-1">Visión</h4>
                  <p className="text-gray-700 text-sm">Convertirnos en líderes mundiales en la creación de valor a través de IA, impulsando personas y empresas hacia un futuro más eficiente, personalizado y humano.</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 shadow">
                  <h4 className="font-bold text-blue-900 mb-1">Valores</h4>
                  <ul className="list-disc list-inside text-gray-700 text-sm">
                    <li>💜 Empatía: Primero las personas, porque somos personas.</li>
                    <li>🧠 Consciencia: Razonamos de lo general a lo particular y viceversa, consideramos causa- efecto.</li>
                    <li>⚡ Adaptabilidad: Nos ajustamos y evolucionamos para aprovechar cada oportunidad del entorno.</li>
                  </ul>
                </div>
              </div>
              {/* Enfoque */}
              <div>
                <h3 className="text-xl font-semibold text-purple-700 mb-2">Nuestro Enfoque</h3>
                <p className="text-gray-700">Sinapp Valley Techs es el lugar donde la IA y la humanidad se encuentran para crear un presente más brillante, innovamos con inteligencia, transformamos con propósito.🚀✨</p>
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
              className="w-full bg-white/80 rounded-xl shadow-lg p-4 md:p-8 mb-8 scroll-mt-24 overflow-hidden"
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
              className="w-full bg-white/80 rounded-xl shadow-lg p-4 md:p-8 mb-8 scroll-mt-24"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Servicios</h2>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {/* Agentes virtuales con personalidad propia */}
                <div className="flex flex-col items-center bg-gray-50 rounded-lg p-6 shadow group hover:shadow-xl transition">
                  <motion.div
                    className="mb-3"
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <FaUserAstronaut className="w-10 h-10 text-blue-700 group-hover:text-blue-900 transition" />
                  </motion.div>
                  <h3 className="font-bold text-lg text-blue-900 mb-2">Agentes virtuales con personalidad propia</h3>
                  <p className="text-gray-600 text-sm mb-4 text-center">Agentes conversacionales en WhatsApp para gestionar recordatorios, pendientes, finanzas y rutinas.</p>
                  <button className="mt-auto px-4 py-2 bg-blue-900 text-white rounded-lg shadow hover:bg-blue-800 transition text-sm">Solicitar demo</button>
                </div>
                {/* Agentes virtuales */}
                <div className="flex flex-col items-center bg-gray-50 rounded-lg p-6 shadow group hover:shadow-xl transition">
                  <motion.div
                    className="mb-3"
                    whileHover={{ scale: 1.15, rotate: -8 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <FaComments className="w-10 h-10 text-purple-600 group-hover:text-purple-800 transition" />
                  </motion.div>
                  <h3 className="font-bold text-lg text-blue-900 mb-2">Agentes virtuales</h3>
                  <p className="text-gray-600 text-sm mb-4 text-center">Adaptados a usuarios individuales o negocios, con una personalidad ligera, funcional y amigable.</p>
                  <button className="mt-auto px-4 py-2 bg-blue-900 text-white rounded-lg shadow hover:bg-blue-800 transition text-sm">Solicitar demo</button>
                </div>
                {/* Automatización inteligente de procesos para empresas */}
                <div className="flex flex-col items-center bg-gray-50 rounded-lg p-6 shadow group hover:shadow-xl transition">
                  <motion.div
                    className="mb-3"
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <FaCogs className="w-10 h-10 text-blue-400 group-hover:text-blue-700 transition" />
                  </motion.div>
                  <h3 className="font-bold text-lg text-blue-900 mb-2">Automatización inteligente de procesos para empresas</h3>
                  <p className="text-gray-600 text-sm mb-4 text-center">Diseño de sistemas automáticos con IA para negocios y organizaciones.</p>
                  <button className="mt-auto px-4 py-2 bg-blue-900 text-white rounded-lg shadow hover:bg-blue-800 transition text-sm">Solicitar demo</button>
                </div>
                {/* Contenido visual generado con IA */}
                <div className="flex flex-col items-center bg-gray-50 rounded-lg p-6 shadow group hover:shadow-xl transition">
                  <motion.div
                    className="mb-3"
                    whileHover={{ scale: 1.15, rotate: -8 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <FaImage className="w-10 h-10 text-purple-400 group-hover:text-purple-700 transition" />
                  </motion.div>
                  <h3 className="font-bold text-lg text-blue-900 mb-2">Contenido visual generado con IA</h3>
                  <p className="text-gray-600 text-sm mb-4 text-center">Entrenamiento de modelos únicos con Astria, DreamBooth o similares para mantener consistencia estética.</p>
                  <button className="mt-auto px-4 py-2 bg-blue-900 text-white rounded-lg shadow hover:bg-blue-800 transition text-sm">Ver más</button>
                </div>
                {/* Contenido audiovisual generado con IA */}
                <div className="flex flex-col items-center bg-gray-50 rounded-lg p-6 shadow group hover:shadow-xl transition">
                  <motion.div
                    className="mb-3"
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <FaVideo className="w-10 h-10 text-blue-500 group-hover:text-blue-800 transition" />
                  </motion.div>
                  <h3 className="font-bold text-lg text-blue-900 mb-2">Contenido audiovisual generado con IA</h3>
                  <p className="text-gray-600 text-sm mb-4 text-center">Desarrollo futuro de videos realistas con IA (avatars, deepfakes controlados, narrativas interactivas).</p>
                  <button className="mt-auto px-4 py-2 bg-blue-900 text-white rounded-lg shadow hover:bg-blue-800 transition text-sm">Ver más</button>
                </div>
                {/* Producción y edición */}
                <div className="flex flex-col items-center bg-gray-50 rounded-lg p-6 shadow group hover:shadow-xl transition">
                  <motion.div
                    className="mb-3"
                    whileHover={{ scale: 1.15, rotate: -8 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <FaTools className="w-10 h-10 text-blue-300 group-hover:text-blue-600 transition" />
                  </motion.div>
                  <h3 className="font-bold text-lg text-blue-900 mb-2">Producción y edición</h3>
                  <p className="text-gray-600 text-sm mb-4 text-center">Producción y edición con herramientas como CapCut, HeyGen y Runway.</p>
                  <button className="mt-auto px-4 py-2 bg-blue-900 text-white rounded-lg shadow hover:bg-blue-800 transition text-sm">Ver más</button>
                </div>
              </div>
            </motion.section>
            {/* AGENTS */}
            <motion.section
              id="agents"
              className="w-full bg-white/80 rounded-xl shadow-lg p-4 md:p-8 mb-8 scroll-mt-24"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Agents</h2>
              <div className="flex flex-col gap-8 mb-8">
                {/* Val Business */}
                <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-lg p-6 shadow group hover:shadow-xl transition">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Valeria Business" className="w-28 h-28 rounded-full object-cover mb-4 md:mb-0 md:mr-8 border-4 border-blue-200 shadow" />
                  <div className="flex-1 flex flex-col items-center md:items-start">
                    <h3 className="font-bold text-2xl text-blue-900 mb-1">Val Business</h3>
                    <div className="text-gray-600 text-base mb-2 text-center md:text-left flex flex-col gap-2">
                      <span>Conoce a <b>Val Business</b>, tu nueva agente inteligente personal disponible en WhatsApp.</span>
                      <span>¿Mucho por hacer y poco tiempo para organizarlo? Val Business está aquí para rescatarte del caos. No es solo un bot… es una aliada eficiente y con estilo, diseñada para ayudarte a:</span>
                      <ul className="list-disc list-inside ml-4 text-sm text-left">
                        <li>✅ Crear y gestionar tu lista de pendientes</li>
                        <li>⏰ Agendar recordatorios inteligentes que no se te olvidan</li>
                        <li>📅 (Próximamente) Agendar citas por correo automático</li>
                        <li>🔐 (Próximamente) Guardar tus contraseñas de forma segura</li>
                        <li>💸 (Próximamente) Llevar tus finanzas personales sin estrés</li>
                      </ul>
                      <span>Todo desde WhatsApp, con lenguaje natural, respuestas rápidas y una actitud elegante, decidida y 100% business.</span>
                      <span className="font-bold text-green-700">🆓 ¡El servicio es gratuito por tiempo limitado!</span>
                      <span>Solo mándale un “Hola, Val” e inicia tu registro al número <b>📲 +52-55-5141-1321</b> y empieza a organizar tu vida como si tuvieras una asistente ejecutiva 24/7.</span>
                    </div>
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
              className="w-full bg-white/80 rounded-xl shadow-lg p-4 md:p-8 mb-8 scroll-mt-24"
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
              className="w-full bg-white/80 rounded-xl shadow-lg p-4 md:p-8 mb-8 scroll-mt-24"
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
          <footer
            className={`w-full left-1/2 right-1/2 -translate-x-1/2 bg-neutral-900 text-white text-center py-8 mt-8 shadow-inner flex flex-col items-center gap-6 md:gap-4`}
            id="footer-contacto"
            style={{ borderRadius: 0, boxShadow: 'none', position: 'relative' }}
          >
            {/* Bloque de contacto/redes: siempre visible en mobile y desktop */}
            <div
              className={
                'w-full max-w-4xl px-4 flex flex-col md:flex-row md:justify-between gap-8 md:gap-0'
              }
            >
              <div className="flex-1 flex flex-col items-center md:items-start mb-6 md:mb-0">
                <span className="font-bold text-2xl md:text-xl text-blue-400 mb-2">Contacto</span>
                <div className="flex flex-col gap-2 text-base md:text-sm text-gray-200">
                  <span className="flex items-center gap-2"><FaEnvelope className="text-purple-400 text-xl md:text-base" /> SinappValleyTechs@gmail.com</span>
                  <span className="flex items-center gap-2"><FaPhoneAlt className="text-blue-400 text-xl md:text-base" /> +52 55 52 17 32 92</span>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center md:items-end mt-0 md:mt-0">
                <span className="font-bold text-2xl md:text-xl text-purple-400 mb-2">Redes Sociales</span>
                <div className="flex gap-6 md:gap-4 text-3xl md:text-2xl">
                  <motion.a href="https://www.facebook.com/profile.php?id=100068276588366" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition" whileHover={{ scale: 1.2, rotate: -8 }} whileTap={{ scale: 0.95 }}><FaFacebook /></motion.a>
                  <motion.a href="https://x.com/SinappValley" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition" whileHover={{ scale: 1.2, rotate: 8 }} whileTap={{ scale: 0.95 }}><FaTwitter /></motion.a>
                  <motion.a href="https://www.instagram.com/sinappvalley?igsh=MWZqcjRubjZyeDNmYg==" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition" whileHover={{ scale: 1.2, rotate: 8 }} whileTap={{ scale: 0.95 }}><FaInstagram /></motion.a>
                </div>
              </div>
            </div>
            {/* Políticas y copyright: siempre visible */}
            <div className="w-full border-t border-gray-700 mt-8 pt-6 text-xs md:text-xs text-gray-400 flex flex-col items-center gap-3 md:gap-2 px-2">
              <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center w-full">
                <a href="#" className="hover:underline hover:text-blue-300 transition">Políticas de privacidad</a>
                <span className="hidden md:inline mx-2">/</span>
                <a href="#" className="hover:underline hover:text-blue-300 transition">Aviso legal</a>
              </div>
              <span className="block text-center w-full">
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


// ParallaxImage: fondo decorativo con efecto parallax sutil
function ParallaxImage() {
  // Imagen deshabilitada temporalmente
  return null;
}

// Nuevo componente para carrusel infinito automático
function InfiniteTrainCarousel() {
  const integrantes = [
    {
      img: "imagenes/img_vic.jpg",
      nombre: "Victor Hernandez",
      rol: "CEO & Fundador",
      desc: "Líder visionario y apasionado por la innovación tecnológica.",
      border: "border-blue-200"
    },
    {
      img: "https://randomuser.me/api/portraits/men/46.jpg",
      nombre: "Christian Arteaga",
      rol: "Desarrollador Python",
      desc: "Especialista en backend y automatización de procesos.",
      border: "border-blue-200"
    },
    {
      img: "https://randomuser.me/api/portraits/men/47.jpg",
      nombre: "Josue Valverde",
      rol: "Desarrollador Python",
      desc: "Experto en desarrollo de aplicaciones y sistemas inteligentes.",
      border: "border-blue-200"
    },
    {
      img: "https://randomuser.me/api/portraits/men/48.jpg",
      nombre: "Angel Castro",
      rol: "Desarrollador Python",
      desc: "Especialista en integración de IA y automatización.",
      border: "border-blue-200"
    },
    {
      img: "https://randomuser.me/api/portraits/men/49.jpg",
      nombre: "Josue Belmont",
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