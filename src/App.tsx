import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

import About from "./pages/About";
import Details from "./pages/Details";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Plans from "./pages/Plans";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/details/:movie" Component={Details} />
        <Route path="/plans" Component={Plans} />
        <Route path="*" Component={NotFound} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
