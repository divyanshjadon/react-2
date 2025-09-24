# Library Management System

A React-based library management interface that allows users to view, search, add, and remove books from a collection.

## Features

- **View Books**: Display a list of books with title and author
- **Search Functionality**: Filter books by title or author as you type
- **Add Books**: Add new books to the library with title and author
- **Remove Books**: Delete books from the library with a single click
- **Responsive Design**: Works on desktop and mobile devices
- **Real-time Updates**: All changes happen instantly without page reload

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`

### Building for Production

To create a production build:

```bash
npm run build
```

This will create an optimized build in the `build` folder.

## Usage

1. **Searching**: Type in the search box to filter books by title or author
2. **Adding Books**: Enter a book title and author in the input fields, then click "Add Book"
3. **Removing Books**: Click the "Remove" button next to any book to delete it

## Sample Data

The application starts with three sample books:
- 1984 by George Orwell
- The Great Gatsby by F. Scott Fitzgerald
- To Kill a Mockingbird by Harper Lee

## Technologies Used

- React 18
- CSS3 for styling
- JavaScript ES6+
- Create React App

## Project Structure

```
src/
  ├── App.js          # Main component with all functionality
  ├── App.css         # Styling for the application
  ├── index.js        # React entry point
  └── index.css       # Global styles
public/
  └── index.html      # HTML template
package.json          # Dependencies and scripts
```

## Features Implementation

- **State Management**: Uses React hooks (useState) for managing books, search term, and new book input
- **Event Handling**: Implements form submission, input changes, and button clicks
- **Dynamic Rendering**: Books list updates in real-time based on search and CRUD operations
- **Form Validation**: Prevents adding empty books
- **Responsive Design**: Mobile-friendly layout with CSS Grid and Flexbox
