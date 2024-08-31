import { useEffect } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import MidSection from './components/MidSection';
import Footer from './components/Footer';
import './App.css';
import {  BrowserRouter  } from 'react-router-dom';


function App() {
  useEffect(() => {
    const aboutLink = document.getElementById('about-link');
    aboutLink.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior
      const aboutSection = document.getElementById('about-section');
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const sectionId = this.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);

        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }, []);

  return (
    <div className="App">
      
      <BrowserRouter>
      <Header />
      <Content />
      < MidSection />
      < Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
