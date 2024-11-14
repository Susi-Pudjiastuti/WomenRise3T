# WomenRise3T - Front End Documentation
## Overview
WomenRise3T is a web-based platform aimed at supporting marginalized women in Indonesia's 3T regions (frontier, outermost, and underdeveloped areas) to access educational resources, scholarship information, and mentorship. This platform connects users with mentors who can guide them through the scholarship application process and provides resources to boost users' confidence in pursuing higher education.
### Project Goal
The primary objective is to create a responsive, user-friendly interface that enables women from remote areas to access mentorship and scholarship guidance with ease.

## Technology Stack
- **React:** JavaScript library for building dynamic user interfaces.
- **Vite:** Next-generation front-end build tool for a fast development experience.
- **React Router:** For handling in-app navigation and routing.
- **React-Bootstrap:** Component library for responsive and accessible UI elements.
- **Context :** Manages global state, especially for authentication and user data.
- **Axios:** HTTP client for making requests to the backend API.
- **Dropzone & Cloudinary:** For file uploads (e.g., identity verification documents).
- **SweetAlert2:** User-friendly alerts and notifications.

## Folder Structure
```
.vite/                  # Vite configuration files
node_modules/           # Dependencies installed via npm
public/                 # Static public files like favicon
src/                    # Source code
├── assets/             # Static assets like images and icons
├── Components/         # Reusable UI components
│   ├── AboutUs/        # Components for the About Us page
│   ├── Aktivitas/      # Components related to user activities
│   ├── Landing/        # Components for the landing page
│   ├── Mentor/         # Components for mentor-related sections
│   ├── Modal/          # Modal components for various pop-ups
│   ├── Profile/        # Profile-related components
│   ├── Scholarship/    # Components related to scholarships
│   ├── Login.jsx       # Login component
│   ├── NotLoggedIn.jsx # Component for non-logged-in users
│   ├── Sidebar.jsx     # Sidebar component
│   └── SignUp.jsx      # Sign-up component
├── Context/            # Global state management using Context API
│   ├── BookingContext.jsx  # Context for booking-related data
│   ├── MentorContext.jsx   # Context for mentor-related data
│   └── UserContext.jsx     # Context for user-related data
├── layout/             # Layout components for consistent structure
│   └── Layout.jsx      # Main layout component for React Router's outlet
├── Navigation/         # Navigation components
│   ├── Navbar.jsx      # Top navigation bar component
│   └── Footer.jsx      # Footer component
├── Pages/              # Main pages
│   ├── AboutUs.jsx     # About Us page
│   ├── Aktivitas.jsx   # User activity page
│   ├── DetailMentor.jsx # Detailed mentor information page
│   ├── LandingFull.jsx # Full landing page
│   ├── Mentor.jsx      # Mentorship page
│   ├── Motivation.jsx  # Motivation page
│   ├── Profile.jsx     # User profile page
│   └── Scholarships.jsx # Scholarship listings page
├── utils/              # Utility functions and helper files
│   └── fetch.js        # Fetch utility for API requests
├── App.css             # Global CSS styling for the app
├── App.jsx             # Root component, entry point for app routes
├── index.css           # Additional base CSS styles
├── main.jsx            # Entry point for the React application
└── style.css           # CSS for specific styling needs

.env.example            # Example environment configuration file
.gitignore              # Files/folders to ignore in Git
eslint.config.js        # ESLint configuration for code linting
index.html              # Main HTML file used by Vite
package-lock.json       # Dependency lock file
package.json            # Project dependencies and scripts
```
## Key Component and Page 
### Key Components
- **AboutUs (Components/AboutUs/) :** Contains components specifically for the "About Us" section, providing details about the organization, its mission, and the team.
- **Aktivitas (Components/Aktivitas/) :** Houses components related to user activities, showcasing various actions or events within the platform, including active sessions and history for viewing user activities after booking.
- **Landing (Components/Landing/) :** Includes components that make up the landing page, welcoming new users and providing an overview of the platform’s features.
- **Mentor (Components/Mentor/) :** Contains components dedicated to displaying mentor information and profiles, a core feature for connecting mentees with mentors.
- **Modal (Components/Modal/) :** Modular components for different modals used across the application, such as pop-ups for form submissions, alerts, and other interactive elements.
- **Profile (Components/Profile/) :** Holds components specific to the user profile section, where users can view and edit their personal information.
- **Scholarship (Components/Scholarship/) :** Components focused on scholarship information and listings, enabling users to browse and apply for available opportunities.
- **Login (Components/Login.jsx) :** The login component, handling user authentication and form submission for logging into the platform.
- **SignUp (Components/SignUp.jsx) :** The sign-up component, managing new user registration and form submissions for creating accounts.
- **NotLoggedIn (Components/NotLoggedIn.jsx) :** A component to display content or messages for users who are not logged in, encouraging them to sign up or log in.
- **Sidebar (Components/Sidebar.jsx) :** A sidebar component for navigating between active components, history, and logging out.
  
### Key Pages
- **About Us (Pages/AboutUs.jsx) :** A full page dedicated to the "About Us" section, providing in-depth information about the platform, team, and objectives.
- **Aktivitas (Pages/Aktivitas.jsx) :** Displays a list of user activities after booking mentorship and the history of past bookings.
- **Detail Mentor (Pages/DetailMentor.jsx) :** Shows detailed information about a specific mentor, including their profile, background, and areas of expertise.
- **Landing Page (Pages/LandingFull.jsx) :** The main landing page of the application, welcoming visitors with an overview of the platform’s purpose, features, and calls to action.
- **Mentor Page (Pages/Mentor.jsx) :** A page dedicated to the mentor section, listing available mentors and allowing users to browse and connect with them.
- **Motivation (Pages/Motivation.jsx) :** Provides motivational content generated with AI.
- **Profile (Pages/Profile.jsx):** The user profile page where logged-in users can view and edit their personal details, manage their accounts, and view activity history.
- **Scholarships (Pages/Scholarships.jsx) :** A page listing available scholarships, allowing users to explore, add scholarship information, delete previously added scholarship info, and apply for educational funding opportunities.
  
## Getting Started
### Prerequisites
Node.js and npm installed
### Installation
1. **Clone the repository:**
   ``` bash
   git clone https://github.com/Susi-Pudjiastuti/WomenRise3T.git
   cd WomenRise3T
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Create a .env file** based on .env.example and fill in the necessary environment variables:
4. **Run the development server:**
   ``` bash
   npm run dev
   ```
## Contributing
1. Fork the repository.
2. Create a new branch
    ``` bash
    git checkout -b feature/YourFeature
    ```
3. Commit your change
   ```bash
    git commit -m 'Add some feature'
   ```
4. Push to the branch
   ``` bash
    git push origin feature/YourFeature
    ```
5. Open a pull request.

## Deployment
This project is deployed using Vercel. Any changes pushed to the main branch will be automatically deployed to Vercel.

##### URL :
https://women-rise3-t.vercel.app/

