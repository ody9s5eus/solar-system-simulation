# Solar System Simulation

A stylized, 3D solar system simulation built with React, TypeScript, and Three.js (via React Three Fiber).

## Features

- **3D Visualization:** Renders the Sun, 8 planets, and Earth's Moon using Three.js.
- **Stylized Appearance:** Planets are sized and colored for visibility and aesthetic appeal rather than scientific accuracy.
- **Animation:** All celestial bodies orbit the Sun (or their parent planet) and rotate on their own axis.
- **Responsiveness:** The camera automatically adjusts its zoom level based on the screen width to ensure the entire system is visible on Mobile, Tablet, and Desktop.
- **Starry Background:** Immersive star field background.

## Tech Stack

- **Framework:** React 18+
- **Language:** TypeScript
- **Build Tool:** Vite
- **3D Library:** Three.js, @react-three/fiber, @react-three/drei
- **Deployment:** GitHub Pages (via GitHub Actions)

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open `http://localhost:5173` in your browser.

## Deployment

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

1.  Push changes to the `main` branch.
2.  The `.github/workflows/deploy.yml` workflow will trigger.
3.  It builds the project (`npm run build`) and deploys the `dist` folder to the `gh-pages` branch.
4.  Ensure GitHub Pages is enabled in your repository settings (Settings > Pages) and set to serve from the `gh-pages` branch.

## Project Structure

-   `src/components/CelestialBody.tsx`: Reusable component for planets/sun/moon with orbit logic.
-   `src/components/SolarSystem.tsx`: Defines the composition of the solar system.
-   `src/App.tsx`: Main application component, scene setup, and responsive camera logic.
