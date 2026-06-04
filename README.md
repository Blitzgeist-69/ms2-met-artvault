# Met Art Vault

## Introduction

Met Art Vault is an interactive front-end web application that allows users to explore the vast collection of The Metropolitan Museum of Art. This project enables users to search through thousands of public domain artworks, view detailed information, and build a personal collection by saving their favourite pieces to a virtual "Art Vault".
The application demonstrates modern front-end development practices including responsive design, dynamic content rendering, client-side data persistence, and integration with a third-party public API.

## Project Description

Met Art Vault is a single-page application (SPA) designed to provide an intuitive and engaging way for art enthusiasts, students, and casual browsers to discover and curate artworks from The Met’s open collection of over 470,000 pieces.

Key Features:

* Search functionality to find artworks by keyword
* Responsive card-based layout displaying search results
* Detailed artwork view through an interactive modal
* Ability to save and manage favourite artworks in a personal "Art Vault" using localStorage
* Dark mode support for improved user experience
* Fullscreen image viewing for closer inspection of artworks
* Fully responsive design optimised for mobile, tablet, and desktop devices

The project was developed using HTML5, CSS3 (with Bootstrap 5), and vanilla JavaScript. It consumes the public Metropolitan Museum of Art Collection API to fetch real-time artwork data. No backend or user authentication is required, as all user data (saved artworks) is stored locally in the browser.
This project showcases core front-end skills including:

* DOM manipulation
* Asynchronous JavaScript (Fetch API)
* Responsive web design
* Client-side state management
* Accessibility considerations
* Clean code structure and documentation

**Live Site:**

https://blitzgeist-69.github.io/ **TBC**

**GitHub Repo:**

https://github.com/Blitzgeist-69/ms2-met-artvault

## Strategy

The strategy behind Met Art Vault was to create an engaging, user-friendly front-end application that allows people to explore The Metropolitan Museum of Art’s vast public collection in an intuitive way.
The core objective was to build a fully functional single-page application that demonstrates strong front-end development skills while delivering real value to users. The application enables users to search for artworks, view detailed information, and curate a personal collection through a “Art Vault” feature — all without requiring a backend or user accounts.
The project follows a mobile-first approach, ensuring a seamless experience across devices. Emphasis was placed on clean design, accessibility, performance, and clear user feedback. The use of the public Met Museum API allowed for dynamic, real-time content while keeping the project focused on front-end technologies.

Key strategic decisions included:

* Using localStorage for data persistence to avoid the need for user authentication.
* Implementing a modal-based detail view to keep users on a single page.
* Prioritising responsive design and accessibility to meet modern web standards.
* Structuring the codebase in a clean, maintainable way to support future development.

## User Stories

### Must Have

* As a user, I want to search for artworks using keywords so that I can discover pieces from The Metropolitan Museum of Art collection.
* As a user, I want to view search results displayed as cards containing an image, title, and artist so that I can quickly browse through artworks.
* As a user, I want to click on an artwork card to view more detailed information in a modal so that I can learn more about the piece.
* As a user, I want the website to be fully responsive on mobile, tablet, and desktop devices so that I can comfortably use it on any screen size.

### Should Have

* As a user, I want to save artworks to my personal Art Vault and receive clear visual feedback so that I can build and revisit my own collection of favourite artworks.
* As a user, I want to remove artworks from my Art Vault and receive clear visual feedback so that I can manage my saved collection effectively.
* As a user, I want the option to switch to dark mode so that I can browse comfortably in low-light environments.



### Could Have

* As a user, I want to view artwork images in full screen so that I can examine the details more closely.
* As a user, I want to see how many artworks I currently have saved in my Art Vault so that I have a quick overview of my collection.
* As a user, I want to filter artworks by department or time period so that I can refine my search more precisely.


