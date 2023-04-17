## Quick start

- original [task description can be found here](/OBJECTIVE.md)
- to run for development just do `npm install` and `npm start`
- you can also view it deployed on my [website](http://casumolist.mazur.site)

## Used tech

- [`react`](https://reactjs.org/) + [`redux`](https://redux.js.org/) for basics
- [`create-react-app`](https://github.com/facebook/create-react-app) just to avoid custom setup, ejected due to webpack setup of webworker
- webworker to perform sorting and data creation without freezing the ui
- [`react-virtualized`](https://github.com/bvaughn/react-virtualized) to tackle this DOM rendering challenge
- more details in code comments

## Project structure

- application: main component to rule them all
- areas: sections of the application, which can reuse components from...
- common: general-use components like buttons or tiles
- worker: web worker to perform math-heavy duty

## Tested on

- latest chrome, firefox, edge

## Known flaws

- have not really bothered to make a responsive website, so please use screen with width of 700px and more
- if there are loads of records (500,000+ on my machine), sorting freezes browser for notable amount of time on completion
- chrome is not really handling well if there are more than 1,000,000 records, and usually dies
- firefox and safari blinks terribly on scroll
- could have introduced less or sass to store some colors in variables, opted out since this is a really simple demo
- ~~no tests (╯°□°）╯︵ ┻━┻~~ ok, I have added a few

## Time spent

- 3h for initial concept in [`vuejs`](https://vuejs.org/)
- 2h to scrap vuejs and remake it in [`react`](https://reactjs.org/), [`redux`](https://redux.js.org/) and [`react-virtualized`](https://github.com/bvaughn/react-virtualized)
- 4h to prepare webworker for sorting and creation duty
- 4h for some styling to make it prettier
- 2h to move webworker into single file rather than inline blob while ejecting [`create-react-app`](https://github.com/facebook/create-react-app)
- 4h to refactor and order everything up nicely
- 4h to again scrap styles and make it pretty like it is today
- 2h to search for bugs, fix them, comment and deploy everything
- 2h to add sample prop type and tests just to show that I can

In total, around 27 hours on coding and a few hours spent in between to figure out how to approach the challenge.
