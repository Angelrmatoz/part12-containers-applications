# Todo App Frontend

Esta es la interfaz de usuario de la aplicación Todo App, construida con React y Vite.

## Requisitos previos

Para ejecutar este frontend de forma independiente, necesitarás:
- **Node.js** (versión 18 o superior recomendada)
- **Backend**: El servidor backend debe estar en ejecución para que la aplicación sea funcional.

## Configuración

El frontend necesita saber dónde se encuentra el backend. Esto se configura mediante una variable de entorno:

- `VITE_BACKEND_URL`: La URL base de la API del backend (ej. `http://localhost:3000`).

## Cómo ejecutar (Sin Docker)

1. Instala las dependencias:
   ```bash
   npm install
   ```

2. Ejecuta el servidor de desarrollo:
   ```bash
   VITE_BACKEND_URL=http://localhost:3000 npm run dev
   ```
   La aplicación estará disponible en [http://localhost:5173](http://localhost:5173).

3. Para construir la versión de producción:
   ```bash
   npm run build
   ```
   Esto generará los archivos estáticos en la carpeta `dist/`.

## Pruebas

Puedes ejecutar los tests unitarios con:
```bash
npm test
```