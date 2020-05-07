# Node Application
API service development framework build over express.js

Framework (MVC)
  - node.js v12.16.3
  - mongoose
  - gulp

### Folder Structure
  - app : source code written in coffeescript
    - config : all configurations
    - controllers : all controllers
    - core : core modules of architecture
    - lib : custom libraries
    - models : all models
    - routes : all defined routes
    - www : main project exec
  - doc : api doc

### Instalation
  - clone git repository
  - npm install
  
### Execution

- development
  -- gulp (please check gulpfile.js for tasks)
- production 
  -- npm start OR pm2
