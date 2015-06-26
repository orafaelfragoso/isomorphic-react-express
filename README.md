# Isomorphic React + Express 4

Example of a modular structure with Isomorphism using React and Express 4.

## Why Modular?

Here's why you should be using/doing isomorphic code:

- Organization
- Scalability
- Maintenance
- Readability
- Works great with Agile (Each module a feature? Less code dependency?)
- Better Testing (Each module could have it's own environment and tests)
- It solves the search engines problem of indexing JS apps
- Same code for back and front-end


## Things I already implemented (I would love feedback)

- Package dependencies for each module
- Shared components (It's React!)
- Created separated files for each purpose (app, config and middlewares) instead of being everything inside one file.
- Using nodemon to reload environment
- Gulp Tasks
  - Compiling, concatenating and compressing SASS with SourceMaps
  - Optimizing Images
  - JSHinting the JS files (works with JSX too!)

## Things that are missing

- Tests
- Better modular folder structure

## Running the project

`npm install` and `npm start` to start the server.

`gulp` to tell gulp to watch for file changes

## How it works?

The project was totally inspired on David Wells' project: [Isomorphic React Example](https://github.com/DavidWells/isomorphic-react-example)

You should read his examples and watch his screencast to get a better understanding of how everything's working.

## Live Example

[Test it yourself](https://isomorphic-react-express.herokuapp.com)
