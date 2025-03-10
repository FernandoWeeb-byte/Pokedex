# React Assignment - Pokedex - Pokemon Detail App

## Exercise Overview

In this assignment, we'll be rendering a collection of pokemon, with data populated from PokeApi, and then we'll also fetch and render an individual pokemon's details when selected. A Figma is provided for the design guideline, along with some existing code



## Judging Criteria

The primary purpose of this exercise is to illustrate familiarity with React, and to create something visually presentable.

Main aspects:
- fetch data from an api (working with asynchronous code)
- state management (familiarity with React)
- UI / UX - note the details in the figma file. one criteria will be how close to the designs we can get. Details for assets, spacing, etc are provided in the figma. Note: the app should be responsive, eg. content stays centered, items wrap on screen width change. - two browser width are provided. (Our product team emphasizes attention to detail, according to the provided specifications.)

Figma file:
https://www.figma.com/community/file/1412899654438592175/pokemon-app



## Github Setup / Submission

1. create a repo on your own github, and have the code in this pokemon directory as the initial commit on a main branch
2. create a feature branch which will contain your additions to the codebase
3. create a pull request from your feature branch to the main branch

To submit your code:

- please ensure that the code will build - we will be running `yarn build` to check this
- send us an email with a link to the pull request



## Overview of provided code

A basic app (vite react-ts) has been provided, with some setup already done, currently rendering mock data. Feel free to edit any of these files to your liking. For styling, tailwindcss is provided, but feel free to add whatever library you are comfortable with.

Overview of notable directories:
```
src
|-- assets
|   |
|   |-- information-icons // icons used with the labels for weight, height, category, ability
|   |
|   |-- png-icons // icons for the pokemon's types
|   |
|   |-- vector // vectors for the pokemon's background where the sprite / image is displayed
|   |
|   |-- mockAllPokemon.ts // mock data list of pokemon
|   |
|   |-- mockDetailPidgeotto.ts // mock data of a single pokemon
|
|-- helpers // helper function to format api response to a format consumed by the app, and a helper function that returns the color / image to use for a given pokemon's type
```

To run the app:
`npm install` to install dependencies
`npm run dev` to start the app
(or similar yarn commands, if using yarn)



## Pokeapi Reference

The pokenode-ts package has been provided for convenience - it provides typescript types and methods to fetch data

API documentation:
https://pokenode-ts.vercel.app/clients/pokemon-client

(pokeapi is the underlying basis for this package, link for reference: https://pokeapi.co/docs/v2)



## Acceptance Criteria #1

On app load, fetch pokemon data from the api, and render a collection of pokemon names

- fetch the first 151 pokemon (from index 1 to 151, inclusive)
- display a list of names, arranged vertically



## Acceptance Criteria #2

When a pokemon in the list is clicked, we should fetch, and then render the selected pokemon's details

the details panel should include the selected pokemon's:
- sprite / image
- name
- id
- types
- weight, height, species, ability



## Acceptance Criteria #3

Implementation of the list and details panel should follow the specified designs in the figma.

Criteria:
- layout / alignment
- padding
- responsiveness
- colors / icons
- font sizes
- proper capitalization / casing
