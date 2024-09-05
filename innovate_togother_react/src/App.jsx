import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home'; // Home component
import Contribution from './components/Contribution'; // Contribution component
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          {/* Route for the Home component */}
          <Route path="/" element={<Home />} />
          
          {/* Route for the Contribution component */}
          <Route path="/contribution" element={<Contribution />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
