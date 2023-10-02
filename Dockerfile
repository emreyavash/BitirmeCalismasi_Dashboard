FROM node:10
 
WORKDIR /eticaretapp
 
COPY package*.json ./
 
RUN npm install
 
COPY . .
 
EXPOSE 8083
 
CMD [ "npm", "start" ]