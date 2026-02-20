import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazy load components
const Home = lazy(() => import("./component/Home"));
const About = lazy(() => import("./component/About"));
const Content = lazy(() => import("./component/Content"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/content" element={<Content />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
