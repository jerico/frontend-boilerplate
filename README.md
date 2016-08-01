# Frontend-only Boilerplate

This is my boilerplate for frontend-only development.

It utilizes the following tools:

- **php** for its built-in server to serve php files (useful for using partials e.g. `_header.php`)
- **gulp** for task-runner
- **browser-sync** for automatically reloading pages on file change
- **stylus** for css preprocessor with **rupture** for easier css breakpoints
- **postcss** with **autoprefixer** for browser-specific css and **lost** for grid system

## How to use

On initial clone, do an `npm install`. After the setup is done, you can use `gulp serve` to start development.

## TODO

- Add new task to gulpfile.js that automatically concatinate all scripts in `components/*.js` to `app.js`
- Explain structure
