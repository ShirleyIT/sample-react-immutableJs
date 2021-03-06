# Use Immutable.js in React Component
Optimizing Performance of the React Component using [Immutable.js](https://github.com/ErickWang812/sample-react-immutableJs.git)

### What's in it?

* Simple src/app.jsx and src/styles/style.scss (local module scss).
* Webpack configuration for development (with hot reloading) and production (with minification).
* CSS module loading, so you can include all of your css style in app.jsx by 
```import './path/to.css';```.
* Both js(x) and css hot loaded during development.
* [Webpack Dashboard Plugin](https://github.com/FormidableLabs/webpack-dashboard) on dev server.

### To run

* You'll need to install bower first.
```
npm install -g bower
```

* Install the bower components:
```
bower install
```

* Then install the dependencies:

```
npm install
```

* Run development server:

```
npm start
```

* Or you can run development server with [webpack-dashboard](https://github.com/FormidableLabs/webpack-dashboard):

```
npm run dev
```

Open the web browser to `http://localhost:8888/`

### Eslint
There is a .eslintrc config for eslint ready with React plugin.
To use it, you need to install additional dependencies though:

```
npm install --save-dev eslint eslint-plugin-react
```

To do the actual linting, run:

```
npm run lint
```

### Notes on importing css styles
* styles having /src/styles in their absolute path are considered part of the application and exported as local css modules.
* other styles are considered global styles used by many components and are included in the css bundle directly.

### Snapshot
![Alt text](public/images/snapshot-0.png?raw=true "")

### Contribute
Please contribute to the project if you know how to make it better, including this README :)
