---
title: MovieTime Search App
---

This is an application that provides the main functions for an entertainment search app (Television Shows and Movies)

<img width="1431" alt="Screen Shot 2021-03-29 at 2 19 33 PM" src="https://user-images.githubusercontent.com/63320350/112881705-00efa200-909a-11eb-8e4b-ef70e5f386ce.png">

**Setup**

Clone this repo to your desktop and run npm install or yarn install to install all the dependencies.

It is built with Create React App so don't worry about modifying your port or anything.

Set up an environment variables file and import API KEY from https://www.themoviedb.org/ into the following files as API_KEY

- Search.js
- tvSearch.js
- TrendingSearch.js

or you can just directly enter your API KEY into the template literals to replace the API_KEY variable.

**Usage**

After you clone this repo to your desktop, go to its root directory and run npm install or yarn install to install its dependencies.

Once the dependencies are installed, you can run npm start to start the application. You will then be able to access it at localhost:3000

**Features**

- Search for Either Movies Or TV Shows
  - On the front page, the search bar will search for both movies and TV
  - On the Movies tab, the search bar will only search for Movies and on the TV tab, only for TV Shows
- The search bar is initially hidden until you either click the floating search button
- When you click on a show or movie, it will take you to a page with "more" info and also list recommendations based on what you clicked on.

**Challenges**

- Responsive Design: I have a few break points (mobile, tablet, laptop, large screens) - It was difficult to get this right and still isn't 100% but through doing research and just really focusing, I was able to over come.
- Adding Features: After initially accomplishing the MVP, I decided to add a bunch of features like using react router to create multiple pages for each fetch movie/show. Using Hooks to manage state was initially pretty easy because I didn't have to drill too many layers but after adding features, I found myself drilling pretty deep for some state which I was able to do but it would have been easier to set up a Context provider for certain pieces of state that I need throughout the app. Either way, it works.

**Design Decisions**

- **Color Scheme** - I didn't want any crazy color scheme to take away from the core concept and features of the app, which was to simply discover movies and TV shows. Thus, I chose a pretty basic scheme of greenish grays and other grays and slightly offwhite background.
- **Search Button / Bar** - obviously, the ability to search is the most important thing about the app so I created a search bar that wouldnt' get lost as users were navigating the site but I also didn't want it to be too cumbersom so I creating a floating search button that can be accessed any where on the app.
- **Home Page** - it opens a search bar that searches for movies and TV, on Film Tab it opens the search bar to search for films, on TV tab for TV. And on the details pages, the search button will take the user back home toan open search bar for movies and TV
- **Categories** - You will also notice that on the home page, I show if the content is a movie or tv show as it could be confusing if the user is just searching for content. I didn't feel the need to show it on the other pages.
- **Recommendations** - On certain screens, I show the backdrop photos instead of the posters and as large as the screen allows. on other screens and in landscape on some tablets are display in one horizonztal line which just felt cleaner.

**Future Improvements/Features**

- Add a back end that will allow the following:
  - User Accounts - So users can tag content they want to watch
  - Reviews - give the user the ability to rate a movie/show
  - Friends - Ability to connect to friends and share content with them
- API - I would love to dig deeper into the API and potentially figure out how to add where the content can be streamed or what theaters it is showing in.
