# Etapa de construcción de la aplicación Angular
FROM node:20.10.0 as build

# Directorio de trabajo
WORKDIR /app

# Copiar los archivos del proyecto
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos de la aplicación
COPY . .

# Construir la aplicación para producción
RUN npm run build -- --output-path=dist/rd --configuration production

# Etapa de Nginx
FROM nginx:stable-alpine

# Copiar la configuración de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar los archivos construidos desde la etapa anterior
COPY --from=build /app/dist/rd /usr/share/nginx/html

# Exponer el puerto 80 para que Nginx pueda servir la aplicación
EXPOSE 80

# Comando para ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]
