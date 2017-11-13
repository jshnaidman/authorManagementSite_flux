# authorManagementSite_flux

An Author management site built with react, javascript ES6, flux and gulp

Based off of what was created in:
https://app.pluralsight.com/library/courses/react-flux-building-applications/table-of-contents

This course was written to use es5, react router v2, gulp with the connect-live-server plugin and other technologies 
that I thought were either obsolete or not optimal.

I redid the site with improved technologies such as:


- React ES6
- Nodejs
- React Router v4
- Gulp
    - Nodemon
    - BrowserSync
    - Sourcemaps
    - Babelify
    - Uglify
    
Sometimes these changes meant that I would have to implement the website in a very different
way than how it was done in the lecture. For example, my save button on my manageAuthor page
uses a custom button component that embeds the redirect back to the author page into it instead 
of calling a function directly within the manageAuthorPage through the onClick handler. 

# How To Run

`$ gulp`


