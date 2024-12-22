# Usar una imagen base de Node.js
FROM node:20.10.0 as build

# Directorio de trabajo
WORKDIR /app

# Copiar los archivos del proyecto
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos de la aplicación
COPY . ./

# Construir la aplicación para producción
RUN npm run build -- --prod

# Usar un servidor estático para servir los archivos
FROM node:20.10.0

# Instalar http-server
RUN npm install -g http-server

# Exponer el puerto
EXPOSE 8080

# Comando para servir la aplicación
CMD ["http-server", "dist/tu-app-angular", "-p", "8080"]
