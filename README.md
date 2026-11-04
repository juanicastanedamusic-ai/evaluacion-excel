# Evaluación de competencias en Excel

Sitio estático listo para Vercel. Conserva la estructura de la prueba original: datos del candidato, 30 preguntas en tres niveles, límite de 60 minutos con cuenta regresiva y reporte de resultados. No incluye marcas externas.

## Publicar en Vercel

1. Ingresa a [vercel.com/new](https://vercel.com/new) con tu cuenta.
2. Arrastra esta carpeta completa a la página o usa **Choose a folder to deploy**.
3. Confirma el nombre del proyecto y publica. No se necesita comando de instalación ni de compilación.

También puedes descomprimir el ZIP y subir la carpeta resultante. El archivo `index.html` debe quedar en la raíz del proyecto.

## Uso

- Abre `index.html` para una revisión rápida, o sirve la carpeta con cualquier servidor web estático.
- Las respuestas y los datos del candidato se procesan en el navegador; no se envían ni guardan en un servidor.
- El reporte se puede imprimir o guardar como PDF desde el botón final.

## Archivos

- `index.html`: estructura del sitio.
- `styles.css`: diseño adaptable a móvil y estilos de impresión.
- `script.js`: preguntas, navegación, calificación y reporte.
- `hero-motion.js`: animación flotante de la ilustración de portada (usa GSAP desde cdnjs).
