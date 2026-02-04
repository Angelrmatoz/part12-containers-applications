# Todo App Backend

Este es el servidor de la aplicación Todo App, construido con Express. Proporciona una API para gestionar tareas y mantiene un contador de visitas.

## Requisitos previos

Para ejecutar este backend de forma independiente, necesitarás tener instalados y corriendo:
- **Node.js** (versión 16 o superior recomendada)
- **MongoDB**: Una instancia de MongoDB accesible.
- **Redis**: Una instancia de Redis accesible.

## Configuración y Variables de Entorno

El backend requiere las siguientes variables de entorno para funcionar correctamente:

- `MONGO_URL`: URL de conexión a MongoDB (ej. `mongodb://usuario:password@localhost:27017/the_database`).
- `REDIS_URL`: URL de conexión a Redis (ej. `redis://localhost:6379`).
- `PORT` (opcional): Puerto en el que correrá el servidor (por defecto 3000).

## Cómo ejecutar (Sin Docker)

1. Instala las dependencias:
   ```bash
   npm install
   ```

2. Ejecuta en modo desarrollo (con auto-reload):
   ```bash
   MONGO_URL=tu_url_mongo REDIS_URL=tu_url_redis npm run dev
   ```

3. O ejecuta en modo normal:
   ```bash
   MONGO_URL=tu_url_mongo REDIS_URL=tu_url_redis npm start
   ```

## Endpoints principales

- `GET /`: Muestra el contador de visitas (obtenido de Redis).
- `GET /todos`: Lista todas las tareas (desde MongoDB).
- `POST /todos`: Crea una nueva tarea.