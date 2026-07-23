/* =========================================================
   Portafolio · Yahir Aguirre García
   Datos + render de proyectos, skills, experiencia y divulgación
   ========================================================= */

// -----------------------------
// PROYECTOS  (10 tarjetas curadas)
// -----------------------------
// featured=true → tarjeta grande (span 2 cols en lg)
// media: { type:'video'|'image'|'youtube', src, poster }
// docs: [{ label, href, size }]  reportes descargables (PDF)
// links: [{ label, href, icon }]  otros enlaces (video, github, etc.)
const PROJECTS = [

  // =========== FILA 1 · HERO ===========

  {
    id: 'robotica-industrial',
    title: 'Soldadura robótica: FANUC M-20iA + Yaskawa Motoman',
    subtitle: 'Robótica Industrial · Otoño 2025',
    period: '2025',
    featured: true,
    media: { type: 'youtube', src: 'https://www.youtube.com/embed/tBPZv5PiXts', poster: 'assets/img/projects/fanuc.jpg' },
    summary: 'Programación y operación de dos celdas robóticas industriales para aplicaciones de soldadura. Comparativa entre el FANUC M-20iA y el Yaskawa Motoman: configuración de coordenadas de usuario/herramienta, trayectorias, I/O y rutinas de soldadura.',
    bullets: [
      'Teach Pendant en ambos controladores (FANUC R-30iB y Yaskawa DX)',
      'Definición de TCP, planos de trabajo y sistemas de coordenadas de usuario',
      'Programación de trayectorias lineales y articulares para soldadura',
      'Integración con I/O digitales y validación por simulación previa',
    ],
    tags: ['FANUC', 'Yaskawa', 'Soldadura robótica', 'Teach Pendant', 'Robótica industrial'],
    links: [
      { label: 'Video FANUC M-20iA', href: 'https://youtu.be/tBPZv5PiXts', icon: 'youtube' },
      { label: 'Video Yaskawa Motoman', href: 'https://youtu.be/NrUj1Anvz00', icon: 'youtube' },
    ],
    docs: [],
  },

  {
    id: 'manufactura-esprit',
    title: 'Manufactura CNC 5-ejes con ESPRIT',
    subtitle: 'Proyecto final · Manufactura Asistida por Computadora',
    period: 'Primavera 2025',
    featured: true,
    media: { type: 'youtube', src: 'https://www.youtube.com/embed/211OaUpEZWM', poster: 'assets/img/projects/esprit.jpg' },
    summary: 'Diseño y manufactura de una pieza 3D compleja con 6 caras maquinadas — planos inclinados, barrenos, ranuras y pockets. Estrategias five-axis en ESPRIT para reducir el volteo de la pieza a uno solo, validado por simulación (comparison en verde).',
    bullets: [
      'Operaciones: pocketing, contouring, deburring, drilling y five-axis simultaneous',
      'Selección de herramientas con Holders UPAEP y verificación anti-colisión',
      '1 volteo total (vs 5+ en métodos tradicionales) → menos setups y errores',
      'Generación de código G y validación integral por simulación',
    ],
    tags: ['ESPRIT', 'CNC 5 ejes', 'CAM', 'Manufactura'],
    links: [
      { label: 'Video del maquinado', href: 'https://youtu.be/211OaUpEZWM', icon: 'youtube' },
    ],
    docs: [],
  },

  {
    id: 'fea-caballete',
    title: 'FEA: Ensayo de tensión de un caballete',
    subtitle: 'Modelado y Simulación por Elementos Finitos',
    period: 'Otoño 2025',
    featured: true,
    media: { type: 'youtube', src: 'https://www.youtube.com/embed/v-Rb78AgW5o', poster: 'assets/img/projects/fea.jpg' },
    summary: 'Análisis por elementos finitos de un caballete sometido a ensayo de tensión. Modelado de la geometría, definición de propiedades del material, condiciones de frontera y comparación de resultados de simulación con análisis analítico.',
    bullets: [
      'Modelo CAD y preparación de malla para FEA',
      'Definición de restricciones, cargas y contactos',
      'Análisis de esfuerzos, deformaciones y factores de seguridad',
      'Interpretación de resultados y recomendaciones de diseño',
    ],
    tags: ['FEA', 'Simulación', 'Análisis estructural', 'CAE'],
    links: [
      { label: 'Video de la simulación', href: 'https://youtu.be/v-Rb78AgW5o', icon: 'youtube' },
    ],
    docs: [],
  },

  // =========== FILA 2 ===========

  {
    id: 'pendulo',
    title: 'Péndulo invertido',
    subtitle: 'Control automático · Swing-up y estabilización',
    period: '2024',
    featured: false,
    media: { type: 'youtube', src: 'https://www.youtube.com/embed/37D0dcWb6ww', poster: 'assets/img/projects/pendulo.jpg' },
    summary: 'Sistema mecatrónico de péndulo invertido sobre carro. Diseño mecánico, electrónica y control implementados para llevar el péndulo desde el reposo hasta la vertical y mantenerlo estable ante perturbaciones.',
    bullets: [
      'Diseño mecánico del carro y riel; integración de motor + encoders',
      'Estrategia swing-up + control lineal para estabilización',
      'Ajuste experimental hasta lograr estabilidad robusta',
    ],
    tags: ['Control', 'Mecatrónica', 'Encoders'],
    links: [
      { label: 'Video del péndulo', href: 'https://youtube.com/shorts/37D0dcWb6ww', icon: 'youtube' },
    ],
    docs: [],
  },

  {
    id: 'cfd-disipador',
    title: 'CFD: Disipador de calor con microcanales',
    subtitle: 'Mecánica de fluidos · Cobre/agua vs aluminio/etilenglicol',
    period: 'Otoño 2024',
    featured: false,
    media: { type: 'image', src: 'assets/img/projects/cfd.png' },
    summary: 'Análisis térmico y dinámico de disipadores de calor de microcanales mediante simulación numérica en COMSOL y prototipo físico. Comparativa entre combinaciones material–fluido para gestión térmica eficiente.',
    bullets: [
      'Modelado 2D y 3D en COMSOL Multiphysics',
      'Comparativa: cobre+agua, cobre+etilenglicol, aluminio+agua/etilenglicol',
      'Análisis de velocidad, temperatura y uniformidad térmica',
      'Prototipo físico + discusión de limitaciones de manufactura',
    ],
    tags: ['CFD', 'COMSOL', 'Transferencia de calor', 'Microcanales'],
    docs: [],
  },

  // =========== FILA 3 ===========

  {
    id: 'maquinas-electricas',
    title: 'Máquinas Eléctricas: Transformador + Motor AC',
    subtitle: 'Construcción física de máquinas de inducción',
    period: 'Otoño 2024',
    featured: false,
    media: { type: 'image', src: 'assets/img/projects/maquinas.png' },
    summary: 'Dos proyectos de construcción física: (1) transformador reductor 120V → 12V con relación 10:1 y (2) motor AC de inducción monofásico con rotor de jaula de ardilla. Devanados calculados y bobinados a mano.',
    bullets: [
      'Cálculo de espiras y sección del conductor por corriente',
      'Bobinado físico de devanados primario y secundario',
      'Pruebas de vacío, cortocircuito y con carga',
      'Motor AC: devanados principal y secundario; análisis de arranque',
    ],
    tags: ['Transformadores', 'Motor AC', 'Inducción', 'Bobinado'],
    docs: [],
  },

  {
    id: 'vumetro',
    title: 'Vúmetro con LEDs · Ecualizador de 3 bandas',
    subtitle: 'Análisis avanzado de circuitos · Proyecto físico funcional',
    period: '2024',
    featured: true,
    media: { type: 'youtube', src: 'https://www.youtube.com/embed/tWklRJPvJsY', poster: 'assets/img/projects/vumetro.jpg' },
    summary: 'Vúmetro físico construido a partir de un ecualizador de 3 bandas (bajas, medias y altas). La señal de audio se filtra por banda y cada banda enciende su propia columna de LEDs proporcional a la intensidad — visualización en tiempo real del contenido espectral del audio.',
    bullets: [
      'Ecualizador analógico de 3 bandas (paso bajo, pasa banda, paso alto) con OPAMPs',
      'Etapa de rectificación y detección de nivel por banda',
      'Escalera de LEDs por columna (bajas / medias / altas) con respuesta en tiempo real',
      'Prototipo físico funcional — probado con audio en vivo',
    ],
    tags: ['Electrónica analógica', 'Filtros activos', 'OPAMPs', 'Audio', 'Hardware'],
    links: [
      { label: 'Video del vúmetro', href: 'https://youtube.com/shorts/tWklRJPvJsY', icon: 'youtube' },
    ],
    docs: [],
  },

  {
    id: 'embebidos',
    title: 'Control de motores DC vía Ethernet · Raspberry Pi + Arduino',
    subtitle: 'Sistemas Embebidos · Práctica 6 · Primavera 2025',
    period: '2025',
    featured: true,
    media: { type: 'youtube', src: 'https://www.youtube.com/embed/D1yS1jruapc', poster: 'assets/img/projects/embebidos.jpg' },
    summary: 'Sistema de control remoto para dos motores DC mediante comunicación Ethernet entre PC y Raspberry Pi. La computadora envía comandos JSON por sockets para controlar dirección, velocidad (PWM) y duración de forma independiente o simultánea, incluyendo paro de emergencia.',
    bullets: [
      'Comunicación PC ↔ Raspberry Pi por sockets TCP/IP (Ethernet)',
      'Protocolo JSON para dirección, velocidad (PWM) y duración por motor',
      'Puente H para inversión de giro y control de dos motores DC',
      'Paro de emergencia y validación en video demostrativo',
    ],
    tags: ['Raspberry Pi', 'Arduino', 'Python', 'Ethernet', 'Sockets', 'PWM'],
    links: [
      { label: 'Video de la práctica', href: 'https://youtu.be/D1yS1jruapc', icon: 'youtube' },
    ],
    extra: 'Como parte del mismo curso también desarrollé prácticas con servomotor + LCD (potenciómetro Arduino → RPi UART), control de motor DC con puente H y OLED, y un sistema IoT con ESP32 + broker MQTT en la nube.',
    docs: [],
  },

  // ============ BONUS: BÍPEDO + SENSORES (menos destacados pero valiosos) ============

  {
    id: 'biped',
    title: 'Robot bípedo',
    subtitle: 'CAD Onshape · CircuitPython · Raspberry Pi Pico W',
    period: 'Primavera 2024',
    featured: false,
    media: { type: 'image', src: 'assets/img/projects/biped.jpg' },
    summary: 'Diseño mecánico y construcción de un robot con extremidades inferiores inspiradas en anatomía humana, con control asíncrono de servos y comunicación Bluetooth para peleas de robots.',
    bullets: [
      'Modelado CAD en Onshape (piernas, cadera, torso)',
      'Selección de servos por análisis de torque articular',
      'Programación en CircuitPython con Raspberry Pi Pico W',
      'Módulo Bluetooth para control inalámbrico',
    ],
    tags: ['Onshape', 'CircuitPython', 'Raspberry Pi Pico', 'Servos'],
    docs: [],
  },

  {
    id: 'sensores',
    title: 'Acondicionamiento de galga extensiométrica',
    subtitle: 'Sensores y acondicionamiento de señales · Primavera 2026',
    period: '2026',
    featured: false,
    media: { type: 'youtube', src: 'https://www.youtube.com/embed/39RII9ifpcA', poster: 'assets/img/projects/sensores.jpg' },
    summary: 'Diseño y construcción de la etapa de acondicionamiento de una galga extensiométrica: puente de Wheatstone + amplificación con OPAMPs para obtener ±2 V ante deformaciones positivas y negativas del elemento sensor.',
    bullets: [
      'Puente de Wheatstone para detectar variaciones mínimas de resistencia',
      'Amplificación diferencial con OPAMPs (INA-style)',
      'Salida ±2 V calibrada a deformaciones positivas y negativas',
      'Prototipo físico validado en video',
    ],
    tags: ['OPAMPs', 'Puente de Wheatstone', 'Galga', 'Instrumentación'],
    links: [
      { label: 'Video del prototipo', href: 'https://youtube.com/shorts/39RII9ifpcA', icon: 'youtube' },
    ],
    extra: 'A lo largo del curso también acondicioné señales de termistores NTC, LDR, sensores piezoeléctricos y encoders.',
    docs: [],
  },

];

// -----------------------------
// SKILLS
// -----------------------------
const SKILLS = [
  {
    group: 'Diseño mecánico y CAE',
    icon: 'box',
    items: ['SolidWorks', 'Onshape', 'FEA (estático estructural)', 'CFD (COMSOL Multiphysics)', 'GD&T · ISO 2768', 'DFM / DFA'],
  },
  {
    group: 'Manufactura',
    icon: 'settings-2',
    items: ['ESPRIT (CAM · 5 ejes)', 'CNC · Torno · Fresa manual', 'Impresión 3D FDM', 'Soldadura básica'],
  },
  {
    group: 'Robótica industrial',
    icon: 'bot',
    items: ['FANUC (R-30iB · Teach Pendant)', 'Yaskawa Motoman (DX)', 'Cinemática directa e inversa (DH)', 'Soldadura robótica'],
  },
  {
    group: 'Automatización y control',
    icon: 'cpu',
    items: ['PLC · escalera', 'Neumática e hidráulica', 'Sistemas de control (péndulo invertido)', 'LabVIEW'],
  },
  {
    group: 'Electrónica y firmware',
    icon: 'circuit-board',
    items: ['ESP32 · Arduino · Raspberry Pi (Pico y 4)', 'Diseño de circuitos analógicos y digitales', 'Sensores + acondicionamiento (OPAMPs)', 'Máquinas eléctricas · Electrónica de potencia'],
  },
  {
    group: 'Software · IoT · idiomas',
    icon: 'code-2',
    items: ['Python · C/C++ · CircuitPython', 'MQTT · Ethernet · comunicaciones seriales', 'MATLAB · Simulink · Proteus', 'Inglés avanzado · TOEFL ITP 590'],
  },
];

// -----------------------------
// EXPERIENCIA
// -----------------------------
const EXPERIENCE = [
  {
    role: 'Automatización y Desarrollo de Sistemas',
    org: 'Brain Break Room · Puebla, México',
    period: 'Feb 2026 – Abr 2026',
    bullets: [
      'Diseñé y construí una muñeca interactiva basada en ESP32, integrando servomotor, salida de voz y sensor láser de detección de personas para entregar pistas automáticas en un escape room.',
      'Desarrollé e instalé el sistema electrónico completo de un piano de pared (PCB a la medida), desde las pruebas de funcionamiento hasta la instalación física final.',
      'Investigué, diseñé e integré por iniciativa propia un sistema de amplificación de audio que mejoró notablemente la calidad de sonido del piano.',
      'Realicé el cableado, montaje de botones e integración eléctrica de los sistemas interactivos de las salas.',
    ],
  },
  {
    role: 'Servicio Social',
    org: 'Servicio de Administración Tributaria (SAT) · Cholula, Puebla',
    period: 'Feb 2025 – Ago 2025',
    bullets: [
      'Atendí simultáneamente hasta 5 contribuyentes en un entorno de alta demanda, sosteniendo la calidad del servicio bajo presión.',
      'Operé y diagnostiqué los sistemas informáticos institucionales para consultar, validar y corregir información de contribuyentes en tiempo real.',
      'Resolví incidencias operativas con soluciones directas al usuario, reduciendo tiempos de espera.',
      'Gestioné y resguardé información sensible y documentación oficial con total confidencialidad.',
    ],
  },
  {
    role: 'Subcoordinador de Electrónica',
    org: 'Grupos de Investigación MEVA y HAB · Puebla, México',
    period: 'Ago 2022 – Dic 2024',
    bullets: [
      'Lideré el área de sensores como subcoordinador de electrónica dentro de un equipo de 5 integrantes.',
      'Programé, calibré e integré múltiples sensores (2 GPS, gases y temperatura) en una sonda atmosférica para el monitoreo y exploración de volcanes activos.',
      'Validé los sistemas mediante pruebas previas a su instalación, asegurando su funcionamiento en condiciones reales de campo.',
    ],
  },
  {
    role: 'Estudiante · Ing. Mecatrónica',
    org: 'UPAEP · Universidad Popular Autónoma del Estado de Puebla',
    period: 'Ago 2020 – Presente',
    bullets: [
      'Promedio 9.16 / 10',
      '12+ proyectos técnicos completados con reporte formal',
      'Áreas: diseño mecánico, CAE (FEA/CFD), manufactura CNC, robótica industrial, control, máquinas eléctricas y sistemas embebidos',
    ],
  },
];

// -----------------------------
// DIVULGACIÓN / CONTENIDO
// -----------------------------
const DIVULGACION = [
  {
    title: 'Portafolio de Ajustes (GD&T)',
    platform: 'Google Sites',
    description: 'Sitio educativo sobre ajustes, tolerancias y GD&T. Material pensado para docentes y estudiantes de manufactura, con videos y ejemplos aplicados.',
    href: 'https://sites.google.com/upaep.edu.mx/portafolio-de-ajustes/inicio',
    icon: 'graduation-cap',
    accent: 'steel',
  },
  {
    title: '@upanene · Divulgación técnica',
    platform: 'TikTok',
    description: 'Contenido educativo con humor sobre LabVIEW, PLC, neumática, MIUVA y proyectos escolares. Comunicación técnica accesible.',
    href: 'https://www.tiktok.com/@upanene',
    icon: 'video',
    accent: 'accent',
  },
];


/* =========================================================
   RENDER
   ========================================================= */

const $ = (sel, root = document) => root.querySelector(sel);

function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') node.className = v;
    else if (k === 'html') node.innerHTML = v;
    else if (k.startsWith('on') && typeof v === 'function') node.addEventListener(k.slice(2), v);
    else if (v !== false && v != null) node.setAttribute(k, v);
  }
  for (const c of children.flat()) {
    if (c == null || c === false) continue;
    node.append(c.nodeType ? c : document.createTextNode(c));
  }
  return node;
}

// ---- PROJECTS ----
function renderMedia(p) {
  const m = p.media;
  if (!m) return placeholderMedia();

  if (m.type === 'video') {
    const v = el('video', {
      class: 'w-full h-full object-cover',
      muted: '',
      loop: '',
      playsinline: '',
      preload: 'metadata',
      poster: m.poster || '',
    });
    v.innerHTML = `<source src="${m.src}" type="video/mp4">`;
    v.addEventListener('error', () => {
      v.replaceWith(m.poster ? imageEl(m.poster, p.title) : placeholderMedia().firstChild);
    });
    const wrap = el('div', { class: 'relative w-full h-full' }, v,
      el('div', { class: 'absolute top-2 right-2 flex items-center gap-1 px-2 py-1 rounded-md bg-black/60 backdrop-blur text-[10px] font-mono text-white' }, '▶ VIDEO')
    );
    wrap.addEventListener('mouseenter', () => v.play().catch(() => {}));
    wrap.addEventListener('mouseleave', () => { v.pause(); v.currentTime = 0; });
    return wrap;
  }

  if (m.type === 'youtube') {
    return el('iframe', {
      class: 'w-full h-full',
      src: m.src, title: p.title, frameborder: '0',
      allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
      allowfullscreen: '',
    });
  }
  return imageEl(m.src, p.title);
}

function imageEl(src, alt) {
  const img = el('img', {
    src, alt, loading: 'lazy',
    class: 'w-full h-full object-cover group-hover:scale-105 transition duration-500',
  });
  img.addEventListener('error', () => img.replaceWith(placeholderMedia().firstChild));
  return img;
}

function placeholderMedia() {
  return el('div', { class: 'w-full h-full flex items-center justify-center bg-gradient-to-br from-surface2 to-surface text-muted' },
    el('div', { class: 'flex flex-col items-center gap-2' },
      el('i', { 'data-lucide': 'image-off', class: 'w-10 h-10' }),
      el('span', { class: 'text-[10px] font-mono' }, 'sin imagen aún')
    )
  );
}

function projectCard(p) {
  const featured = p.featured;
  const card = el('article', {
    class: [
      'group relative rounded-2xl overflow-hidden border border-border bg-surface',
      'hover:border-accent/60 transition duration-300 flex flex-col',
      featured ? 'lg:col-span-2' : '',
    ].join(' '),
    'data-id': p.id,
  });

  const mediaWrap = el('div', { class: `relative overflow-hidden ${featured ? 'h-72 md:h-80' : 'h-52'} bg-bg` });
  mediaWrap.append(renderMedia(p));
  mediaWrap.append(
    el('div', { class: 'absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/10 to-transparent pointer-events-none' }),
    el('div', { class: 'absolute bottom-3 left-3 flex items-center gap-2' },
      el('span', { class: 'px-2 py-1 rounded-md bg-bg/80 backdrop-blur border border-border/60 font-mono text-[10px] text-muted' }, p.period)
    )
  );

  const body = el('div', { class: 'p-5 md:p-6 flex flex-col gap-3 flex-1' },
    el('div', {},
      el('h3', { class: 'text-xl md:text-2xl font-bold leading-tight' }, p.title),
      p.subtitle ? el('p', { class: 'text-sm text-muted mt-1' }, p.subtitle) : null,
    ),
    el('p', { class: 'text-sm text-muted/90 leading-relaxed' }, p.summary),
  );

  if (p.bullets && p.bullets.length) {
    body.append(
      el('ul', { class: 'space-y-1.5 text-sm text-muted' },
        ...p.bullets.map(b =>
          el('li', { class: 'flex gap-2' },
            el('i', { 'data-lucide': 'check', class: 'w-4 h-4 text-accent shrink-0 mt-0.5' }),
            el('span', {}, b)
          )
        )
      )
    );
  }

  if (p.extra) {
    body.append(
      el('p', { class: 'text-xs text-muted/80 italic leading-relaxed pt-2 border-t border-border/40 mt-1' }, p.extra)
    );
  }

  if (p.tags && p.tags.length) {
    body.append(
      el('div', { class: 'flex flex-wrap gap-1.5 mt-1' },
        ...p.tags.map(t =>
          el('span', { class: 'px-2 py-0.5 rounded-md bg-surface2 border border-border/60 font-mono text-[11px] text-muted' }, t)
        )
      )
    );
  }

  // Docs (PDFs) + links
  const bottom = [];
  if (p.docs && p.docs.length) {
    bottom.push(...p.docs.map(d =>
      el('a', {
        href: d.href, target: '_blank', rel: 'noopener',
        class: 'inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-surface2 border border-border/60 text-xs font-medium text-text hover:border-accent hover:text-accent transition'
      },
        el('i', { 'data-lucide': 'file-text', class: 'w-3.5 h-3.5' }),
        d.label
      )
    ));
  }
  if (p.links && p.links.length) {
    bottom.push(...p.links.map(l =>
      el('a', {
        href: l.href, target: '_blank', rel: 'noopener',
        class: 'inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-steel/40 text-xs font-medium text-steel hover:bg-steel/10 transition'
      },
        l.icon ? el('i', { 'data-lucide': l.icon, class: 'w-3.5 h-3.5' }) : null,
        l.label
      )
    ));
  }
  if (bottom.length) {
    body.append(el('div', { class: 'flex flex-wrap gap-2 mt-2 pt-3 border-t border-border/50' }, ...bottom));
  }

  card.append(mediaWrap, body);
  return card;
}

function renderProjects() {
  const grid = $('#projects-grid');
  if (!grid) return;
  grid.innerHTML = '';
  PROJECTS.forEach(p => grid.append(projectCard(p)));
}

// ---- SKILLS ----
function skillCard(s) {
  return el('div', { class: 'p-5 rounded-xl border border-border bg-surface hover:border-accent/50 transition' },
    el('div', { class: 'flex items-center gap-3 mb-3' },
      el('div', { class: 'w-10 h-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent' },
        el('i', { 'data-lucide': s.icon, class: 'w-5 h-5' })
      ),
      el('h3', { class: 'font-semibold' }, s.group),
    ),
    el('ul', { class: 'space-y-1.5 text-sm text-muted' },
      ...s.items.map(i =>
        el('li', { class: 'flex gap-2' },
          el('span', { class: 'text-accent/70 font-mono text-xs mt-0.5' }, '›'),
          el('span', {}, i)
        )
      )
    )
  );
}

function renderSkills() {
  const grid = $('#skills-grid');
  if (!grid) return;
  grid.innerHTML = '';
  SKILLS.forEach(s => grid.append(skillCard(s)));
}

// ---- EXPERIENCE ----
function experienceItem(e, isLast) {
  return el('div', { class: 'relative pl-8 md:pl-10' },
    el('div', { class: 'absolute left-0 top-1.5 w-3 h-3 rounded-full bg-accent border-4 border-bg z-10' }),
    isLast ? null : el('div', { class: 'absolute left-[5px] top-4 bottom-[-2rem] w-0.5 bg-border' }),
    el('div', { class: 'p-5 rounded-xl border border-border bg-surface' },
      el('div', { class: 'flex flex-wrap items-baseline justify-between gap-2 mb-1' },
        el('h3', { class: 'font-bold text-lg' }, e.role),
        el('span', { class: 'font-mono text-xs text-muted' }, e.period),
      ),
      el('p', { class: 'text-sm text-accent mb-3' }, e.org),
      el('ul', { class: 'space-y-1.5 text-sm text-muted' },
        ...e.bullets.map(b =>
          el('li', { class: 'flex gap-2' },
            el('i', { 'data-lucide': 'chevron-right', class: 'w-4 h-4 text-accent/60 shrink-0 mt-0.5' }),
            el('span', {}, b)
          )
        )
      )
    )
  );
}

function renderExperience() {
  const list = $('#experience-list');
  if (!list) return;
  list.innerHTML = '';
  EXPERIENCE.forEach((e, i) => list.append(experienceItem(e, i === EXPERIENCE.length - 1)));
}

// ---- DIVULGACIÓN ----
function divulgacionCard(d) {
  const accentClass = d.accent === 'accent'
    ? 'from-accent/20 to-accent/5 border-accent/30 text-accent'
    : 'from-steel/20 to-steel/5 border-steel/30 text-steel';
  return el('a', {
    href: d.href, target: '_blank', rel: 'noopener',
    class: 'group p-6 rounded-2xl border border-border bg-surface hover:border-accent/60 transition flex gap-5 items-start'
  },
    el('div', { class: `shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${accentClass} border flex items-center justify-center` },
      el('i', { 'data-lucide': d.icon, class: 'w-7 h-7' })
    ),
    el('div', { class: 'flex-1' },
      el('div', { class: 'flex items-center gap-2 mb-1' },
        el('h3', { class: 'font-bold text-lg group-hover:text-accent transition' }, d.title),
        el('i', { 'data-lucide': 'external-link', class: 'w-4 h-4 text-muted group-hover:text-accent transition' })
      ),
      el('span', { class: 'font-mono text-xs text-muted' }, d.platform),
      el('p', { class: 'text-sm text-muted mt-2 leading-relaxed' }, d.description),
    )
  );
}

function renderDivulgacion() {
  const grid = $('#divulgacion-grid');
  if (!grid) return;
  grid.innerHTML = '';
  DIVULGACION.forEach(d => grid.append(divulgacionCard(d)));
}

// ---- NAV ----
function initNavShrink() {
  const nav = $('#nav');
  if (!nav) return;
  const onScroll = () => {
    if (window.scrollY > 20) nav.classList.add('shadow-lg', 'bg-bg/90');
    else nav.classList.remove('shadow-lg', 'bg-bg/90');
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  renderSkills();
  renderExperience();
  renderDivulgacion();
  initNavShrink();
  if (window.lucide) window.lucide.createIcons();
});
