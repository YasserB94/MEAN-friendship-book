# Friendship Book

This repository contains a digital version of a Belgian tradition 'friendship book' a book that would be shared by younglings and filled in by their friends as a memory, and to get to know their friends better.

## Tech Stack

As this project is based on a BeCode learning challenge. I will let myself inspire by the stack assigned.

- MongoDB : Database
- Angular : Frontend Javascript Framework
- Express : Backend NodeJS Framework
- NodeJS : Backend Javascript runtime environment

- TypeScript : As a learning challenge and a tool to write better code, I will abide by the use of TypeScript both in the front- and backend!

## Why a friendship-book ?

I sense that a ToDo list is a popular project to show on my developer' portfolio. Tough I feel like this project is more original and will challenge my knowledge a lot more since there are fewer examples of how to tackle this exercise on the web.

Meanwhile this project will cover the following:

- Building a web application in Angular
- Handle Forms in Angular
- Create a simple backend to support a Web Application
- Execute CRUD operations on a database
- Get out of my comfort zone and work with a new technology: MongoDB for the first time in a project based environment to showcase my adaptability.

## Project Setup

I'll start this project by setting up this repository with a client and a server folder containing an Angular app and an Express App

### Client

1. I used the Angular CLI to create a new app and chose SCSS as the styling solution.
   - SCSS is probably overkill for this project, but since I'm comfortable using CSS, I would rather improve my skills with SCSS!
2. Next it's time to remove the Angular boilerplate code and add a CSS utility framework to make life easier. For this project I will yet again pick my favorite CSS framework TailwindCSS!

### Server

Assuming you have TypeScript installed globally, we setup NodeJS with a simple ExpressJS App as the initial setup.

1. Install required modules and dependencies.
   Since it's the first ti,e I'm using TypeScript in the backend I would like to start of with a clear structure to avoid bad practices if this backend would extend to something more than the database connection api I need.

- Initialised nodeJS and TypeScript
- installed dotenv and express
- Added dev dependencies
  - types/express for express typescript support
  - types/node && ts-node for node typescript support
  - typescript
  - nodemon for some comfort developing

2. Created an entry point for the app

- Import dotenv && express
- load .env variables using dotenv
- Create a server class containing a public attribute app of type Express()
- Created a listen function that launches the server.
  - TODO: Turn this into a method, the server listens. not the file

3. Setup a couple of testing placeholder endpoints

- Added 2 Controllers
- Added a masterRouter
  - added a router for every controller
  - Redirect to the sub routers trough the masterrouter
- Configured app to use masterrouter middleware

4. Errorhandling

- For custom errorhandling setup an errorhandler Model
- Added try/catch blocks to the routers
- Configured app to use the errorhandler endpoint with a fallback error code 500
