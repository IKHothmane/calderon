import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, ArrowUpRight, Menu, Phone, MapPin, Clock3, Facebook, Scissors, Sparkles, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ShinyButton } from '@/components/ui/shiny-button';
import { BlurFade } from '@/components/ui/blur-fade';
import { AnimatedShinyText } from '@/components/ui/animated-shiny-text';

gsap.registerPlugin(ScrollTrigger);

const PHONE_DISPLAY = '+34 954 21 22 75';
const PHONE_LINK = '+34954212275';
const MAP_LINK = 'https://www.google.com/maps/dir/?api=1&destination=Calder%C3%B3n+Peluquer%C3%ADa%2C+C.+Acetres%2C+1%2C+Sevilla';
const MAP_EMBED = 'https://maps.google.com/maps?q=Calder%C3%B3n%20Peluquer%C3%ADa%2C%20C.%20Acetres%201%2C%20Sevilla&t=&z=16&ie=UTF8&iwloc=&output=embed';

const copy = {
  es: {
    nav: ['Filosofía', 'Servicios', 'El salón', 'Contacto'],
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
    galleryKicker: 'EL SALÓN',
    galleryTitle: 'Espacio. Luz. Atmósfera.',
    galleryText: 'Fotos reales de Calderón Peluquería en C. Acetres 1, Sevilla. Un lugar cálido para cuidarte y encontrar tu estilo.',
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
    imageAlt: 'Calderón Peluquería Sevilla',
    heroAlt: 'Interior del salón Calderón Peluquería',
    facadeAlt: 'Fachada de Calderón Peluquería en C. Acetres 1',
    interiorAlt: 'Espacio interior del salón Calderón'
  },
  en: {
    nav: ['Philosophy', 'Services', 'The salon', 'Contact'],
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
    galleryKicker: 'THE SALON',
    galleryTitle: 'Space. Light. Atmosphere.',
    galleryText: 'Real photos of Calderón Peluquería at C. Acetres 1, Seville. A warm place to take care of yourself and find your style.',
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
    imageAlt: 'Calderón Peluquería Seville',
    heroAlt: 'Interior of Calderón Peluquería salon',
    facadeAlt: 'Storefront of Calderón Peluquería on C. Acetres 1',
    interiorAlt: 'Interior space of Calderón salon'
  },
  fr: {
    nav: ['Philosophie', 'Prestations', 'Le salon', 'Contact'],
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
    galleryKicker: 'LE SALON',
    galleryTitle: 'Espace. Lumière. Atmosphère.',
    galleryText: 'Photos réelles de Calderón Peluquería, C. Acetres 1, Séville. Un lieu chaleureux pour prendre soin de vous et trouver votre style.',
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
    imageAlt: 'Calderón Peluquería Séville',
    heroAlt: 'Intérieur du salon Calderón Peluquería',
    facadeAlt: 'Façade de Calderón Peluquería, C. Acetres 1',
    interiorAlt: 'Espace intérieur du salon Calderón'
  }
};

const photos = [
  { src: '/images/salon-facade.jpg', altKey: 'facadeAlt', shape: 'tall', position: 'center 40%' },
  { src: '/images/salon-interior.jpg', altKey: 'interiorAlt', shape: 'wide', position: 'center 45%' },
  { src: '/images/salon-interior.jpg', altKey: 'interiorAlt', shape: 'square', position: '78% 55%' }
];

function App() {
  const [lang, setLang] = useState('es');
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[lang];
  const root = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      if (prefersReduced) return;

      gsap.set('.gallery-item, .intro-photo', { clearProps: 'opacity,transform' });

      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      heroTl
        .fromTo('.hero-image', { scale: 1.12, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.6, ease: 'power2.out' }, 0)
        .fromTo('.hero-kicker', { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 0.2)
        .fromTo('.hero-title-line', { y: 48, opacity: 0, rotateX: -18 }, { y: 0, opacity: 1, rotateX: 0, duration: 0.95, stagger: 0.14 }, 0.32)
        .fromTo('.hero-copy', { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75 }, 0.62)
        .fromTo('.hero-actions', { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 0.78)
        .fromTo('.hero-foot, .image-caption, .hero-side-note', { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65, stagger: 0.08 }, 0.95)
        .fromTo('.round-stamp', { scale: 0.6, opacity: 0, rotate: -24 }, { scale: 1, opacity: 1, rotate: 10, duration: 0.9, ease: 'back.out(1.6)' }, 0.7);

      gsap.to('.round-stamp', {
        rotate: '+=360',
        duration: 28,
        ease: 'none',
        repeat: -1,
        delay: 1.7
      });

      gsap.to('.hero-image img', {
        yPercent: 10,
        scale: 1.06,
        ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
      });

      gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.from(el, {
          y: 42, opacity: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
        });
      });

      gsap.utils.toArray('.service-card').forEach((el, i) => {
        gsap.from(el, {
          y: 28, opacity: 0, duration: 0.7, delay: (i % 3) * 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 92%', toggleActions: 'play none none none' }
        });
      });

      gsap.utils.toArray('.gallery-item').forEach((el, i) => {
        gsap.from(el, {
          y: 56, duration: 1, delay: i * 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.gallery-grid', start: 'top 85%' }
        });
        const img = el.querySelector('img');
        if (img) {
          gsap.from(img, {
            scale: 1.1, duration: 1.25, ease: 'power2.out',
            scrollTrigger: { trigger: '.gallery-grid', start: 'top 85%' }
          });
          gsap.to(img, {
            yPercent: 6, ease: 'none',
            scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true }
          });
        }
      });

      gsap.from('.intro-photo', {
        y: 36, duration: 1, ease: 'power2.out',
        scrollTrigger: { trigger: '.intro-photo', start: 'top 90%' }
      });

      gsap.to('.intro-decoration', {
        y: -40, ease: 'none',
        scrollTrigger: { trigger: '.intro', start: 'top bottom', end: 'bottom top', scrub: true }
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());
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
        <nav className="desktop-nav" aria-label="Main navigation">
          {t.nav.map((label, i) => <button key={label} onClick={() => goTo(['philosophy','services','gallery','contact'][i])}>{label}</button>)}
        </nav>
        <div className="header-right">
          <div className="language-switch" aria-label="Language selector">
            {['es', 'en', 'fr'].map(l => <button key={l} className={lang === l ? 'active' : ''} onClick={() => setLang(l)} aria-pressed={lang === l}>{l.toUpperCase()}</button>)}
          </div>
          <a className="header-book" href={`tel:${PHONE_LINK}`}>{t.book}<ArrowUpRight size={15} /></a>
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger
              render={<Button variant="ghost" size="icon" className="menu-toggle" aria-label={menuOpen ? t.close : t.menu} />}
            >
              <Menu />
            </SheetTrigger>
            <SheetContent side="right" className="mobile-sheet w-[86%] sm:max-w-sm border-l border-[var(--line)]">
              <SheetHeader>
                <SheetTitle className="tracking-[0.14em]">CALDERÓN</SheetTitle>
              </SheetHeader>
              <nav className="mobile-sheet-nav" aria-label="Mobile navigation">
                {t.nav.map((label, i) => (
                  <button key={label} onClick={() => goTo(['philosophy', 'services', 'gallery', 'contact'][i])}>{label}</button>
                ))}
              </nav>
              <div className="px-5 pb-6">
                <ShinyButton
                  className="shiny-cta w-full"
                  type="button"
                  onClick={() => { window.location.href = `tel:${PHONE_LINK}`; }}
                >
                  <Phone size={16} />{t.book}
                </ShinyButton>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy-wrap">
            <div className="hero-kicker">
              <span className="tiny-line" />
              <AnimatedShinyText className="mx-0 text-[9px] tracking-[0.18em] font-semibold text-[var(--ink)]/70 uppercase">
                {t.eyebrow}
              </AnimatedShinyText>
            </div>
            <h1 className="hero-title"><span className="hero-title-line">{t.hero1}</span><span className="hero-title-line italic">{t.hero2}</span></h1>
            <p className="hero-copy">{t.heroText}</p>
            <div className="hero-actions">
              <ShinyButton
                className="shiny-cta"
                type="button"
                onClick={() => { window.location.href = `tel:${PHONE_LINK}`; }}
              >
                <Phone size={16} />{t.book}<ArrowUpRight size={16} />
              </ShinyButton>
              <Button variant="ghost" className="text-link h-auto rounded-none px-0" onClick={() => goTo('philosophy')}>
                {t.discover}<ArrowDown size={15} />
              </Button>
            </div>
            <div className="hero-foot"><span>37°23'29.0"N&nbsp; 5°59'35.3"W</span><span>01 / 04</span></div>
          </div>
          <div className="hero-visual">
            <div className="hero-image">
              <img src="/images/salon-interior.jpg" alt={t.heroAlt} fetchPriority="high" />
              <div className="image-overlay" />
            </div>
            <div className="image-caption"><span>CALDERÓN · C. ACETRES 1</span><span>SEVILLA, ANDALUCÍA</span></div>
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
          <figure className="intro-photo reveal">
            <img src="/images/salon-facade.jpg" alt={t.facadeAlt} loading="lazy" />
          </figure>
          <div className="intro-decoration" aria-hidden="true">C.</div>
        </section>

        <section className="services section-pad" id="services">
          <div className="section-heading reveal">
            <div><div className="eyebrow"><span className="section-number">02</span>{t.serviceKicker}</div><h2>{t.serviceTitle}</h2></div>
            <p>{t.serviceText}</p>
          </div>
          <div className="services-grid">
            {t.services.map((s, i) => (
              <Card className="service-card service-ui-card" key={s[0]}>
                <CardHeader className="gap-2 p-0">
                  <div className="service-top w-full">
                    <span className="service-index">0{i + 1}</span>
                    <span className="service-icon">{i % 2 === 0 ? <Scissors size={19} /> : <Sparkles size={19} />}</span>
                  </div>
                  <CardTitle className="mt-6 font-[family-name:var(--serif)] text-[22px] font-normal tracking-[-0.03em]">{s[0]}</CardTitle>
                  <CardDescription className="max-w-[240px] text-[11px] leading-[1.8]">{s[1]}</CardDescription>
                </CardHeader>
                <Button
                  variant="ghost"
                  size="icon"
                  className="service-link"
                  onClick={() => goTo('contact')}
                  aria-label={`${s[0]} — ${t.call}`}
                >
                  <ChevronRight size={18} />
                </Button>
              </Card>
            ))}
          </div>
          <p className="service-note"><span>*</span>{t.note}</p>
        </section>

        <section className="gallery section-pad" id="gallery">
          <div className="gallery-head reveal"><div className="eyebrow"><span className="section-number">03</span>{t.galleryKicker}</div><h2>{t.galleryTitle}</h2><p>{t.galleryText}</p></div>
          <div className="gallery-grid">
            {photos.map((photo, i) => (
              <BlurFade
                key={`${photo.src}-${photo.shape}`}
                className={`gallery-item ${photo.shape}`}
                delay={0.12 * i}
                inView
              >
                <figure style={{ margin: 0, height: '100%' }}>
                  <img src={photo.src} alt={t[photo.altKey]} loading="lazy" style={{ objectPosition: photo.position }} />
                  <span className="gallery-count">0{i + 1} / 03</span>
                </figure>
              </BlurFade>
            ))}
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="contact-main reveal">
            <div className="eyebrow"><span className="section-number">04</span>{t.contactKicker}</div>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactText}</p>
            <ShinyButton
              className="shiny-cta shiny-cta-light"
              type="button"
              onClick={() => { window.location.href = `tel:${PHONE_LINK}`; }}
            >
              <Phone size={16} />{t.call}<ArrowUpRight size={16} />
            </ShinyButton>
            <div className="contact-phone">{PHONE_DISPLAY}</div>
          </div>
          <div className="contact-details reveal">
            <div className="detail-block"><MapPin size={18} /><div><span className="detail-label">{t.addressLabel}</span><p>C. Acetres, 1<br />Casco Antiguo, 41004 Sevilla, España</p><a href={MAP_LINK} target="_blank" rel="noreferrer">{t.directions}<ArrowUpRight size={14} /></a></div></div>
            <Separator className="my-2 bg-[var(--line)]" />
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
