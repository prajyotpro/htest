# Node Application
API service development framework build over express.js

Framework (MVC)
  - node.js
  - mongoose
  - gulp

### Folder Structure
  - crons : cron scripts for cron jobs
  - app : source code written in coffeescript
    - config : all configurations
    - controllers : all controllers
    - core : core modules of architecture
    - lib : custom libraries
    - middlewares : all custom middlewares
    - migrations : all migration scripts
    - models : all models
    - routes : all defined routes
    - test : TDD test cases written in mocha and chai
    - www : main project exec
  - doc : api doc

### Instalation
  - clone git repository
  - npm install
  
### Execution
- production 
  -- npm start OR pm2
- development
-- gulp (please check gulpfile.js for tasks)
