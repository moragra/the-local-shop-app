# Project Title
The Local Shop

## Overview
The Local Shop is an app designed to connect users with local businesses, providing visibility and support to local shop owners affected by gentrification and economic displacement. It aims to promote community engagement and sustainable growth by highlighting local shops over large corporations and foreign-owned businesses.

### Problem
Gentrification and economic displacement are pressing issues globally, where immigrants are increasingly occupying space and driving up the cost of living. This trend leaves local shop owners struggling to survive. The situation is exacerbated by global conflicts, such as the genocide happening in Palestine, where large corporations fund and perpetuate strife, further marginalizing small, local businesses. The Local Shop addresses these issues by promoting local commerce and empowering communities.

### User Profile
The Local Shop will be used by:
- Local residents who want to support their community businesses.
- Tourists seeking authentic, local shopping experiences.
- Local shop owners looking for greater visibility and customer engagement.

### Features
- **Shop Locator**: Users can find local shops based on their location or search criteria.
- **Shop Profiles**: Detailed profiles for each shop, including contact information, social media, and hours.
- **Interactive Map**: Integration with MapBox to show shop locations and navigation.

## Implementation

### Tech Stack
- **Frontend**: React for cross-platform web development.
- **Backend**: Node.js with Express.js for the server-side logic.
- **Database**: MySQL for scalable and flexible data storage.
- **Maps Integration**: MapBox API for location services.
- **Authentication**: JWT for secure user login and signup.
- **PaaS**: Heroku

### APIs
- **MapBox API**: For interactive maps and navigation.
- **JWT**: For user authentication.
- **MySQL**: For database hosting and management.

### Sitemap
1. **Home Page**: Introduction and app overview.
2. **Shop Locator**: Map view with search functionality.
3. **User Profile**: User account settings and preferences.
4. **Add to map**: Enter of business data to get added to map.
5. **SignUp**: Create account.
6. **Login**: Login to account.

### Mockups
- **Home Page**: A welcoming screen with navigation options.
- **Shop Locator**: An interactive map with shop markers based on your location.
- **Shop Profile**: A detailed page for each shop.
- **Add to map**: A form page to input business data to data base.
- **SignUp**: Form to create account.
- **Login**: Form to login to account.

### Data
- **Shops**: Information about each shop, including name, location, hours, and contact details.
- **Users**: User profiles, including login credentials.

### Endpoints
- **GET /shops**: Retrieve a list of shops.
- **POST /shops**: Create shop details.
- **GET /shops/:id**: Retrieve details of a specific shop.
- **PUT /shops/:id**: Edit specific shop details.
- **POST /login**: Send user login details to authenticate.
- **POST /signup**: Create user signup details. 
- **GET /user/profile/:id**: Retrieve details of a specific user.

<!-- This are APIs that can be consider but not required to deliver the capstone:  
    - **PUT /user/profile/:id**: Edit details of a specific user.
    - **DELETE /user/profile/:id**: Delete details of a specific user.
    - **DELETE /shops/:id**: Delete details of a specific shop.
-->

### Auth
- **User Registration**: Users can sign up using email and password.
- **User Login**: Secure login with JWT.

## Roadmap
### Sprint 1: Initial Setup and Core Features
- Set up project repository and development environment.
- Implement user authentication.
- Develop basic shop locator functionality with MapBox integration.
- Create initial database schema and set up MySQL.

### Sprint 2: Advanced Features and Testing
- Develop frontend React app [home, map, signup, login, add to map, profile]
- Conduct thorough testing and debugging.
- Gather feedback and make necessary adjustments.

### Sprint 3: Final Touches and Deployment
- Refine UI/UX design based on feedback.
- Prepare for app deployment on the cloud.

## Nice-to-haves
- **Social Media Integration**: Allow users to share shops and promotions on social media.
- **Loyalty Program**: Implement a reward system for frequent shoppers.
- **Analytics Dashboard**: Provide shop owners with insights into customer behavior and trends.
- **Offline Mode**: Allow users to access shop information without an internet connection.
- **Extended Geographical Coverage**: Expand the app to include more regions and countries.
- **Extended Language Coverage**: Expand the app to be multi language.