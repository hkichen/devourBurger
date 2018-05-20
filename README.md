# devourBurger
An app to make you crave an actual burger; This app allows you to read a from a table of burgers in a MySQL database and display the data using a handlebars template.

# Tools
- Express.js
- Express-handlebars
- Node.js
- MySQL
- Body-Parser

# Instructions

Click on the link to access the app (deployed on Heroku). Dowload or clone the repository off of GitHub if you would like to contribute or change the app.

Heroku: https://afternoon-oasis-10586.herokuapp.com/

GitHub Repo: https://github.com/hkichen/devourBurger

# Troubleshooting
- A 404 error is given when clicking on the buttons to eat or create the burger. The resulting error recieved when trying to access the route "/api/burgers" says: "Refused to apply inline style because it violates the following Content Security Policy directive: "default-src 'self'". Either the 'unsafe-inline' keyword, a hash ('sha256-33YGiROm4Pzv0xXIPo82M0Dt2zrdnP4IgbJq1WeAtf8='), or a nonce ('nonce-...') is required to enable inline execution. Note also that 'style-src' was not explicitly set, so 'default-src' is used as a fallback."

# Thoughts
This is a rough work in progress. The skeleton of the app is laid out, but there's still a lot more to do to have it functioning smoothly.
