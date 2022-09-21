# Setup

This chapter contains my setup for the project in case you would like to create a similar structure

## Client Side

1. Create a new Angular App with SCSS stylesheets

```bash
# Creatin
$ ng new client;
# We will say yes when ng asks us if we want Routing
# For styling we pick SCSS since we like structure.
#NOTE: If you like to code trough indentations (python,yaml,...) check out SASS
```

2. Add a CSS framework as a styling foundation

```bash
#To maintain control over the general styling we will use the TailwindCSS utility Framework
$ cd client
# We install following dev dependencies:
# TailwindCSS -> The Utility Framework
# PostCSS -> A dependency for autoprefixer
# PostCSS is basicly an API for CSS files and frameworks
# autoprefixer -> This tool will use postcss and automaticly add browser support to our CSS :D Yay!
$ npm install -D tailwindcss postcss autoprefixer
# Generate our Tailwind config file
$ npx tailwindcss init
# And add the files we want to use tailwind in to the content array within
```

Last but not least, add the tailwind directives to our global stylesheet to make them available trough out the project.

3.
