# Todo App - Full Stack

Esta es la aplicación principal de la Parte 12. Se trata de un gestor de tareas (To-do list) que utiliza una arquitectura de microservicios básica, orquestada con Docker.

## Componentes

- **Frontend**: Ubicado en `./todo-frontend`. Desarrollado con React + Vite.
- **Backend**: Ubicado en `./todo-backend`. Desarrollado con Express.js.
- **Base de Datos**: MongoDB para persistencia de los "todos".
- **Cache/Contador**: Redis para contar cuántas peticiones se han hecho al backend.
- **Proxy Inverso**: Nginx para unificar el acceso a través del puerto 80.

## Cómo ejecutar la aplicación completa

La forma recomendada de ejecutar este proyecto es mediante **Docker Compose**, ya que gestiona automáticamente todas las dependencias y redes.

### Modo Producción
Para levantar la aplicación tal cual se vería en un entorno real:
```bash
docker compose up
```
Esto levantará el frontend, backend, MongoDB, Redis y Nginx. Podrás acceder a la aplicación en [http://localhost](http://localhost).

### Modo Desarrollo
Si deseas realizar cambios y verlos en tiempo real (Hot Reloading):
```bash
docker compose -f docker-compose.dev.yml up
```
En este modo, el frontend y backend se montan como volúmenes, permitiendo que los cambios en el código se reflejen instantáneamente.

## Ejecución por separado

Si deseas ejecutar los componentes de forma individual sin Docker Compose (por ejemplo, para debugging específico), por favor consulta los README individuales en sus respectivas carpetas:

- [README del Frontend](./todo-frontend/README.md)
- [README del Backend](./todo-backend/README.md)
