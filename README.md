# Curated Tiers
---
## Background and overview
- CuratedTiers is a minimal viable product that helps users shop for gaming-related products on Amazon. We offer a better user experience by removing clutter, removing sponsored products, and most importantly by sorting the products in 3 tiers of prices (hence the name!). This mimics buying behavior especially for electronic products, where I want to filter not just by ratings and reviews but also on price range (low, medium or high-end). 

- Gaming categories we are focussed on are (with a “gaming” prefix): 
    - Headset
    - Keyboards
    - Mouse
    - Chair
    - Monitors

- App ideals and goals: 
  - Seamless: Users able to search in search bar and see results for each category on the index page both on login and on the splash page 
  - Smooth navigation from page to page
  - Consistent design across pages with a unified UX

- CuratedTiers is primarily built with the MERN stack, a combination of the following four technologies: MongoDB, Express, React, and Node.

## Functionality and MVP
- Connect to Amazon products API
- User auth: sign up and log in
- We need a database that stores users and a user’s liked products
- We need to render index of search results by category, ranked by review/rating. 
- Ability for user to remove and add an item in their collection. 
- Production README

### Bonus features 
- Ability to personalize search results by a user’s previously liked items
- Collect clickthrough URLs to Amazon and add to database for further personalization
- Integrate affiliate marketing. 

## Technologies and technical challenges 

- Frontend: React/Node.js
- User auth: to ensure the user goes to the right page based on logged in or out state
- Pleasant user interface with smooth navigation
- Smooth rendering of results from Amazon API
- Ability to click out to an external page with a new tab on Amazon with link tag
- Backend: Node.js, Express.js, MongoDB
- Schema:
  - Users: firstName, lastName, email, password
  - LikedProducts: productId, user, category
  - Category: categoryName, (productId for if we have to use backup plan)
- Models:
  - User
  - Category
  - LikedProducts
- Validations:
   - User: 
     - `/register`: fn/ln can’t be empty, password min 6, passwords should match, email can’t be empty, must be an email,
     - `/login`: email can’t be empty, should already exist in db, password must match db pw
   - Category: must check that the input in the search bar must be a string, and must match existing categories
   - LikedProducts: if product is liked, then unlike, vice versa
   - Routes: 
    - `/users/:id`
    - `/` (dashboard/splash page)
    - `/products/:productId` (show page)
    - `/likedproducts` (users liked products)
- Seeds:
  - 3 users
  - 5 categories
  - likedproducts(?, will have to wait for amazon api)
- Communication with MongoDB 
- To use Amazon API and get back search results based on categories
- Render list of items on page
- Collection of data into database via Liked products and new Users

## Group members and work breakdown 
**Members: Jung Park, James Park, Dave Suh, Philip Kor** 
- `Day 1`: Initial Setup & Learning
  - Build skeleton React Site
  - Research Amazon API methods and test collection of data: Jung, Philip
  - Backend database structure: Dave
  - Integration with MongoDB: Dave, other team members
  - Tables: 
    - Categories (5 categories) 
    - Users; 
    - LikedProducts (name, URL, id)
  - Depending on Amazon API; SKU ids
  - Front-end splash page structure and rendering: James
- `Day 2`: Create users and retrieve data from Amazon API
  - User auth: Dave 
  - Integration of Amazon API to backend: all members 
  - Splash page and search results from Amazon index of items
  - Integrate items from search results with front-end rendering 
  - Members: James and ad-hoc from other team members
- `Day 3`: Integrate API with home page
  - Search bar functionality: categories come up as you type; Philip
  - Ensure request to Amazon returns splash page results
  - Product show page: James, Dave, ad-hoc team members
- `Day 4`: Search products and display product page & user page
  - Filter and search bar results with item ranking and category split renders on page; all team members
  - Ability to click on product show page link and be redirected appropriately to Amazon item
  - Navigation to user’s collection page to display items that have been liked; Dave and other members; this would be a user’s show page (profile page)
- `Day 5`: Documentation & feature testing
  - Complete production README.md
  - Work on CSS for all pages; ensure smooth display and navigation
  - Test all features and ensure push to Heroku is done with no console errors.
