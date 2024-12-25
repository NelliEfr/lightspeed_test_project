# Lightspeed Test Project

This repository contains a frontend application structured using the **Feature-Sliced Design (FSD)** methodology. The project is designed to demonstrate modular and scalable architecture, ensuring clean separation of concerns and ease of maintenance.

## Table of Contents
- [Project Structure](#project-structure)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Scripts](#scripts)

---

## Project Structure
The project adheres to the **FSD methodology**, with a clear separation of layers:

- **App**: Application-wide settings, providers, and initialization logic.
- **Pages**: Represent individual screens or views.
- **Widgets**: Components that combine multiple features, such as navigation bars or modals.
- **Features**: Encapsulated business logic units, reusable across the application.
- **Entities**: Definitions and logic for core business objects.
- **Shared**: Contains reusable components, utilities, and styles shared across the app.

### Directory Layout
```plaintext
src/
├── app/               # Application-level setup and configuration
├── pages/             # Application pages (e.g., Main, ShoppingCart)
├── widgets/           # Complex UI components composed of multiple features
├── features/          # Independent business logic units
├── entities/          # Business entities and their logic
├── shared/            # Reusable utilities, components, and styles
└── index.ts           # Application entry point
```

---

## Features
- **Shopping Cart**: Add, remove, and update items in the cart.
- **Navigation**: Dynamic navigation menu with badge counts.
- **Responsive Design**: Optimized for different screen sizes.
- **Modal System**: Dynamically render modals across different components.

---

## Tech Stack
- **Framework**: Vue 3 with Composition API and TypeScript
- **State Management**: Pinia
- **Icons**: `@kalimahapps/vue-icons`
- **Build Tool**: Vite

---

## Getting Started

### Prerequisites
Ensure you have the following installed:
- Node.js >= 16.x
- npm >= 7.x

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/NelliEfr/lightspeed_test.git
   ```
2. Navigate to the project directory:
   ```bash
   cd lightspeed_test
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App
To start the development server:
```bash
npm run dev
```
The app will be available at [http://localhost:5173](http://localhost:5173).

---

## Scripts
- `npm run dev`: Start the development server
- `npm run build`: Build the app for production
- `npm run preview`: Preview the production build
- `npm run lint`: Run ESLint to analyze code quality

