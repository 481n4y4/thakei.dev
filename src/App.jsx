import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./component/ScrollToTop";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import Certificate from "./pages/Certificate";
import Projects from "./pages/Projects";
import About from "./pages/About"

function App() {
  return (
    <HelmetProvider>
      <div style={{ minHeight: '100vh' }}>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
        </Router>
      </div>
    </HelmetProvider>
  );
}

export default App;
