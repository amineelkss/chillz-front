# Étape 1 : Build
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Déclare l'argument qui sera passé depuis docker-compose
ARG REACT_APP_API_URL

# Définit la variable d'environnement pour React lors du build
ENV REACT_APP_API_URL=$REACT_APP_API_URL

RUN npm run build

# Étape 2 : Serveur Nginx pour servir les fichiers statiques
FROM nginx:stable-alpine

# Copie le build React dans le dossier où Nginx sert les fichiers
COPY --from=build /app/build /usr/share/nginx/html

# Expose le port 80 (Nginx)
EXPOSE 80

# Démarre Nginx en avant-plan
CMD ["nginx", "-g", "daemon off;"]
