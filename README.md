# Portafolio — Yahir Aguirre García

Portafolio profesional. Sitio estático puro (HTML + Tailwind CDN + JS vanilla). Sin build, sin dependencias.

## 🚀 Ver localmente

Abre `index.html` en el navegador. Ya. Eso es todo.

O corre un servidor local (mejor para probar rutas):
```powershell
# Con Python
python -m http.server 8000
# Luego abre http://localhost:8000
```

## 📁 Estructura

```
portfolio/
├── index.html              ← página única
├── assets/
│   ├── css/style.css       ← estilos custom
│   ├── js/main.js          ← datos (proyectos, skills, experiencia) + render
│   ├── img/
│   │   ├── portrait.jpg    ← TU foto profesional
│   │   └── projects/       ← 1 imagen por proyecto (biped.jpg, sumobot.jpg, etc.)
│   └── cv/
│       └── Yahir_Aguirre_Garcia_CV.pdf   ← copia aquí tu CV
└── README.md
```

## ✏️ Cómo editar el contenido

Todo el contenido (proyectos, skills, experiencia) vive en **`assets/js/main.js`** en los arrays `PROJECTS`, `SKILLS`, `EXPERIENCE`. Edita ahí, guarda, recarga.

## 🖼 Imágenes y videos que necesitas añadir

### Videos (`assets/video/`)
| Archivo | Contenido |
|---|---|
| `fanuc.mp4` | Video del brazo FANUC funcionando (soldadura) |
| `pendulo.mp4` | Video del péndulo invertido estabilizándose |
| `esprit.mp4` | Video del maquinado CNC / simulación ESPRIT |

> Tip: pásalos a MP4 comprimido (H.264, ~5–15 MB). Con ffmpeg:
> `ffmpeg -i entrada.mov -vcodec h264 -acodec aac -crf 28 fanuc.mp4`

### Imágenes de proyectos (`assets/img/projects/`)
| Archivo | Proyecto |
|---|---|
| `fanuc.jpg` | Poster del video FANUC (frame estático) |
| `pendulo.jpg` | Poster del video del péndulo |
| `esprit.jpg` | Poster del video ESPRIT / render de la pieza |
| `fea.jpg` | Screenshot de la simulación FEA del caballete |
| `cfd.jpg` | Screenshot de COMSOL — disipador de microcanales |
| `brazo.jpg` | Foto del brazo robótico de cinemática |
| `starter.jpg` | Foto del motor starter armado |
| `maquinas.jpg` | Foto del transformador o motor AC bobinado |
| `ecualizador.jpg` | Screenshot del ecualizador en LabVIEW / Proteus |
| `embebidos.jpg` | Foto de una práctica embebidos (Rpi + Arduino) |
| `biped.jpg` | Foto o render del robot bípedo |
| `sensores.jpg` | Foto del circuito de acondicionamiento |

### Foto de perfil
| Archivo | Qué va aquí |
|---|---|
| `assets/img/portrait.jpg` | Tu foto profesional (cuadrada, ~600x600) |

Si falta una imagen, el sitio muestra un placeholder — **no se rompe**.

### Reportes técnicos (`assets/docs/`)
✅ **Ya están todos copiados** — 21 PDFs de todos tus proyectos.

## 🌐 Publicar en GitHub Pages

Ver instrucciones detalladas en el chat, o resumen:

```bash
cd portfolio
git init
git add .
git commit -m "portfolio inicial"
git branch -M main
git remote add origin https://github.com/TUUSUARIO/TUUSUARIO.github.io.git
git push -u origin main
```

Luego en GitHub → Settings → Pages → Source: `main` branch → Save. Listo.
