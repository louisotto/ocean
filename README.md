# About Ocean
Ocean is a lightweight, open-source web app that's easy to configure and quick to learn. It uses Node and Express on the back-end, along with Bootstrap 4, Flat-UI, Animate.css and Wow.js on the front-end.

Templates are handled by Jade, but it's easy to use EJS, or even plain HTML if you'd like.

# Installation
Download the package, cd into the directory and install dependencies:

```
npm install
```

#Running

If you have Nodemon installed, you can run the app with:

```
npm start
```

If you aren't using Nodemon, open package.json and edit line 6 to read:

```
"start": "node ./bin/www"
```

# Documentation

Docs are built into the demo, when you launch the site there's a Docs tab in the menu with detailed instructions.

# Current status & Todos

Still really not finished, the contact form needs functionality, the CSS code needs cleaning and maybe changed to Sass. Docs aren't done, but progress is being made. This is a really early release, so be warned.

## Todos

### Front end
* Fix mobile issues
* Refactor CSS and add Sass support
* <s>Add lightbox functionality to work images</s>
* Fix minor style inconsistencies

### Back end
* Add email functionality to contact form
* Add build tools to project
* Incorporate some Express server-side magic to enable caching, gzipping etc

### Misc
* Finish up the docs
* Need a logo
* Need a favicon of the logo