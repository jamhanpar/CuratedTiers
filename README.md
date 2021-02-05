# Curated Tiers
---
## Background and overview
- CuratedTiers is a minimal viable product that helps users shop any products on Amazon. We offer a better user experience by removing clutter, removing sponsored products, and most importantly by sorting the products in 3 tiers of prices (hence the name!). This mimics buying behavior, where I want to filter not just by ratings and reviews but also on price range (low, medium or high-end). 
- We are tryng to solve decision fatique problems, where shoppers are unable to pick an item due to too many options. 

- App ideals and goals: 
  - Seamless: Users able to search in search bar and see results on any page of the application
  - Smooth navigation from page to page
  - Consistent design across pages with a unified UX

- CuratedTiers is primarily built with the MERN stack, a combination of the following four technologies: MongoDB, Express, React, and Node.

## Functionality and MVP
- Connect to Amazon products API
- User auth: sign up and log in
- We need a database that stores users and a user’s liked products
- We need to render index of search results, ranked by review/rating, and sorted by price tier.
- Ability for user to remove and add an item in their collection. 
- Production README

### Bonus features 
- Random category generator results page.
- Visualization graph to display price distribution for every index page.
- Integrate affiliate marketing. 

## Technologies and technical challenges 

- Frontend: React/Node.js
- User auth: to ensure the user goes to the right page based on logged in or out state
- Pleasant user interface with smooth navigation
- Smooth rendering of results from Amazon API
- Ability to click out to an external page with a new tab on Amazon with link tag
- Ability to Like items and have it added to a User's collection. 
- Backend: Node.js, Express.js, MongoDB
- Communication with MongoDB 
- To use Amazon API and get back search results based on categories. Plan B: using third party API provider to access Amazon products.
- Render list of items on page
- Collection of data into database via Liked products and new Users

## Group members and work breakdown 
**Members: Jung Park, James Park, Dave Suh, Philip Kor** 
- `Day 1`: Initial Setup & Learning
  - Build skeleton React Site
  - Research Amazon API methods and test collection of data: Jung, Philip
  - Backend database structure: Dave
  - Integration with MongoDB: Dave, other team members
  - Depending on Amazon API; SKU ids
  - Front-end splash page structure and rendering: James
- `Day 2`: Create users and retrieve data from Amazon API
  - User auth: Dave 
  - Integration of Amazon API to backend: all members 
  - Splash page and search results from Amazon index of items
  - Integrate items from search results with front-end rendering 
  - Members: James and ad-hoc from other team members
- `Day 3`: Integrate API with home page
  - Search bar functionality. Philip
  - Ensure request to Amazon returns splash page results
  - Product show page: James, Dave, ad-hoc team members
- `Day 4`: Search products and display product page & user page
  - Filter and search bar results with item ranking and price tier split; all team members
  - Ability to click on product show page link and be redirected appropriately to Amazon item
  - Navigation to user’s collection page to display items that have been liked; Dave and other members; this would be a user’s show page (profile page)
- `Day 5`: Documentation & feature testing
  - Complete production README.md
  - Work on CSS for all pages; ensure smooth display and navigation
  - Test all features and ensure push to Heroku is done with no console errors.
