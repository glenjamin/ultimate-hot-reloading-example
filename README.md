# Universal React & Redux Web Application Template

As a developer, it is hard to beat the simplicity that comes with starting a new project in Ruby on Rails. In less than two minutes you can go from nothing to building the homepage. On the other hand, the extreme flexibility that comes from starting a Node app is impossible to beat. You can cherry pick from hundreds of thousands of libraries each suited for a specific task. With that amazing flexibility comes a unique problem, setup and configuration.

Universal JavaScript is the future of web development. Unfortunately, there are no pre-made templates yet that compares to the simplicity of starting a Ruby on Rails app while providing all the features that modern developers want, namely:

  - Universal React & Redux
  - Hot Reloading of everything while in development mode
  - Styling with [CSS Modules](https://github.com/css-modules/css-modules)
  - Modular testing (this template uses Mocha and Chai)
  - Ready to deploy to Heroku as is

The goal of this project is to build a simple and instantly deployable web application template with the simplicity of Rails and the full power of Universal JavaScript.

This project builds on [glenjamin's ultimate hot reloading example](https://github.com/glenjamin/ultimate-hot-reloading-example).

### Installing

This project is being developed in Node 5.4.0, earlier versions of Node may or may not work.

```
git clone https://github.com/andrewtpoe/universal-react-redux.git
cd universal-react-redux
npm install
```

### Launch the development server

`npm run start:dev`

The development server will turn off many features that should only be functional in production, like Google Analytics. It will also enable Hot Reloading of the routes, CSS, and JavaScript for a more friendly development environment.

### Launch the production server

```
npm run build:production
npm run start
```

The production server is what will be run on Heroku. In your Heroku app, set an environment variable called `NODE_ENV` to equal `production`.

### Creating new components

This project strongly encourages a preference towards a functional programming style and ES6 syntax. Additionally, it encourages a very modular approach to building components. Each new component, container, or page should be created in a new folder. This new folder should have the following 4 files:
  * index.js - This is the actual React component.
  * styles.css - This is the styles specific to only this React component. Import the styles into index.js in the same manner you will require any other JavaScript library: `import Styles from './styles.css'`. Use the styles like this: `<div className={Styles.yourClassName} ></div>`. For more information on using CSS modules, check out [these docs](https://github.com/css-modules/css-modules)
  * tests.js - This file contains the tests specific to this component. This skeleton is set up to test using mocha and chai
  * package.json - Each component folder uses a package file to specify a main file. The contents of the package.json should be:
  ```
  {
    "main": "./index.js" # Set the main file to your React component.
    "name": "YourComponentName", # This should be your folder's name as well
    "private": true, # This prevents using the module incorrectly
  }
  ```

When creating a new page, add the route to `setup/page_routes.js`.

Please strive to adhere to these guidelines when developing new components.

## Deploying this application

This application is ready to deploy to Heroku as is. Before deploying this skeleton make sure you update the config/environment.js file with your relevant variables.

Run these commands to create and deploy a new Heroku application:
```
npm run test # Run the tests and verify they all pass.
npm run build:production # Build the minified and gzipped versions of the CSS and JS files. Also, create/ clean up the www folder.
heroku create # Create a new Heroku application
git push heroku master # Make it live.
heroku open # Open your new app!
```

## Contributing

Contributions are welcome. Please fork the project, create a feature branch complete with tests as applicable, and submit a pull request to master. Please use the libraries included whenever possible in order to reduce complexity of the application.
