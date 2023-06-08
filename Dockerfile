FROM node:16.18.0

# set working directory
WORKDIR /src/App


# install app dependencies
COPY package.json ./

RUN npm install --silent


# add app
COPY src ./

# start app
CMD ["npm", "start"]
