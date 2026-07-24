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
    tags_en: ['FANUC', 'Yaskawa', 'Robotic welding', 'Teach Pendant', 'Industrial robotics'],
    title_en: 'Robotic welding: FANUC M-20iA + Yaskawa Motoman',
    subtitle_en: 'Industrial Robotics · Fall 2025',
    summary_en: 'Programming and operation of two industrial robotic cells for welding applications. Comparison between the FANUC M-20iA and the Yaskawa Motoman: user/tool coordinate setup, trajectories, I/O and welding routines.',
    bullets_en: [
      'Teach Pendant on both controllers (FANUC R-30iB and Yaskawa DX)',
      'TCP definition, work planes and user coordinate systems',
      'Programming of linear and joint trajectories for welding',
      'Digital I/O integration and prior simulation validation',
    ],
    links: [
      { label: 'Video FANUC M-20iA', label_en: 'FANUC M-20iA video', href: 'https://youtu.be/tBPZv5PiXts', icon: 'youtube' },
      { label: 'Video Yaskawa Motoman', label_en: 'Yaskawa Motoman video', href: 'https://youtu.be/NrUj1Anvz00', icon: 'youtube' },
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
    tags_en: ['ESPRIT', '5-axis CNC', 'CAM', 'Manufacturing'],
    title_en: '5-axis CNC manufacturing with ESPRIT',
    subtitle_en: 'Final project · Computer-Aided Manufacturing',
    period_en: 'Spring 2025',
    summary_en: 'Design and manufacturing of a complex 3D part with 6 machined faces — inclined planes, holes, slots and pockets. Five-axis strategies in ESPRIT to reduce part re-fixturing to a single flip, validated via simulation (comparison in green).',
    bullets_en: [
      'Operations: pocketing, contouring, deburring, drilling and simultaneous five-axis',
      'Tool selection with UPAEP holders and anti-collision check',
      '1 total flip (vs 5+ with traditional methods) → fewer setups and errors',
      'G-code generation and full validation by simulation',
    ],
    links: [
      { label: 'Video del maquinado', label_en: 'Machining video', href: 'https://youtu.be/211OaUpEZWM', icon: 'youtube' },
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
    tags_en: ['FEA', 'Simulation', 'Structural analysis', 'CAE'],
    title_en: 'FEA: Tensile test of an easel frame',
    subtitle_en: 'Finite Element Modeling & Simulation',
    period_en: 'Fall 2025',
    summary_en: 'Finite element analysis of an easel frame under tensile testing. Geometry modeling, material property definition, boundary conditions and comparison of simulation results against analytical analysis.',
    bullets_en: [
      'CAD model and mesh preparation for FEA',
      'Definition of constraints, loads and contacts',
      'Stress, strain and safety factor analysis',
      'Result interpretation and design recommendations',
    ],
    links: [
      { label: 'Video de la simulación', label_en: 'Simulation video', href: 'https://youtu.be/v-Rb78AgW5o', icon: 'youtube' },
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
    tags_en: ['Control', 'Mechatronics', 'Encoders'],
    title_en: 'Inverted pendulum',
    subtitle_en: 'Automatic control · Swing-up and stabilization',
    summary_en: 'Mechatronic inverted pendulum on a cart. Mechanical design, electronics and control implemented to swing the pendulum from rest up to vertical and keep it stable under disturbances.',
    bullets_en: [
      'Mechanical design of the cart and rail; motor + encoder integration',
      'Swing-up strategy + linear control for stabilization',
      'Experimental tuning until reaching robust stability',
    ],
    links: [
      { label: 'Video del péndulo', label_en: 'Pendulum video', href: 'https://youtube.com/shorts/37D0dcWb6ww', icon: 'youtube' },
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
    tags_en: ['CFD', 'COMSOL', 'Heat transfer', 'Microchannels'],
    title_en: 'CFD: Microchannel heat sink',
    subtitle_en: 'Fluid mechanics · Copper/water vs aluminum/glycol',
    period_en: 'Fall 2024',
    summary_en: 'Thermal and dynamic analysis of microchannel heat sinks via numerical simulation in COMSOL plus a physical prototype. Comparison between material–fluid combinations for efficient thermal management.',
    bullets_en: [
      '2D and 3D modeling in COMSOL Multiphysics',
      'Comparison: copper+water, copper+glycol, aluminum+water/glycol',
      'Velocity, temperature and thermal uniformity analysis',
      'Physical prototype + discussion of manufacturing limitations',
    ],
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
    tags_en: ['Transformers', 'AC motor', 'Induction', 'Winding'],
    title_en: 'Electric Machines: Transformer + AC motor',
    subtitle_en: 'Physical build of induction machines',
    period_en: 'Fall 2024',
    summary_en: 'Two physical build projects: (1) 120V → 12V step-down transformer with a 10:1 ratio, and (2) single-phase AC induction motor with a squirrel-cage rotor. Turns calculated and hand-wound.',
    bullets_en: [
      'Turn count and conductor gauge computed from current',
      'Hand winding of primary and secondary coils',
      'No-load, short-circuit and loaded tests',
      'AC motor: main and auxiliary windings; start-up analysis',
    ],
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
    tags_en: ['Analog electronics', 'Active filters', 'Op-amps', 'Audio', 'Hardware'],
    title_en: 'LED VU meter · 3-band equalizer',
    subtitle_en: 'Advanced circuit analysis · Functional physical build',
    summary_en: 'Physical VU meter built from a 3-band equalizer (low, mid, high). The audio signal is filtered by band and each band drives its own LED column proportional to its intensity — real-time visualization of the audio spectrum.',
    bullets_en: [
      '3-band analog equalizer (low-pass, band-pass, high-pass) with op-amps',
      'Rectification and level-detection stage per band',
      'LED ladder per column (lows / mids / highs) with real-time response',
      'Functional physical prototype — tested with live audio',
    ],
    links: [
      { label: 'Video del vúmetro', label_en: 'VU meter video', href: 'https://youtube.com/shorts/tWklRJPvJsY', icon: 'youtube' },
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
    tags_en: ['Raspberry Pi', 'Arduino', 'Python', 'Ethernet', 'Sockets', 'PWM'],
    title_en: 'DC motor control over Ethernet · Raspberry Pi + Arduino',
    subtitle_en: 'Embedded Systems · Lab 6 · Spring 2025',
    summary_en: 'Remote control system for two DC motors via Ethernet communication between a PC and a Raspberry Pi. The computer sends JSON commands through sockets to control direction, speed (PWM) and duration independently or simultaneously, including an emergency stop.',
    bullets_en: [
      'PC ↔ Raspberry Pi communication via TCP/IP sockets (Ethernet)',
      'JSON protocol for direction, speed (PWM) and duration per motor',
      'H-bridge for reversing rotation and driving two DC motors',
      'Emergency stop and validation in a demo video',
    ],
    links: [
      { label: 'Video de la práctica', label_en: 'Lab demo video', href: 'https://youtu.be/D1yS1jruapc', icon: 'youtube' },
    ],
    extra: 'Como parte del mismo curso también desarrollé prácticas con servomotor + LCD (potenciómetro Arduino → RPi UART), control de motor DC con puente H y OLED, y un sistema IoT con ESP32 + broker MQTT en la nube.',
    extra_en: 'As part of the same course I also built labs with a servo + LCD (Arduino potentiometer → RPi UART), DC motor control with H-bridge and OLED, and an IoT system with ESP32 + cloud MQTT broker.',
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
    tags_en: ['Onshape', 'CircuitPython', 'Raspberry Pi Pico', 'Servos'],
    title_en: 'Bipedal robot',
    subtitle_en: 'Onshape CAD · CircuitPython · Raspberry Pi Pico W',
    period_en: 'Spring 2024',
    summary_en: 'Mechanical design and build of a robot with lower limbs inspired by human anatomy, with asynchronous servo control and Bluetooth communication for robot fights.',
    bullets_en: [
      'CAD modeling in Onshape (legs, hip, torso)',
      'Servo selection from joint torque analysis',
      'CircuitPython programming on Raspberry Pi Pico W',
      'Bluetooth module for wireless control',
    ],
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
    tags_en: ['Op-amps', 'Wheatstone bridge', 'Strain gauge', 'Instrumentation'],
    title_en: 'Strain gauge signal conditioning',
    subtitle_en: 'Sensors and signal conditioning · Spring 2026',
    summary_en: 'Design and build of the conditioning stage for a strain gauge: Wheatstone bridge + op-amp amplification to obtain ±2 V under positive and negative deformations of the sensing element.',
    bullets_en: [
      'Wheatstone bridge to detect tiny resistance variations',
      'Differential amplification with op-amps (INA-style)',
      '±2 V output calibrated for positive and negative deformations',
      'Physical prototype validated on video',
    ],
    links: [
      { label: 'Video del prototipo', label_en: 'Prototype video', href: 'https://youtube.com/shorts/39RII9ifpcA', icon: 'youtube' },
    ],
    extra: 'A lo largo del curso también acondicioné señales de termistores NTC, LDR, sensores piezoeléctricos y encoders.',
    extra_en: 'Throughout the course I also conditioned signals from NTC thermistors, LDRs, piezoelectric sensors and encoders.',
    docs: [],
  },

];

// -----------------------------
// SKILLS
// -----------------------------
const SKILLS = [
  {
    group: 'Diseño mecánico y CAE',
    group_en: 'Mechanical design & CAE',
    icon: 'box',
    items: ['SolidWorks', 'Onshape', 'FEA (estático estructural)', 'CFD (COMSOL Multiphysics)', 'GD&T · ISO 2768', 'DFM / DFA'],
    items_en: ['SolidWorks', 'Onshape', 'FEA (structural static)', 'CFD (COMSOL Multiphysics)', 'GD&T · ISO 2768', 'DFM / DFA'],
  },
  {
    group: 'Manufactura',
    group_en: 'Manufacturing',
    icon: 'settings-2',
    items: ['ESPRIT (CAM · 5 ejes)', 'CNC · Torno · Fresa manual', 'Impresión 3D FDM', 'Soldadura básica'],
    items_en: ['ESPRIT (CAM · 5-axis)', 'CNC · Lathe · Manual mill', 'FDM 3D printing', 'Basic welding'],
  },
  {
    group: 'Robótica industrial',
    group_en: 'Industrial robotics',
    icon: 'bot',
    items: ['FANUC (R-30iB · Teach Pendant)', 'Yaskawa Motoman (DX)', 'Cinemática directa e inversa (DH)', 'Soldadura robótica'],
    items_en: ['FANUC (R-30iB · Teach Pendant)', 'Yaskawa Motoman (DX)', 'Forward & inverse kinematics (DH)', 'Robotic welding'],
  },
  {
    group: 'Automatización y control',
    group_en: 'Automation & control',
    icon: 'cpu',
    items: ['PLC · escalera', 'Neumática e hidráulica', 'Sistemas de control (péndulo invertido)', 'LabVIEW'],
    items_en: ['PLC · ladder logic', 'Pneumatics & hydraulics', 'Control systems (inverted pendulum)', 'LabVIEW'],
  },
  {
    group: 'Electrónica y firmware',
    group_en: 'Electronics & firmware',
    icon: 'circuit-board',
    items: ['ESP32 · Arduino · Raspberry Pi (Pico y 4)', 'Diseño de circuitos analógicos y digitales', 'Sensores + acondicionamiento (OPAMPs)', 'Máquinas eléctricas · Electrónica de potencia'],
    items_en: ['ESP32 · Arduino · Raspberry Pi (Pico & 4)', 'Analog and digital circuit design', 'Sensors + conditioning (op-amps)', 'Electric machines · Power electronics'],
  },
  {
    group: 'Software · IoT · idiomas',
    group_en: 'Software · IoT · languages',
    icon: 'code-2',
    items: ['Python · C/C++ · CircuitPython', 'MQTT · Ethernet · comunicaciones seriales', 'MATLAB · Simulink · Proteus', 'Inglés avanzado · TOEFL ITP 590'],
    items_en: ['Python · C/C++ · CircuitPython', 'MQTT · Ethernet · serial communications', 'MATLAB · Simulink · Proteus', 'Advanced English · TOEFL ITP 590'],
  },
];

// -----------------------------
// EXPERIENCIA
// -----------------------------
const EXPERIENCE = [
  {
    role: 'Automatización y Desarrollo de Sistemas',
    role_en: 'Automation & Systems Development',
    org: 'Brain Break Room · Puebla, México',
    org_en: 'Brain Break Room · Puebla, Mexico',
    period: 'Feb 2026 – Abr 2026',
    period_en: 'Feb 2026 – Apr 2026',
    bullets: [
      'Diseñé y construí una muñeca interactiva basada en ESP32, integrando servomotor, salida de voz y sensor láser de detección de personas para entregar pistas automáticas en un escape room.',
      'Desarrollé e instalé el sistema electrónico completo de un piano de pared (PCB a la medida), desde las pruebas de funcionamiento hasta la instalación física final.',
      'Investigué, diseñé e integré por iniciativa propia un sistema de amplificación de audio que mejoró notablemente la calidad de sonido del piano.',
      'Realicé el cableado, montaje de botones e integración eléctrica de los sistemas interactivos de las salas.',
    ],
    bullets_en: [
      'Designed and built an interactive ESP32-based doll integrating a servo, voice output and a laser presence sensor to deliver automatic clues in an escape room.',
      'Developed and installed the full electronic system of a wall piano (custom PCB), from functional tests to the final physical installation.',
      'Self-initiated research, design and integration of an audio amplification system that noticeably improved the piano sound quality.',
      'Handled wiring, button assembly and electrical integration of the interactive systems across the rooms.',
    ],
  },
  {
    role: 'Servicio Social',
    role_en: 'Community Service',
    org: 'Servicio de Administración Tributaria (SAT) · Cholula, Puebla',
    org_en: 'Mexican Tax Administration Service (SAT) · Cholula, Puebla',
    period: 'Feb 2025 – Ago 2025',
    period_en: 'Feb 2025 – Aug 2025',
    bullets: [
      'Atendí simultáneamente hasta 5 contribuyentes en un entorno de alta demanda, sosteniendo la calidad del servicio bajo presión.',
      'Operé y diagnostiqué los sistemas informáticos institucionales para consultar, validar y corregir información de contribuyentes en tiempo real.',
      'Resolví incidencias operativas con soluciones directas al usuario, reduciendo tiempos de espera.',
      'Gestioné y resguardé información sensible y documentación oficial con total confidencialidad.',
    ],
    bullets_en: [
      'Served up to 5 taxpayers simultaneously in a high-demand environment, sustaining service quality under pressure.',
      'Operated and troubleshot institutional IT systems to query, validate and correct taxpayer information in real time.',
      'Resolved operational incidents with direct end-user solutions, reducing wait times.',
      'Managed and safeguarded sensitive information and official documentation with full confidentiality.',
    ],
  },
  {
    role: 'Subcoordinador de Electrónica',
    role_en: 'Electronics Sub-Lead',
    org: 'Grupos de Investigación MEVA y HAB · Puebla, México',
    org_en: 'MEVA & HAB Research Groups · Puebla, Mexico',
    period: 'Ago 2022 – Dic 2024',
    period_en: 'Aug 2022 – Dec 2024',
    bullets: [
      'Lideré el área de sensores como subcoordinador de electrónica dentro de un equipo de 5 integrantes.',
      'Programé, calibré e integré múltiples sensores (2 GPS, gases y temperatura) en una sonda atmosférica para el monitoreo y exploración de volcanes activos.',
      'Validé los sistemas mediante pruebas previas a su instalación, asegurando su funcionamiento en condiciones reales de campo.',
    ],
    bullets_en: [
      'Led the sensors area as electronics sub-lead within a 5-person team.',
      'Programmed, calibrated and integrated multiple sensors (2 GPS, gas and temperature) in an atmospheric probe for monitoring and exploration of active volcanoes.',
      'Validated the systems through pre-deployment testing, ensuring operation under real field conditions.',
    ],
  },
  {
    role: 'Estudiante · Ing. Mecatrónica',
    role_en: 'Student · B.Sc. Mechatronics Eng.',
    org: 'UPAEP · Universidad Popular Autónoma del Estado de Puebla',
    org_en: 'UPAEP · Universidad Popular Autónoma del Estado de Puebla',
    period: 'Ago 2020 – Presente',
    period_en: 'Aug 2020 – Present',
    bullets: [
      'Promedio 9.16 / 10',
      '12+ proyectos técnicos completados con reporte formal',
      'Áreas: diseño mecánico, CAE (FEA/CFD), manufactura CNC, robótica industrial, control, máquinas eléctricas y sistemas embebidos',
    ],
    bullets_en: [
      'GPA 9.16 / 10',
      '12+ technical projects completed with formal reports',
      'Areas: mechanical design, CAE (FEA/CFD), CNC manufacturing, industrial robotics, control, electric machines and embedded systems',
    ],
  },
];

// -----------------------------
// DIVULGACIÓN / CONTENIDO
// -----------------------------
const DIVULGACION = [
  {
    title: 'Portafolio de Ajustes (GD&T)',
    title_en: 'GD&T Fits Portfolio',
    platform: 'Google Sites',
    description: 'Sitio educativo sobre ajustes, tolerancias y GD&T. Material pensado para docentes y estudiantes de manufactura, con videos y ejemplos aplicados.',
    description_en: 'Educational site on fits, tolerances and GD&T. Material aimed at manufacturing instructors and students, with videos and applied examples.',
    href: 'https://sites.google.com/upaep.edu.mx/portafolio-de-ajustes/inicio',
    icon: 'graduation-cap',
    accent: 'steel',
  },
  {
    title: '@upanene · Divulgación técnica',
    title_en: '@upanene · Technical outreach',
    platform: 'TikTok',
    description: 'Contenido educativo con humor sobre LabVIEW, PLC, neumática, MIUVA y proyectos escolares. Comunicación técnica accesible.',
    description_en: 'Educational content with humor on LabVIEW, PLC, pneumatics, MIUVA and school projects. Accessible technical communication.',
    href: 'https://www.tiktok.com/@upanene',
    icon: 'video',
    accent: 'accent',
  },
];


/* =========================================================
   RENDER
   ========================================================= */

const $ = (sel, root = document) => root.querySelector(sel);

function currentLang() {
  return document.documentElement.lang === 'en' ? 'en' : 'es';
}
function pick(obj, field) {
  const lang = currentLang();
  if (lang === 'en' && obj[field + '_en'] != null) return obj[field + '_en'];
  return obj[field];
}

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
      el('span', { class: 'px-2 py-1 rounded-md bg-bg/80 backdrop-blur border border-border/60 font-mono text-[10px] text-muted' }, pick(p, 'period'))
    )
  );

  const subtitle = pick(p, 'subtitle');
  const body = el('div', { class: 'p-5 md:p-6 flex flex-col gap-3 flex-1' },
    el('div', {},
      el('h3', { class: 'text-xl md:text-2xl font-bold leading-tight' }, pick(p, 'title')),
      subtitle ? el('p', { class: 'text-sm text-muted mt-1' }, subtitle) : null,
    ),
    el('p', { class: 'text-sm text-muted/90 leading-relaxed' }, pick(p, 'summary')),
  );

  const bullets = pick(p, 'bullets');
  if (bullets && bullets.length) {
    body.append(
      el('ul', { class: 'space-y-1.5 text-sm text-muted' },
        ...bullets.map(b =>
          el('li', { class: 'flex gap-2' },
            el('i', { 'data-lucide': 'check', class: 'w-4 h-4 text-accent shrink-0 mt-0.5' }),
            el('span', {}, b)
          )
        )
      )
    );
  }

  const extra = pick(p, 'extra');
  if (extra) {
    body.append(
      el('p', { class: 'text-xs text-muted/80 italic leading-relaxed pt-2 border-t border-border/40 mt-1' }, extra)
    );
  }

  const tags = pick(p, 'tags');
  if (tags && tags.length) {
    body.append(
      el('div', { class: 'flex flex-wrap gap-1.5 mt-1' },
        ...tags.map(t =>
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
        pick(d, 'label')
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
        pick(l, 'label')
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
      el('h3', { class: 'font-semibold' }, pick(s, 'group')),
    ),
    el('ul', { class: 'space-y-1.5 text-sm text-muted' },
      ...pick(s, 'items').map(i =>
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
        el('h3', { class: 'font-bold text-lg' }, pick(e, 'role')),
        el('span', { class: 'font-mono text-xs text-muted' }, pick(e, 'period')),
      ),
      el('p', { class: 'text-sm text-accent mb-3' }, pick(e, 'org')),
      el('ul', { class: 'space-y-1.5 text-sm text-muted' },
        ...pick(e, 'bullets').map(b =>
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
        el('h3', { class: 'font-bold text-lg group-hover:text-accent transition' }, pick(d, 'title')),
        el('i', { 'data-lucide': 'external-link', class: 'w-4 h-4 text-muted group-hover:text-accent transition' })
      ),
      el('span', { class: 'font-mono text-xs text-muted' }, d.platform),
      el('p', { class: 'text-sm text-muted mt-2 leading-relaxed' }, pick(d, 'description')),
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

// ---- I18N ----
const I18N = {
  es: {
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.skills': 'Skills',
    'nav.divulgacion': 'Divulgación',
    'nav.experience': 'Experiencia',
    'nav.contact': 'Contacto',
    'hero.badge': 'Disponible para prácticas profesionales',
    'hero.title': 'Ingeniero en Mecatrónica',
    'hero.desc': 'Diseño mecánico · Automatización · Robótica. Llevo el ciclo completo de ingeniería del concepto al prototipo físico funcional — <span class="text-text">12+ proyectos técnicos entregados con reporte formal</span>.',
    'hero.cta1': 'Ver proyectos',
    'hero.cta2': 'Contáctame',
    'stats.gpa': 'Promedio UPAEP',
    'stats.projects': 'Proyectos técnicos',
    'about.title': 'Sobre mí',
    'about.p1': 'Soy estudiante de <span class="text-text font-medium">Ingeniería Mecatrónica en la UPAEP</span> con promedio de 9.16. Me apasiona el momento en que un diseño en CAD deja de ser un archivo y empieza a moverse en el mundo real.',
    'about.p2': 'Domino el ciclo completo: <span class="text-accent">diseño mecánico en SolidWorks</span>, simulación <span class="text-accent">FEA/CFD</span>, manufactura CNC con <span class="text-accent">Esprit</span>, fabricación en taller, e integración de <span class="text-accent">electrónica y control</span> con ESP32, Raspberry Pi, PLC y FANUC.',
    'about.p3': 'He participado en grupos técnicos con experiencia como subencargado del área de electrónica, y llevado más de 12 proyectos del concepto al prototipo físico funcional. Busco prácticas profesionales donde poder resolver problemas reales de ingeniería.',
    'about.card1.label': 'FORMACIÓN',
    'about.card1.title': 'Ing. Mecatrónica',
    'about.card1.sub': 'UPAEP · 2020–presente',
    'about.card2.label': 'IDIOMAS',
    'about.card2.title': 'Inglés avanzado',
    'about.card3.label': 'UBICACIÓN',
    'about.card3.title': 'Puebla, México',
    'about.card3.sub': 'Abierto a reubicación',
    'about.card4.label': 'DISPONIBILIDAD',
    'about.card4.title': 'Disponible para viajar',
    'about.card4.sub': 'Nacional e internacional',
    'projects.title': 'Proyectos',
    'projects.intro': 'Del CAD al hardware funcional. Cada proyecto integra diseño mecánico, electrónica y control.',
    'skills.title': 'Skills técnicas',
    'divulgacion.title': 'Divulgación técnica',
    'divulgacion.intro': 'Contenido educativo y de comunicación técnica. Porque saber ingeniería no sirve si no la puedes explicar.',
    'experience.title': 'Experiencia',
    'contact.title': 'Trabajemos juntos',
    'contact.intro': 'Estoy buscando prácticas profesionales en <span class="text-text">diseño mecánico, automatización o robótica</span>. Si tienes un proyecto o vacante, hablemos.',
    'contact.cv': 'Descargar CV',
    'footer.built': 'Diseñado y construido en Puebla, MX 🇲🇽',
    'toggle.other': 'EN',
  },
  en: {
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.divulgacion': 'Outreach',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'hero.badge': 'Available for internships',
    'hero.title': 'Mechatronics Engineer',
    'hero.desc': 'Mechanical design · Automation · Robotics. I own the full engineering cycle — from concept to a functional physical prototype — with <span class="text-text">12+ technical projects delivered with formal reports</span>.',
    'hero.cta1': 'See projects',
    'hero.cta2': 'Contact me',
    'stats.gpa': 'UPAEP GPA',
    'stats.projects': 'Technical projects',
    'about.title': 'About me',
    'about.p1': "I'm a <span class=\"text-text font-medium\">Mechatronics Engineering student at UPAEP</span> with a 9.16 GPA. I love the moment a CAD design stops being a file and starts moving in the real world.",
    'about.p2': 'I cover the full cycle: <span class="text-accent">mechanical design in SolidWorks</span>, <span class="text-accent">FEA/CFD</span> simulation, CNC manufacturing with <span class="text-accent">Esprit</span>, shop-floor fabrication, and integration of <span class="text-accent">electronics and control</span> with ESP32, Raspberry Pi, PLC and FANUC.',
    'about.p3': "I've contributed to technical teams as an electronics area sub-lead, taking 12+ projects from concept to functional prototype. Looking for internships where I can solve real engineering problems.",
    'about.card1.label': 'EDUCATION',
    'about.card1.title': 'B.Sc. Mechatronics Eng.',
    'about.card1.sub': 'UPAEP · 2020–present',
    'about.card2.label': 'LANGUAGES',
    'about.card2.title': 'Advanced English',
    'about.card3.label': 'LOCATION',
    'about.card3.title': 'Puebla, Mexico',
    'about.card3.sub': 'Open to relocation',
    'about.card4.label': 'AVAILABILITY',
    'about.card4.title': 'Available to travel',
    'about.card4.sub': 'Domestic and international',
    'projects.title': 'Projects',
    'projects.intro': 'From CAD to functional hardware. Each project integrates mechanical design, electronics and control.',
    'skills.title': 'Technical skills',
    'divulgacion.title': 'Technical outreach',
    'divulgacion.intro': "Educational and technical communication content. Because knowing engineering isn't useful if you can't explain it.",
    'experience.title': 'Experience',
    'contact.title': "Let's work together",
    'contact.intro': "I'm looking for internships in <span class=\"text-text\">mechanical design, automation or robotics</span>. If you have a project or opening, let's talk.",
    'contact.cv': 'Download CV',
    'footer.built': 'Designed and built in Puebla, MX 🇲🇽',
    'toggle.other': 'ES',
  },
};

const HISPANIC_REGIONS = ['MX','ES','AR','CO','CL','PE','VE','UY','PY','BO','EC','GT','CR','PA','DO','CU','HN','SV','NI','PR'];

function detectLang() {
  const saved = localStorage.getItem('portfolio-lang');
  if (saved === 'es' || saved === 'en') return saved;
  const langs = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'en']);
  for (const l of langs) {
    const low = (l || '').toLowerCase();
    if (low.startsWith('es')) return 'es';
    const region = low.split('-')[1];
    if (region && HISPANIC_REGIONS.includes(region.toUpperCase())) return 'es';
  }
  return 'en';
}

function applyLang(lang) {
  const dict = I18N[lang] || I18N.es;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(node => {
    const k = node.getAttribute('data-i18n');
    if (dict[k] != null) node.textContent = dict[k];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(node => {
    const k = node.getAttribute('data-i18n-html');
    if (dict[k] != null) node.innerHTML = dict[k];
  });
  const cvHref = lang === 'es'
    ? 'assets/cv/Yahir_Aguirre_Garcia_CV_ES.pdf'
    : 'assets/cv/Yahir_Aguirre_Garcia_CV_EN.pdf';
  document.querySelectorAll('#cv-download, #cv-download-contact').forEach(a => { a.href = cvHref; });
  const label = document.getElementById('lang-label');
  if (label) label.textContent = dict['toggle.other'];
  // Re-render data-driven sections with the new language
  if (typeof renderProjects === 'function') renderProjects();
  if (typeof renderSkills === 'function') renderSkills();
  if (typeof renderExperience === 'function') renderExperience();
  if (typeof renderDivulgacion === 'function') renderDivulgacion();
  if (window.lucide) window.lucide.createIcons();
}

function initLang() {
  const current = detectLang();
  applyLang(current);
  const btn = document.getElementById('lang-toggle');
  if (btn) {
    btn.addEventListener('click', () => {
      const now = document.documentElement.lang === 'es' ? 'en' : 'es';
      localStorage.setItem('portfolio-lang', now);
      applyLang(now);
      if (window.lucide) window.lucide.createIcons();
    });
  }
}

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  renderSkills();
  renderExperience();
  renderDivulgacion();
  initNavShrink();
  initLang();
  if (window.lucide) window.lucide.createIcons();
});
