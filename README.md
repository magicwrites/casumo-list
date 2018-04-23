## Quick start

- to run for development just do `npm install` and `npm start`
- you can also view it deployed on my [website](http://maciej.mazur.site/casumo-list)

## Used tech

- `react` + `redux` for basics
- `create-react-app` just to avoid custom setup, ejected due to webpack setup of webworker
- webworker to perform sorting and data creation without freezing the ui
- `react-virtualized` to tackle this DOM rendering challenge
- more details in code comments

## Project structure

- application: main component to rule them all
- areas: sections of the application, which can reuse components from...
- common: general-use components like buttons or tiles
- worker: web worker to perform math-heavy duty

## Tested on

- latest chrome, firefox, edge

## Known issues

- have not really bothered to make a responsive website, so please use screen with 700px +
- if there are loads of records (500,000+ on my machine), sorting freezes browser for notable amount of time on completion
- firefox blinks terribly on scroll
- webworker died once during my testing, doesnt really seems to be happening anymore though
- could have introduced less or sass to store some colors in variables, opted out since this is a really simple demo