import React from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import './App.css';
import BookingPage from './BookingPage';

function HomePage() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="shop-title">TEST WEBSITE</h1>
          <p className="shop-tagline">Quality Brake Repair & Auto Services</p>
          <Link to="/book">
            <button className="cta-button">SCHEDULE APPOINTMENT</button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2 className="section-title">OUR SERVICES & PRICES</h2>
        <div className="services-grid">
          
          {/* Service 1 */}
          <div className="service-card">
            <div className="service-icon">🛑</div>
            <h3>Brake Pad Replacement</h3>
            <p className="service-description">Premium ceramic pads for quiet, durable stopping power. Includes inspection.</p>
            <p className="service-price">$149<span className="price-note"> per axle</span></p>
          </div>

          {/* Service 2 */}
          <div className="service-card">
            <div className="service-icon">⚙️</div>
            <h3>Rotor Resurfacing</h3>
            <p className="service-description">Machine rotors to remove grooves and restore smooth braking surface.</p>
            <p className="service-price">$89<span className="price-note"> per rotor</span></p>
          </div>

          {/* Service 3 */}
          <div className="service-card">
            <div className="service-icon">🔄</div>
            <h3>Complete Brake Job</h3>
            <p className="service-description">Pads + rotors + caliper inspection + fluid top-off. Everything included!</p>
            <p className="service-price">$349<span className="price-note"> per axle</span></p>
          </div>

          {/* Service 4 */}
          <div className="service-card">
            <div className="service-icon">💧</div>
            <h3>Brake Fluid Flush</h3>
            <p className="service-description">Remove old fluid, replace with fresh high-performance brake fluid.</p>
            <p className="service-price">$99</p>
          </div>

          {/* Service 5 */}
          <div className="service-card">
            <div className="service-icon">🔧</div>
            <h3>Caliper Replacement</h3>
            <p className="service-description">Fix sticking or leaking calipers with quality remanufactured units.</p>
            <p className="service-price">$179<span className="price-note"> each</span></p>
          </div>

          {/* Service 6 */}
          <div className="service-card">
            <div className="service-icon">🔍</div>
            <h3>Free Brake Inspection</h3>
            <p className="service-description">Complete brake system check. Measure pad life, rotor condition, and fluid.</p>
            <p className="service-price">$0<span className="price-note"> free</span></p>
          </div>

          {/* Service 7 */}
          <div className="service-card">
            <div className="service-icon">🛞</div>
            <h3>Wheel Alignment</h3>
            <p className="service-description">Extend tire life and improve handling with precision alignment.</p>
            <p className="service-price">$89</p>
          </div>

          {/* Service 8 */}
          <div className="service-card">
            <div className="service-icon">🔩</div>
            <h3>Parking Brake Adjustment</h3>
            <p className="service-description">Adjust or repair parking brake cables and mechanisms.</p>
            <p className="service-price">$79</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section with Map */}
      <section className="why-us">
        <h2 className="section-title white-title">WHY TRUST TEST WEBSITE?</h2>
        
        {/* Features Grid */}
        <div className="features-grid">
          <div className="feature">
            <h3>👨‍🔧 Skilled Technicians</h3>
            <p>Certified mechanics with years of experience on all makes and models.</p>
          </div>
          <div className="feature">
            <h3>🤝 Honest Service</h3>
            <p>No pressure, no upsells. We fix what needs fixing, nothing more.</p>
          </div>
          <div className="feature">
            <h3>💵 Fair Prices</h3>
            <p>Quality parts and labor at prices that won't break the bank.</p>
          </div>
          <div className="feature">
            <h3>⚡ Quick Turnaround</h3>
            <p>Most brake jobs completed same-day while you wait.</p>
          </div>
        </div>

        {/* Location Section with Map and Address */}
        <div className="location-section">
          <h3 className="location-title">WHERE TO FIND US</h3>
          <div className="location-container">
            <div className="map-column">
              <div className="map-container">
                <iframe 
                  title="Google Map Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343004!2d-73.98510768458434!3d40.74875897932729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1644262073400!5m2!1sen!2sus"
                  width="100%"
                  height="250"
                  style={{ border: 0, borderRadius: '10px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="address-column">
              <div className="address-card">
                <h4>📍 Our Location</h4>
                <p className="address-line">350 5th Avenue</p>
                <p className="address-line">Suite 100</p>
                <p className="address-line">New York, NY 10118</p>
                <p className="address-line">United States</p>
                
                <div className="address-details">
                  <p><strong>📞 Phone:</strong> (555) 123-4567</p>
                  <p><strong>✉️ Email:</strong> info@testwebsite.com</p>
                </div>
                
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=350+5th+Ave+New+York+NY+10118" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="directions-btn"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Contact Info */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>TEST WEBSITE</h3>
            <p>Your trusted local auto repair shop</p>
          </div>
          
          <div className="footer-section">
            <h3>CONTACT US</h3>
            <p>📞 (555) 123-4567</p>
            <p>✉️ info@testwebsite.com</p>
          </div>
          
          <div className="footer-section">
            <h3>HOURS</h3>
            <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
            <p>Saturday: 9:00 AM - 3:00 PM</p>
            <p>Sunday: Closed</p>
          </div>

          <div className="footer-section">
            <h3>QUICK LINKS</h3>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Careers</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Test Website. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book" element={<BookingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;