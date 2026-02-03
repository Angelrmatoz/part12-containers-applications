# Instrucciones para construir y correr el frontend en un contenedor

1. Construye la imagen del frontend pasando la variable de entorno VITE_BACKEND_URL:

   docker build --build-arg VITE_BACKEND_URL=http://localhost:3000 -t todo-frontend .

2. Corre el contenedor exponiendo el puerto 80:

   docker run -p 8080:80 todo-frontend

3. Accede a la app en http://localhost:8080

Asegúrate de que el backend esté corriendo en http://localhost:3000 fuera de un contenedor.
