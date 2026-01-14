# Solar System Simulation

A stylized, low-poly 3D simulation of the solar system built with **React**, **Vite**, and **React Three Fiber**.

## Features

-   **3D Visualization**: Rendered using WebGL (via Three.js).
-   **Stylized Graphics**: Minimalist, low-poly aesthetics with distinct colors for each planet.
-   **Animations**: Planets orbit the sun at relative speeds.
-   **Responsive Design**: Full-screen immersive experience on Mobile, Tablet, and Desktop.
-   **Automated Deployment**: Deploys to GitHub Pages via GitHub Actions.

## Tech Stack

-   [React](https://react.dev/)
-   [Vite](https://vitejs.dev/)
-   [Three.js](https://threejs.org/)
-   [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
-   [pnpm](https://pnpm.io/)

## Getting Started

### Prerequisites

-   Node.js (v18+)
-   pnpm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/solar-system-app.git
    cd solar-system-app
    ```

2.  Install dependencies:
    ```bash
    pnpm install
    ```

### Local Development

Start the development server:

```bash
pnpm dev
```

Open your browser at `http://localhost:5173`.

### Building for Production

Build the project for production:

```bash
pnpm build
```

Preview the build:

```bash
pnpm preview
```

## Deployment

This project is configured to automatically deploy to **GitHub Pages** whenever changes are pushed to the `main` branch.

The deployment workflow is defined in `.github/workflows/deploy.yml`. It uses `pnpm` to build the project and pushes the content of the `dist` folder to the `gh-pages` branch.

### Manual Setup (if needed)

Ensure that **Read and Write permissions** are enabled for Workflow permissions in your repository settings:
`Settings` > `Actions` > `General` > `Workflow permissions`.
