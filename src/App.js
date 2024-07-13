import React, { useEffect } from 'react';
import './App.css';
import logo from './logoo.svg';


function App() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <nav id="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <header id="home">
        <h1>Welcome to Our Landing Page</h1>
        <h5>( Developed & Maintained by Khan Zubair Ahmed )</h5>
        <p>Discover our services and offerings.</p>
        <img src={logo} className="int-logo" alt="Logo" />
      </header>
      <section id="about">
        <h2>About Us</h2>
        <p>We are a company that values excellence and customer satisfaction.</p>
      </section>
      <section id="services">
        <h2>Our Services</h2>
        <p>We offer a wide range of services to meet your needs.</p>
      </section>
      <section id="contact">
        <h2>Contact Us</h2>
        <p>Get in touch with us through our contact form.</p>
      </section>
    </div>
  );
}

export default App;
