// This build is a single page (see the spec: "one-page launch and waitlist
// website"). Home.jsx is rendered directly from main.jsx. This file is kept
// as a thin re-export so `import App from "./App.jsx"` still works if
// anything expects it.
export { default } from "./pages/Home.jsx";
