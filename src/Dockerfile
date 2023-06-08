FROM node:16.18.0

# set working directory
WORKDIR /app


# install app dependencies
COPY package.json ./

RUN npm install --silent


# add app
COPY . ./

# start app
CMD ["npm", "start"]
