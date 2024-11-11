import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// import Nav bar components
import Header from './components/navBar/header/Header';
import Footer from './components/navBar/footer/Footer';

// import Main Component
import Home from './components/homePage/HomePage';
import Plans from './components/companyPlans/CompanyPlan';
import About from './components/aboutUs/AboutUs';
import Contact from './components/contactUs/ContactUs';
import Policy from './components/policy/Policy';

function App() {
  return (

    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
