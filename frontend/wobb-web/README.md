# Wobb Web App

Wobb is an influencer marketing platform that connects influencers with brands for collaboration opportunities. This web app is a responsive platform where influencers can view and apply to campaigns, collaborate with brands, and receive payouts. The homepage features a list of available campaigns, each displaying important details like brand name, payout details, hiring progress, and more.

## Features

- **Responsive Design**: The app adapts seamlessly across all screen sizes: desktop, tablet, and mobile.
- **Modern and Clean UI**: A visually appealing and intuitive user interface using Material UI (MUI).
- **Navbar**: A responsive navigation bar with a logo, menu items, and mobile-friendly hamburger menu.
- **Campaign Cards**: Displays campaign information such as brand name, payout details, and hiring progress.
- **Interactivity**: Clickable elements like the menu and buttons for better user experience.

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **Material UI**: A popular React UI framework used to create modern, responsive, and accessible components.
- **React Router**: For routing and navigation.
- **Styled-components** (if needed): For styling and layout adjustments.

## Project Setup

To run this project locally, follow these steps:

### Prerequisites

- **Node.js**: Ensure that you have [Node.js](https://nodejs.org/) installed. You can check the version by running:
  ```bash
1. node -v

2. git clone https://github.com/your-username/wobb-web-app.git

3. npm install

4. npm start
This will start the development server and you can view the app at http://localhost:3000/ in your browser.

File Structure

/wobb-web-app
├── /public
│   ├── index.html
│   └── ...
├── /src
│   ├── /components
│   │   ├── Navbar.js
│   │   ├── CampaignCard.js
│   ├── /pages
│   │   ├── HomePage.js
│
├── package.json
├── .gitignore
└── README.md
