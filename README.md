# Running the API
- Create .env file with "DB_URL" link to PostgreSQL database and set the "PORT" as required otherwise will deafult to port 3000 if not specified
- Open terminal and cd into the api folder
- If running for the first time: in the terminal type "num run start_api" to install node dependencies, set-up database, and run the api
- If database and dependencies are already setup type "npm run dev" to start the api

# API functionality
## Get all entries
"/entries" will display all entires sort by most recent first

## Display a single entry
"entries/<id_numer>" will display the selected entry

## Display entries for a selected year
'entries/date/<year>' will display entries from the slected year

## Display entries for selected category
'entries/category/<category>' will display entries from the slected category

## Post new entry
'/entries' Will post new entry when passed in a json entry in the following format

```json
{ 
    "category" = <catagory>,
    "title" = <title>,
    "entry" = <entry>
```

The date and time of entry will be automatically entered
