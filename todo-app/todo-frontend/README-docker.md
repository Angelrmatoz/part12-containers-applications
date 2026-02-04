# Instrucciones para construir y correr el frontend en un contenedor

1. Construye la imagen del frontend pasando la variable de entorno VITE_BACKEND_URL:

   docker build --build-arg VITE_BACKEND_URL=http://localhost:3000 -t todo-frontend .

2. Corre el contenedor exponiendo el puerto 80:

   docker run -p 8081:80 todo-frontend

3. Accede a la app en http://localhost:8081

Asegúrate de que el backend esté corriendo en http://localhost:3000 fuera de un contenedor.

Para ejecutar la imagen de producción:

```bash
# construir la imagen
docker build -t todo-frontend .

# ejecutar el contenedor (mapea el puerto 80 del contenedor al 8081 del host)
docker run -p 8081:80 todo-frontend
```

Accede a la app en http://localhost:8081
