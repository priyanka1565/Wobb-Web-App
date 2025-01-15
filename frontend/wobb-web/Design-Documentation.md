# Design Documentation for Wobb Web App

## 1. Color Scheme

The color scheme for the Wobb Web App has been chosen to create a modern, engaging, and professional look. The colors were selected to ensure high contrast and legibility while maintaining a consistent, brand-aligned feel.

- **Primary Color**: `#1976d2` (Blue)
  - **Rationale**: The blue color represents trust, professionalism, and clarity. It has been used as the primary color to give the application a polished and corporate look. The shade of blue is vibrant enough to draw attention without overwhelming the users.
  - **Usage**: This color is used in the header (`AppBar`), primary action buttons, and links, ensuring consistency across interactive elements.
  
- **Secondary Color**: `#ffffff` (White)
  - **Rationale**: White has been used for the background to provide a clean, minimalistic appearance that enhances readability. It also allows the primary blue color to stand out and adds a sense of openness and space to the design.
  - **Usage**: Used as the background color for the body of the application and the text area.

- **Accent Colors**:
  - **#f50057** (Pink)
    - **Rationale**: Pink provides a vibrant accent that adds energy and helps draw attention to specific elements like call-to-action buttons, notification badges, and other interactive elements.
    - **Usage**: The pink accent color has been applied sparingly to prevent it from overwhelming the user while still standing out where needed.
  
  - **#424242** (Dark Gray)
    - **Rationale**: Dark gray is used for text to ensure high contrast and legibility. It is softer than pure black, making it easier on the eyes during extended use.
    - **Usage**: Text on backgrounds and for less emphasized elements.

## 2. Typography

Typography plays a critical role in creating a visual hierarchy and enhancing user experience. The chosen fonts are clean, readable, and modern.

- **Primary Font**: `Roboto`
  - **Rationale**: `Roboto` is a versatile and highly legible sans-serif font that works well for both headings and body text. It strikes the right balance between professional and friendly.
  - **Usage**: It is used for all headings (`h1`, `h2`, `h3`, etc.) and body text.
  
- **Font Weights**:
  - **Heading (h1, h2, h3)**: Bold (`font-weight: 700`) to create emphasis and establish a clear hierarchy.
  - **Body Text**: Regular (`font-weight: 400`) for readability, ensuring that the text remains easy to scan.
  - **Button Text**: Semi-bold (`font-weight: 500`) for a balanced but slightly more prominent appearance compared to regular text.

- **Font Sizes**:
  - **Headings**: 
    - `h1` (32px) - Large and prominent for page titles.
    - `h2` (28px) - Slightly smaller for section titles.
    - `h3` (24px) - For subheadings and less important titles.
  - **Body Text**: 16px for the general body text, providing a good reading size.
  - **Buttons**: 14px for clarity and consistency across all action buttons.

## 3. Spacing and Layout

Proper use of spacing ensures clarity, prevents clutter, and enhances the overall user experience.

- **Grid System**:
  - **12-column layout** (using Material-UI Grid system) ensures that content is evenly distributed and adaptive to different screen sizes. The columns allow flexibility and responsiveness, which is essential for making the app mobile-friendly and user-centric.

- **Margins and Padding**:
  - **Header and Footer**: Adequate top and bottom padding for the `AppBar` and `footer` elements to provide spacing from the edge and ensure they do not feel cramped.
  - **Content Blocks**: Generous margins around each content block (e.g., campaign cards) to ensure that each section feels distinct and easy to interact with. This prevents information from feeling cramped and allows users to focus on individual elements.
  - **Card Spacing**: Each campaign card has uniform padding and margin to maintain consistency and prevent elements from feeling crowded within the cards.

- **Vertical Spacing**:
  - Between sections, there is adequate vertical spacing to distinguish between different types of content and actions (e.g., a section for campaign cards, a section for navigation). This ensures users can easily scan the page and find relevant information.

## 4. UI Components

- **Buttons**: 
  - **Primary Buttons**: These buttons (e.g., "Apply Now") use the primary blue color with white text for visibility and to stand out.
  - **Secondary Buttons**: These have a more subtle design, with gray borders and transparent background, to visually signify less emphasis.
  
- **Cards**: 
  - **Campaign Cards**: The card design is clean and simple. The brand name, payout details, and hiring status are displayed prominently, with icons for visual clarity.
  - **Progress Bars**: The hiring progress bar uses a gradient color scheme from light blue to dark blue, making it visually appealing and easy to read.
  
- **Icons**: 
  - Icons are used sparingly to complement text and help convey meaning. For example, small icons for status indicators (e.g., "hired") next to the progress bar or action buttons. They add clarity and improve the overall aesthetic.

## 5. Responsiveness

- **Mobile-First Approach**:
  - The design is mobile-first, meaning it is built to be usable on small screens first, then expanded to tablet and desktop views. This ensures that users on all devices have a seamless experience.
  - **Mobile**: Simplified layout with a collapsible navigation menu and compact card view for smaller screens.
  - **Tablet and Desktop**: The layout adjusts, with more space given to the content and a larger, horizontal navigation bar.
  
- **Responsive Typography**: 
  - Font sizes are adjusted depending on the screen size, ensuring readability across devices.

## 6. User Experience (UX) Considerations

- **Intuitive Navigation**: 
  - The navigation bar is simple and easily accessible, with a hamburger menu for mobile views and clear, visible options on larger screens.
  - The content is organized logically with clear headings and sections.

- **Visual Hierarchy**: 
  - The most important information (campaign name, payout details, and status) is placed at the top of each card, while secondary information (brand logo, progress bar) is below.
  - Buttons and call-to-actions are emphasized with bold text and color contrast, making it easy for users to take action.
