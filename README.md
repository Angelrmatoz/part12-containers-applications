# Full Stack Open - Parte 12: Containers y Aplicaciones

Este proyecto contiene ejercicios prácticos de la Parte 12 del curso Full Stack Open, enfocados en el uso de contenedores Docker, administración de aplicaciones en contenedores, y automatización de tareas en entornos Linux.

## Estructura del proyecto

- **script-answers/**: Carpeta donde se registran los comandos y pasos realizados en los ejercicios usando el comando `script` de Linux. Incluye archivos como `exercise12_1.txt`, `exercise12_2.txt`, `exercise12_3.txt`, y `exercise12_4.txt`.
- **todo-app/**: Aplicación de ejemplo para practicar el uso de contenedores. Incluye:
  - **old-todo-frontend/**: Versión antigua del frontend de la app de tareas.
  - **todo-backend/**: Backend de la app, con integración a MongoDB y Redis.
  - **todo-frontend/**: Versión moderna del frontend usando Vite y React.

## Ejercicios realizados

### Ejercicio 12.1 y 12.2
- Práctica básica de comandos en Ubuntu y Docker.
- Registro de comandos y salidas en `script-answers/exercise12_1.txt` y `script-answers/exercise12_2.txt`.

### Ejercicio 12.3: Ubuntu 101
- Uso de contenedores Ubuntu para editar archivos con Nano.
- Registro de la sesión con el comando `script`.
- Edición del archivo `/usr/src/app/index.js` para agregar `console.log('Hello World')`.

### Ejercicio 12.4: Ubuntu 102
- Instalación de Node.js dentro de un contenedor Ubuntu.
- Ejecución del archivo `/usr/src/app/index.js` usando Node.js.
- Registro completo de la sesión en `script-answers/exercise12_4.txt`.

## Tecnologías utilizadas
- **Docker**: Para crear y administrar contenedores Linux y Node.js.
- **Node.js**: Para ejecutar scripts JavaScript dentro de los contenedores.
- **Nano**: Editor de texto en terminal para editar archivos dentro de los contenedores.
- **MongoDB y Redis**: Bases de datos utilizadas en el backend de la app de tareas.
- **React y Vite**: Para el desarrollo del frontend moderno.

## Cómo ejecutar los ejercicios

1. Clona el repositorio y navega a la carpeta del proyecto.
2. Sigue las instrucciones de cada ejercicio en los archivos de la carpeta `script-answers`.
3. Utiliza Docker para crear y acceder a los contenedores según las instrucciones.
4. Revisa los archivos `.txt` para ver el registro de comandos y salidas.

## Notas adicionales
- Los archivos de la carpeta `script-answers` se generan automáticamente al usar el comando `script` dentro de los contenedores.
- Asegúrate de tener Docker y Node.js instalados en tu sistema para poder ejecutar y probar los ejercicios.
- El proyecto está organizado para facilitar la práctica y el aprendizaje de herramientas modernas de desarrollo y automatización.

---

**Autor:** Ejercicios basados en el curso [Full Stack Open](https://fullstackopen.com/)
