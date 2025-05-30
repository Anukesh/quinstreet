# QuinStreet Frontend Challenge

This project showcases a responsive form built without any modern frameworks. I chose to use vanilla JavaScript to demonstrate core web development principles and highlight the capabilities of native browser features. The decision to avoid frameworks wasn't just about meeting requirements - it was an opportunity to explore fundamental web technologies.

## What I Built

I developed a responsive form application that features:
- Real-time input validation with immediate user feedback
- Responsive design optimized for both mobile and desktop views
- Efficient form submission handling
- Subtle animations for enhanced user experience

Working without frameworks presented unique challenges but provided valuable insights into modern web development fundamentals.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Local Setup

1. Clone the repository
```bash
git clone <repository-url>
cd into folder
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

5. Preview production build
```bash
npm run preview
```

## Development Challenges and Solutions

The development process presented several interesting technical challenges:

### CSS Architecture
I implemented BEM methodology for CSS organization to ensure maintainable and scalable styles. This proved especially valuable when handling responsive design challenges. The design includes thoughtful animations and transitions to enhance user interaction, while maintaining performance across devices.

### JavaScript Architecture
Building without a framework required careful consideration of state management and DOM manipulation. Instead of relying on framework features, I implemented custom event delegation and DOM manipulation strategies.

### Build Process and Development
Vite was chosen as the build tool for its excellent development experience and fast Hot Module Replacement. This decision significantly improved the development workflow, especially when fine-tuning styles and testing responsive layouts.

## Project Structure

```
/
├── src/
│   ├── main.js      # Main application entry
│   ├── style.css    # BEM-structured styles
│   └── counter.js   # Form validation logic
├── public/
│   └── logo.svg     # Static assets
├── index.html       # Entry HTML
└── package.json     # Project dependencies
```

## Design Decisions

1. **No Framework Approach**
   - Demonstrates core JavaScript proficiency
   - Results in smaller bundle size
   - Shows understanding of fundamental web concepts

2. **BEM Methodology**
   - Ensures CSS scalability
   - Makes styles more maintainable
   - Prevents style conflicts

3. **Vite as Build Tool**
   - Provides excellent developer experience
   - Fast hot module replacement
   - Modern build optimizations out of the box

## Future Improvements

Given additional development time, I would implement the following enhancements:
1. Comprehensive unit testing suite using Jest
2. Robust form state management system
3. Enhanced error handling and user feedback
4. Improved accessibility features and ARIA implementations
5. Advanced loading states and submission feedback

## Project Structure
```
/
├── src/
│   ├── main.js      # Application entry point and core logic
│   ├── style.css    # BEM-structured stylesheets
│   └── counter.js   # Form validation logic
├── public/          # Static assets
└── package.json     # Project configuration and dependencies
```

## Setup Instructions

1. Clone the repository:
```bash
git clone <repository-url>
cd quinstreet-challenge
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`
