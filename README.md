# HeliCarrier Project

Project submission for HeliCarrier. Live Preview can be found at [Heli App](https://shady-heli.netlify.app/)

## Project Summary

This submission is a demo application that consumes a mock [Graphql API](https://heli-gql.herokuapp.com/) and implements filtering and search of a mini application.

### Technologies Used

This project was built using:

- [Reactjs](https://reactjs.org/)
- [GraphQL](https://graphql.org/)
- [TailwindCSS](https://tailwindcss.com/)

## Available Scripts

To recreate this project:,

- Clone the repository
- CD into project folder
- In project folder;

### `yarn install`

Run yarn install or npm install to downloads all required depencies and their correct versions.

```bash
yarn install
# or
npm install
```

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

```bash
npm start
```

## Features

Project satisfies the project requirements and user stories as mentioned below:

### Implement filter and search feature

If you click on a filter or use the search box, only the data containing the value should be shown.

### Implement data in wireframe design

This lists all the transactions in a simple layout that matches the given wireframe

## Thought Process

### GraphQL Server

This took a while to because I was looking for a way to set it up as quickly as possible, I found a package `json-graphql-server` that allows you serve up a graphql server by supplying just json data. This looked good but it could not be deployed, for some reason, the server only worked in localhost. I had to scrap the entire server and build a minor graphql server from scrath using json data generated from [json-generator](https://json-generator.com/#)

This server was deployed on heroku and can be found at [shady-gql](https://heli-gql.herokuapp.com/) with its source code located in this [repo](https://github.com/iyanushow/gql-server)

### Filtering and Search

I initially thought about implementing a backend search and filter, but I went against that for two major reasons

> This is a frontend position and I believe the frontend implemtation is the skill to be tested
> I didn't have sufficient time to write out all the resolve functions and arguments in my new graqphql server

Thus I went with the front end implementation of the search and the filters

The search and filter work collaboratively in helping reduce the data based on specified parametes of `month`, `status`, and `type`

### Layout

I went with a simple layout and minimal styling achieved with the help of tailwind-css

## Final Notes

In all, this was a fun and challenging project to work on, It brought up my knowledge about the basics of reactjs in implementing web applications. I also learnt an important lesson which is that I should focus more on finishing functionality before worrying about other issues like deployment and styling
