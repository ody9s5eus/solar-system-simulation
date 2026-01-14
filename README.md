# Solar System Simulation 🪐✨

A stylized, low-poly 3D simulation of the solar system. No cap, it's a vibe. 🚀✨

Check out the live drop: [Live Demo](https://ody9s5eus.github.io/solar-system-simulation/) 🌐

## The Tea ☕

-   **3D Vibes**: Rendered using WebGL (Three.js) for that immersive exp. 🕶️
-   **Aesthetic**: Minimalist, low-poly graphics with unique colors for every planet. It's giving cozy space. 🎨
-   **Animations**: Planets orbiting the sun. It's literally spinning. 💫
-   **Responsive**: Looks fire on Mobile, Tablet, and Desktop. 📱💻
-   **Auto Deploy**: Yeets to GitHub Pages via GitHub Actions. 📨

## The Stack 🥞

-   [React](https://react.dev/) ⚛️
-   [Vite](https://vitejs.dev/) ⚡
-   [Three.js](https://threejs.org/) 🧊
-   [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) 🧶
-   [pnpm](https://pnpm.io/) 📦

## Hop In 🚗

### What you need fr

-   Node.js (v18+) 🟢
-   pnpm 🦁

### Get it running

1.  **Clone the repo:**
    ```bash
    git clone https://github.com/ody9s5eus/solar-system-simulation.git
    cd solar-system-simulation
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```

### Local Dev

Start the server and check the vibes:

```bash
pnpm dev
```

Pull up `http://localhost:5173`. 🖥️

### Production Build

Cook the build:

```bash
pnpm build
```

Preview the masterpiece:

```bash
pnpm preview
```

## Deployment 🚀

This project is set up to auto-deploy to **GitHub Pages** whenever you push to `main`. It's automatic, bestie. 💅

The workflow is in `.github/workflows/deploy.yml`. It uses `pnpm` to build and pushes `dist` to `gh-pages`.

### Manual Setup (if u need it)

Make sure **Read and Write permissions** are on in your repo settings:
`Settings` > `Actions` > `General` > `Workflow permissions`. ✅
