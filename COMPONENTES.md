# Explicación de Componentes de la App Web

A continuación se describe el funcionamiento de cada componente principal de esta landing page creada con React, Vite y Tailwind CSS:

## App.tsx
Componente raíz de React. Suele ser el punto de entrada para la estructura general de la aplicación. Aquí puedes incluir rutas, layouts globales o lógica de contexto.

## main.tsx
Archivo de entrada principal. Renderiza el componente `App` dentro del elemento `root` del HTML usando ReactDOM. Aquí se importa el CSS global.

## index.css
Archivo de estilos globales. Incluye las directivas de Tailwind CSS y puede contener estilos personalizados para toda la app.

## assets/
Carpeta para imágenes, íconos y otros recursos estáticos usados en la app.

## App.css
Archivo de estilos específico para el componente `App.tsx`. Puedes agregar aquí estilos personalizados para ese componente.

## Otros archivos relevantes
- **index.html**: Plantilla HTML principal donde se monta la app React.
- **vite.config.ts**: Configuración de Vite para el proyecto.
- **tailwind.config.js**: Configuración de Tailwind CSS (paths, temas, plugins).
- **postcss.config.js**: Configuración de PostCSS para procesar los estilos.

---

Si agregas nuevos componentes, puedes documentarlos aquí para mantener una referencia clara del propósito y funcionamiento de cada uno.
