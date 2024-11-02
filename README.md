# React-native Web

This is a starter for a full ERNN stack. Express, React-Native web with vite-Node. 

TLDR;

```bash
npm install
npm run dev
```

A ERNN stack is useful for apps that consume apis that require a backend like paypal buttons integration. Stripe and Square also work this way, but let you define products in their user interface. Sendgrid and Twilio are also good targets for ERNN. You can also consume microfrontends in this stack.

To debug the server in this environment do `npm run dev` in a JavaScript Debug Terminal. To debug the front end, use the browser debugger.

If you want to make a MERNN (Mongo, Express, React-Native, Node) stack with this just add the docker in docker feature to your dev container/codespace.

```json
{
    // ... .devcontainer/devcontainer.json
    "image": "mcr.microsoft.com/devcontainers/javascript-node:latest",
    "overrideCommand": true,
    "runArgs": [
        "--cap-add=SYS_PTRACE",
        "--security-opt",
        "seccomp=unconfined"
    ],
    "features": {
        "ghcr.io/devcontainers/features/docker-in-docker:2": {}
    },
    "customizations": {
        "vscode": {
            "extensions": [
                "ms-azuretools.vscode-docker",
                "streetsidesoftware.code-spell-checker",
                "dbaeumer.vscode-eslint"
            ]
        }
    }
    // ...
  }

```

You will also need to add a docker-compose file for mongo:

```yaml
# mongodb/docker-compose.yml ... Use root/example as user/password credentials
version: '3.1'

services:

  mongo:
    image: mongo
    restart: always
    ports: 
      - 27017:27017
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: example
    volumes: 
      - ./data:/data/db
  mongo-express:
    image: mongo-express
    restart: always
    ports:
      - 8081:8081
    environment:
      ME_CONFIG_MONGODB_ADMINUSERNAME: root
      ME_CONFIG_MONGODB_ADMINPASSWORD: example
      ME_CONFIG_MONGODB_URL: mongodb://root:example@mongo:27017/
      ME_CONFIG_BASICAUTH: 1
```

You will also need to edit your `package.json` to run docker-compose

```json
  "scripts": {
    "dev": "docker-compose -f mongodb/docker-compose.yml restart && vite-node --watch index.ts",

```


Vite makes for a dev environment that can be run "beaucoup vite!"