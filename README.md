# Frontend-only Boilerplate

This is my boilerplate for frontend-only development.

It also utilizes the following tools:

- **php** with its built-in server to serve php file (useful for using partials e.g. `_header.php`)
- **gulp** for task-runner
- **browser-sync** to automatically reload pages on file change
- **stylus** for css preprocessor
- **postcss** with **autoprefixer** for browser-specific css
- **lost** for grid system
- **rupture** for easier css breakpoints

## How to use

On initial clone, do an `npm install`. After the setup is done, you can now use `gulp serve` to start development.

## TODO

- Add new task to gulpfile.js that automatically concatinate all scripts in `components/*.js` to `app.js`
