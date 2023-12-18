# Overview
The application is front-end app (SPA) developed with React.

The application is about browsing events and (if authenticated) creating and posting such. Authors can add and delete events. Users (registered and non-registered) can browse, see details and click the attend button.

# Public Part
This part of the application is designed for non-registered users. These users have access to the following:

- Guests Home Page -> Lastest events submitted.
- Browse Events -> View all events.
- Event Details -> View specific event's details page.
- Contacts Page -> View contact form and location with connected Google Maps
- Register -> with unique username, email and password.
- Login -> with email and password.

# Private Part
- Users Home Page -> Lastest events submitted
- Event Details: 
-- If current user is the author, they can also see a delete button.
-- If currunt user is not the author, they can see an attend button.
- User Profile -> The page is containing all of the current user's created events and all the events the user has marked with the attend button.
- Add New Event -> Registered users can add new events.
- Sign Out

- User initialized on server:
peter@abv.bg: 123456
john@abv.bg: 123456

# Technical details
The client application is build with:

- React CLI: 18.2.0
- JavaScript
- HTML + CSS

To run the project:

package.json --> npm install --> npm start --> navigate to http://localhost:3000/

The server used in the project is Softuni Practice Server. It was modified to serve to this project.
To run the server:
npm install --> firebase serve --> Server is listening on http://localhost:5000/eventap-react-softuni/us-central1/api.