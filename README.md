# donut-and-pizza-rat - NYC 311  call data complaints app

## Description
This app  searches through the NYC 311 call data and displays what complaints were made to the NYPD from the five boroughs of Brooklyn, Manhattan, Queens, the Bronx, and Staten Island through the use of the NYC Open Data APILinks which links to an external site. When a button for a particular borough is clicked the app displays a specified number of complaints made to the NYPD, filtered by borough. It also shows how the police responded to the complaint when "What did the police do" button is clicked on.

How it works:

1. The app uses a query string to filter the bourough and the NYPD from the available data which includes many different departments.

2. It receives the number of complaints requested and applies them to the query string using string interpolation.

3. It also place a default value of 10 complaints if no number of complaints is requested.

4. It resets the number requested and redisplays the placeholder.

5. When a another borough is clicked it replaces the previous boroughs informaion with the new information.


### Resources
This app makes use of HTML, CSS and Javascript.

### GitHub link

https://fmdavis1.github.io/donut-and-pizza-rat/