# Shoppies
The Shoppies: Movie awards for entrepreneurs

Link to Shopify Challenge: https://shoppies-movies-app.vercel.app  
Project Github: https://github.com/KevinLam2980/Shoppies  
Whimsical wireframe plan: https://whimsical.com/shoppies-Vzz9TQtnkVb5iR4kJsTda@2Ux7TurymNqiVnH8kayk

Hello! Welcome to my interpretation of the Shoppies application! Shoppies is a web application that allows users to select 5 movies they think are worthy of an award, nominate them, and submit them. The application also allows users to see details about movie, such as the plot, writers, actors, ratings, genre, and more. 

Instructions for use: 
1) Type in a movie name (spaces are supported), and allow the search results to populate with the movies of your desire. Some movies wont load until the full name is typed in as a limitation of the API, but live search functionality is active in the sense that a get request will be called upon every onchange of the search input. 
2) Hover over a movie and click to nominate the moive. Your movie should disappear from the search results (disabling you from nominating the same movie more than once) and appear in the nominations list (located to the right or at the bottom of the screen depending on your device). The move along with additional information and a link to the official IMDB website should appear. 
3) To remove a nominated movie, simply press 'remove movie' at the bottom right, or very bottom of the screen, depending on your screen.
4) Once you have reached 5 nominated movies, you should will have a chance to make further adjustments, or submit your nominations.

Custom notifications were built for this application and can be used anywhere in the application as it scales.  

Application is set up to allow for use of loading animations between searches and pulling movie information, but I decided to not include any loading animations as it takes away from the fluidity of the application since data is retrieved quickly, and causes the loader flash onto the screen before quickly dissapearing, which seemed a little jarring, especially for the live search that changes at every character input.

