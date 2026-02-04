# Full Stack Open - Parte 12: Containers y Aplicaciones

Este repositorio contiene los ejercicios y la aplicación práctica de la Parte 12 del curso Full Stack Open. El objetivo principal es aprender sobre la contenedorización de aplicaciones utilizando Docker y Docker Compose, así como la gestión de entornos de desarrollo y producción.

## El Proyecto: Todo App

El núcleo de esta parte es una aplicación de gestión de tareas (Todo App) que consta de:
- **Frontend**: Una aplicación React moderna construida con Vite.
- **Backend**: Una API Express que utiliza MongoDB para el almacenamiento persistente y Redis para el conteo de accesos.
- **Nginx**: Utilizado como proxy inverso para servir el frontend y redirigir las peticiones a la API.

## Estructura del repositorio

- **todo-app/**: Contiene el código fuente completo de la aplicación, configuraciones de Docker y Nginx.
  - `todo-frontend/`: Aplicación React.
  - `todo-backend/`: Servidor Express.
  - `nginx.conf`: Configuración del proxy inverso.
- **script-answers/**: Registros de sesiones de terminal (`script`) realizados durante los ejercicios teóricos (Ubuntu 101, 102, etc.).

## Cómo empezar

Para ejecutar la aplicación completa utilizando Docker:

1. Navega a la carpeta `todo-app/`.
2. Ejecuta el comando:
   ```bash
   docker compose up
   ```
   *Nota: Usa `docker-compose.dev.yml` para el entorno de desarrollo con hot-reloading.*

Para más detalles sobre cada componente, consulta los archivos README en sus respectivas carpetas.

## Ejercicios realizados

A lo largo de esta parte se han completado diversos ejercicios que cubren:
- Comandos básicos de Linux y Docker.
- Instalación de dependencias en contenedores.
- Orquestación de múltiples servicios (App, DB, Redis, Nginx).

---
**Autor:** Ejercicios basados en el curso [Full Stack Open](https://fullstackopen.com/)
