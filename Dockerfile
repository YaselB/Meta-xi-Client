# Usa una imagen de Node.js 20.10.0 para la etapa de compilación
FROM node:20.10.0 AS build

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Compila la aplicación en modo producción
RUN npm run build -- --output-path=dist/rd --configuration production

# Usa una imagen de Nginx para servir los archivos estáticos
FROM nginx:stable-alpine

# Copia los archivos de compilación al directorio predeterminado de Nginx
COPY --from=build /app/dist/rd /usr/share/nginx/html

# Copia un archivo de configuración de Nginx personalizado (opcional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expone el puerto 80
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
