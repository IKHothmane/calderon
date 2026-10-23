import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, ArrowUpRight, Menu, X, Phone, MapPin, Clock3, Instagram, Facebook, Scissors, Sparkles, Heart, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const PHONE_DISPLAY = '+34 954 21 22 75';
const PHONE_LINK = '+34954212275';
const MAP_LINK = 'https://www.google.com/maps/dir/?api=1&destination=Calder%C3%B3n+Peluquer%C3%ADa%2C+C.+Acetres%2C+1%2C+Sevilla';
const MAP_EMBED = 'https://maps.google.com/maps?q=Calder%C3%B3n%20Peluquer%C3%ADa%2C%20C.%20Acetres%201%2C%20Sevilla&t=&z=16&ie=UTF8&iwloc=&output=embed';

const copy = {
  es: {
    nav: ['Filosofía', 'Servicios', 'Inspiración', 'Contacto'],
    eyebrow: 'PELUQUERÍA · SEVILLA',
    hero1: 'Tu cabello,',
    hero2: 'tu manera.',
    heroText: 'Un espacio para expresarte, cuidarte y encontrar el estilo que habla de ti.',
    book: 'Llamar para reservar',
    discover: 'Descubrir el salón',
    introKicker: 'UNA FORMA PERSONAL DE ENTENDER EL CABELLO',
    introTitle: 'La belleza está en sentirte tú.',
    introText: 'Escuchamos, asesoramos y trabajamos contigo para encontrar un resultado que encaje con tu personalidad y tu día a día.',
    philosophy: 'Nuestra filosofía',
    serviceKicker: 'CUIDADO CON INTENCIÓN',
    serviceTitle: 'Un estilo que se siente tuyo.',
    serviceText: 'Cada cabello tiene su historia. Cuéntanos qué imaginas y te ayudaremos a encontrar el camino.',
    services: [
      ['Corte & estilo', 'Cortes personalizados, forma y movimiento que se adaptan a ti.'],
      ['Color & mechas', 'Coloración y técnicas de iluminación pensadas para tu cabello.'],
      ['Balayage', 'Dimensión y luz con un acabado natural y lleno de matices.'],
      ['Rizos & textura', 'Cuidado y definición respetando la naturaleza de tu cabello.'],
      ['Tratamientos capilares', 'Asesoramiento para cuidar la fibra capilar y mejorar su aspecto.'],
      ['Peinados', 'Acabados para tu día a día o para una ocasión especial.']
    ],
    note: 'Los servicios y resultados se valoran de forma personalizada. Consulta disponibilidad y precio por teléfono.',
    galleryKicker: 'INSPIRACIÓN',
    galleryTitle: 'Textura. Luz. Personalidad.',
    galleryText: 'Una pequeña selección visual de referencias de estilo. Las imágenes son ilustrativas y no representan trabajos oficiales del salón.',
    contactKicker: 'TE ESPERAMOS EN SEVILLA',
    contactTitle: 'Hablemos de tu próximo look.',
    contactText: 'Llámanos para consultar disponibilidad y reservar tu cita.',
    call: 'Llamar al salón',
    addressLabel: 'Dirección',
    hoursLabel: 'Horario publicado',
    weekdays: 'Lunes – viernes',
    saturday: 'Sábado',
    sunday: 'Domingo',
    closed: 'Cerrado',
    directions: 'Cómo llegar',
    footerLine: 'Tu estilo empieza con una conversación.',
    rights: 'Todos los derechos reservados.',
    menu: 'Abrir menú',
    close: 'Cerrar menú',
    imageAlt: 'Inspiración de peluquería'
  },
  en: {
    nav: ['Philosophy', 'Services', 'Inspiration', 'Contact'],
    eyebrow: 'HAIR SALON · SEVILLE',
    hero1: 'Your hair,',
    hero2: 'your way.',
    heroText: 'A space to express yourself, feel cared for and find a style that speaks to you.',
    book: 'Call to book',
    discover: 'Discover the salon',
    introKicker: 'A PERSONAL APPROACH TO HAIR',
    introTitle: 'Beauty is feeling like yourself.',
    introText: 'We listen, advise and work with you to find a result that fits your personality and everyday life.',
    philosophy: 'Our philosophy',
    serviceKicker: 'CARE WITH INTENTION',
    serviceTitle: 'A style that feels like you.',
    serviceText: 'Every head of hair has a story. Tell us what you have in mind and we’ll help you find the way.',
    services: [
      ['Cut & styling', 'Personalised cuts, shape and movement tailored to you.'],
      ['Colour & highlights', 'Colour services and lightening techniques considered for your hair.'],
      ['Balayage', 'Dimension and light with a natural, nuanced finish.'],
      ['Curls & texture', 'Care and definition that respect your hair’s natural texture.'],
      ['Hair treatments', 'Guidance to care for the hair fibre and improve its appearance.'],
      ['Styling', 'Finishing touches for everyday wear or a special occasion.']
    ],
    note: 'Services and results are assessed individually. Please call to ask about availability and prices.',
    galleryKicker: 'INSPIRATION',
    galleryTitle: 'Texture. Light. Personality.',
    galleryText: 'A small visual selection of style references. Images are illustrative and do not represent the salon’s official work.',
    contactKicker: 'FIND US IN SEVILLE',
    contactTitle: 'Let’s talk about your next look.',
    contactText: 'Call us to check availability and book your appointment.',
    call: 'Call the salon',
    addressLabel: 'Address',
    hoursLabel: 'Published opening hours',
    weekdays: 'Monday – Friday',
    saturday: 'Saturday',
    sunday: 'Sunday',
    closed: 'Closed',
    directions: 'Get directions',
    footerLine: 'Your style starts with a conversation.',
    rights: 'All rights reserved.',
    menu: 'Open menu',
    close: 'Close menu',
    imageAlt: 'Hair salon style inspiration'
  },
  fr: {
    nav: ['Philosophie', 'Prestations', 'Inspiration', 'Contact'],
    eyebrow: 'SALON DE COIFFURE · SÉVILLE',
    hero1: 'Vos cheveux,',
    hero2: 'à votre image.',
    heroText: 'Un espace pour vous exprimer, prendre soin de vous et trouver un style qui vous ressemble.',
    book: 'Appeler pour réserver',
    discover: 'Découvrir le salon',
    introKicker: 'UNE APPROCHE PERSONNALISÉE DU CHEVEU',
    introTitle: 'La beauté, c’est se sentir soi-même.',
    introText: 'Nous vous écoutons, vous conseillons et cherchons avec vous un résultat adapté à votre personnalité et à votre quotidien.',
    philosophy: 'Notre philosophie',
    serviceKicker: 'LE SOIN AVEC INTENTION',
    serviceTitle: 'Un style qui vous ressemble.',
    serviceText: 'Chaque chevelure a son histoire. Parlez-nous de vos envies et nous vous aiderons à trouver la bonne approche.',
    services: [
      ['Coupe & coiffage', 'Des coupes personnalisées, une forme et un mouvement adaptés à vous.'],
      ['Couleur & mèches', 'Coloration et techniques d’éclaircissement pensées pour vos cheveux.'],
      ['Balayage', 'De la lumière et du relief avec un résultat naturel et nuancé.'],
      ['Boucles & texture', 'Des soins et une définition qui respectent la nature de vos cheveux.'],
      ['Soins capillaires', 'Des conseils pour prendre soin de la fibre et améliorer son aspect.'],
      ['Coiffures', 'Des finitions pour le quotidien ou une occasion spéciale.']
    ],
    note: 'Les prestations et résultats sont évalués au cas par cas. Appelez-nous pour connaître les disponibilités et les tarifs.',
    galleryKicker: 'INSPIRATION',
    galleryTitle: 'Texture. Lumière. Personnalité.',
    galleryText: 'Une petite sélection visuelle de références de style. Les images sont illustratives et ne représentent pas les réalisations officielles du salon.',
    contactKicker: 'RENDEZ-VOUS À SÉVILLE',
    contactTitle: 'Parlons de votre prochain look.',
    contactText: 'Appelez-nous pour connaître les disponibilités et réserver votre rendez-vous.',
    call: 'Appeler le salon',
    addressLabel: 'Adresse',
    hoursLabel: 'Horaires publiés',
    weekdays: 'Lundi – vendredi',
    saturday: 'Samedi',
    sunday: 'Dimanche',
    closed: 'Fermé',
    directions: 'Itinéraire',
    footerLine: 'Votre style commence par une conversation.',
    rights: 'Tous droits réservés.',
    menu: 'Ouvrir le menu',
    close: 'Fermer le menu',
    imageAlt: 'Inspiration coiffure'
  }
};

const photos = [
  { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85', alt: 'Portrait beauté et coiffure', shape: 'tall' },
  { src: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1000&q=85', alt: 'Détail de coiffure et texture', shape: 'wide' },
  { src: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1000&q=85', alt: 'Espace de salon de coiffure', shape: 'square' }
];

function App() {
  const [lang, setLang] = useState('es');
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[lang];
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-kicker, .hero-title-line, .hero-copy, .hero-actions, .hero-foot',
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: 'power3.out', delay: 0.15 }
      );
      gsap.fromTo('.hero-image', { scale: 1.08, opacity: 0.5 }, {
        scale: 1, opacity: 1, duration: 1.5, ease: 'power2.out', delay: 0.1
      });
      gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.fromTo(el, { y: 38, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.85, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true }
        });
      });
      gsap.utils.toArray('.service-card').forEach((el, i) => {
        gsap.fromTo(el, { y: 25, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.65, delay: (i % 3) * 0.09, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 92%', once: true }
        });
      });
      gsap.to('.hero-image img', {
        yPercent: 8, ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
      });
    }, root);
    return () => ctx.revert();
  }, [lang]);

  const goTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="site-shell" ref={root}>
      <div className="topline"><span>SEVILLA · ESPAÑA</span><span>EST. PERSONAL STYLE / HUMAN TOUCH</span></div>
      <header className="header">
        <a className="brand" href="#home" onClick={(e) => { e.preventDefault(); goTo('home'); }}>
          <span className="brand-mark"><Scissors size={19} strokeWidth={1.4} /></span>
          <span className="brand-name">CALDERÓN<small>PELUQUERÍA</small></span>
        </a>
        <nav className={`desktop-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {t.nav.map((label, i) => <button key={label} onClick={() => goTo(['philosophy','services','gallery','contact'][i])}>{label}</button>)}
        </nav>
        <div className="header-right">
          <div className="language-switch" aria-label="Language selector">
            {['es', 'en', 'fr'].map(l => <button key={l} className={lang === l ? 'active' : ''} onClick={() => setLang(l)} aria-pressed={lang === l}>{l.toUpperCase()}</button>)}
          </div>
          <a className="header-book" href={`tel:${PHONE_LINK}`}>{t.book}<ArrowUpRight size={15} /></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(v => !v)} aria-label={menuOpen ? t.close : t.menu}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy-wrap">
            <div className="hero-kicker"><span className="tiny-line" />{t.eyebrow}</div>
            <h1 className="hero-title"><span className="hero-title-line">{t.hero1}</span><span className="hero-title-line italic">{t.hero2}</span></h1>
            <p className="hero-copy">{t.heroText}</p>
            <div className="hero-actions">
              <a className="button button-dark" href={`tel:${PHONE_LINK}`}><Phone size={16} />{t.book}<ArrowUpRight size={16} /></a>
              <button className="text-link" onClick={() => goTo('philosophy')}>{t.discover}<ArrowDown size={15} /></button>
            </div>
            <div className="hero-foot"><span>37°23'29.0"N&nbsp; 5°59'35.3"W</span><span>01 / 04</span></div>
          </div>
          <div className="hero-visual">
            <div className="hero-image">
              <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1500&q=90" alt="Inspiración editorial de peluquería; imagen ilustrativa" fetchPriority="high" />
              <div className="image-overlay" />
            </div>
            <div className="image-caption"><span>TEXTURA · FORMA · MOVIMIENTO</span><span>SEVILLA, ANDALUCÍA</span></div>
            <div className="round-stamp"><span>BEAUTY IN YOUR OWN WAY · </span><Sparkles size={17} /></div>
          </div>
          <div className="hero-side-note">UN ESTILO QUE CUENTA TU HISTORIA</div>
        </section>

        <section className="intro section-pad" id="philosophy">
          <div className="intro-label reveal"><span className="section-number">01</span><span>{t.introKicker}</span></div>
          <div className="intro-content reveal">
            <h2>{t.introTitle}</h2>
            <div className="intro-bottom"><p>{t.introText}</p><div className="signature"><span className="signature-line" /><span>{t.philosophy}</span></div></div>
          </div>
          <div className="intro-decoration" aria-hidden="true">C.</div>
        </section>

        <section className="services section-pad" id="services">
          <div className="section-heading reveal">
            <div><div className="eyebrow"><span className="section-number">02</span>{t.serviceKicker}</div><h2>{t.serviceTitle}</h2></div>
            <p>{t.serviceText}</p>
          </div>
          <div className="services-grid">
            {t.services.map((s, i) => <article className="service-card" key={s[0]}>
              <div className="service-top"><span className="service-index">0{i + 1}</span><span className="service-icon">{i % 2 === 0 ? <Scissors size={19} /> : <Sparkles size={19} />}</span></div>
              <h3>{s[0]}</h3><p>{s[1]}</p>
              <button className="service-link" onClick={() => goTo('contact')} aria-label={`${s[0]} — ${t.call}`}><ChevronRight size={18} /></button>
            </article>)}
          </div>
          <p className="service-note"><span>*</span>{t.note}</p>
        </section>

        <section className="gallery section-pad" id="gallery">
          <div className="gallery-head reveal"><div className="eyebrow"><span className="section-number">03</span>{t.galleryKicker}</div><h2>{t.galleryTitle}</h2><p>{t.galleryText}</p></div>
          <div className="gallery-grid">
            {photos.map((photo, i) => <figure className={`gallery-item ${photo.shape} reveal`} key={photo.src}>
              <img src={photo.src} alt={`${t.imageAlt} ${i + 1}`} loading="lazy" />
              <span className="gallery-count">0{i + 1} / 03</span>
            </figure>)}
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="contact-main reveal">
            <div className="eyebrow"><span className="section-number">04</span>{t.contactKicker}</div>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactText}</p>
            <a className="button button-light" href={`tel:${PHONE_LINK}`}><Phone size={16} />{t.call}<ArrowUpRight size={16} /></a>
            <div className="contact-phone">{PHONE_DISPLAY}</div>
          </div>
          <div className="contact-details reveal">
            <div className="detail-block"><MapPin size={18} /><div><span className="detail-label">{t.addressLabel}</span><p>C. Acetres, 1<br />Casco Antiguo, 41004 Sevilla, España</p><a href={MAP_LINK} target="_blank" rel="noreferrer">{t.directions}<ArrowUpRight size={14} /></a></div></div>
            <div className="detail-block"><Clock3 size={18} /><div><span className="detail-label">{t.hoursLabel}</span><div className="hours-row"><span>{t.weekdays}</span><span>09:00 — 19:00</span></div><div className="hours-row"><span>{t.saturday}</span><span>09:00 — 14:00</span></div><div className="hours-row"><span>{t.sunday}</span><span>{t.closed}</span></div></div></div>
          </div>
          <div className="map-frame"><iframe title="Calderón Peluquería en Google Maps" src={MAP_EMBED} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand footer-brand" href="#home" onClick={(e) => { e.preventDefault(); goTo('home'); }}><span className="brand-mark"><Scissors size={18} strokeWidth={1.4} /></span><span className="brand-name">CALDERÓN<small>PELUQUERÍA</small></span></a>
        <p>{t.footerLine}</p>
        <div className="footer-right"><a href="https://www.facebook.com/calderonpeluqueria" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={17} /></a><a href={MAP_LINK} target="_blank" rel="noreferrer" aria-label="Google Maps"><MapPin size={17} /></a><span>© {new Date().getFullYear()} CALDERÓN. {t.rights}</span></div>
      </footer>
      <a className="mobile-call" href={`tel:${PHONE_LINK}`}><Phone size={17} />{t.book}</a>
    </div>
  );
}

export default App;
