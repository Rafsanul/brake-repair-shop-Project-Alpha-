import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BookingPage.css';

function BookingPage() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerCar, setCustomerCar] = useState('');
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Generate available time slots (9 AM to 5 PM, hourly)
  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  // Services list
  const services = [
    { id: 1, name: 'Brake Pad Replacement', price: '$149' },
    { id: 2, name: 'Rotor Resurfacing', price: '$89' },
    { id: 3, name: 'Complete Brake Job', price: '$349' },
    { id: 4, name: 'Brake Fluid Flush', price: '$99' },
    { id: 5, name: 'Caliper Replacement', price: '$179' },
    { id: 6, name: 'Free Brake Inspection', price: '$0' },
    { id: 7, name: 'Wheel Alignment', price: '$89' },
    { id: 8, name: 'Parking Brake Adjustment', price: '$79' }
  ];

  // Generate next 7 days for date selection
  const getNext7Days = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      
      dates.push({
        full: date.toISOString().split('T')[0],
        display: `${dayNames[date.getDay()]}, ${monthNames[date.getMonth()]} ${date.getDate()}`,
        dayOfWeek: date.getDay()
      });
    }
    
    return dates;
  };

  const availableDates = getNext7Days();

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  const handleNextStep = () => {
    if (bookingStep === 1 && selectedDate && selectedTime) {
      setBookingStep(2);
    } else if (bookingStep === 2 && selectedService && customerName && customerPhone && customerCar) {
      setBookingStep(3);
    }
  };

  const handlePrevStep = () => {
    setBookingStep(bookingStep - 1);
  };

  const handleConfirmBooking = () => {
    // Here you would typically send this data to a backend
    setBookingConfirmed(true);
  };

  const handleNewBooking = () => {
    setSelectedDate('');
    setSelectedTime('');
    setSelectedService('');
    setCustomerName('');
    setCustomerPhone('');
    setCustomerEmail('');
    setCustomerCar('');
    setBookingStep(1);
    setBookingConfirmed(false);
  };

  if (bookingConfirmed) {
    return (
      <div className="booking-page">
        <div className="booking-header">
          <Link to="/" className="back-link">← Back to Home</Link>
          <h1>TEST WEBSITE</h1>
          <p>Schedule Your Appointment</p>
        </div>
        
        <div className="confirmation-container">
          <div className="confirmation-icon">✅</div>
          <h2>Booking Confirmed!</h2>
          <p>Your appointment has been scheduled successfully.</p>
          
          <div className="confirmation-details">
            <h3>Appointment Details</h3>
            <p><strong>Service:</strong> {selectedService}</p>
            <p><strong>Date:</strong> {availableDates.find(d => d.full === selectedDate)?.display}</p>
            <p><strong>Time:</strong> {selectedTime}</p>
            <p><strong>Name:</strong> {customerName}</p>
            <p><strong>Phone:</strong> {customerPhone}</p>
            <p><strong>Vehicle:</strong> {customerCar}</p>
          </div>
          
          <p className="confirmation-note">We'll send a reminder to {customerEmail || 'your phone'} 24 hours before your appointment.</p>
          
          <button onClick={handleNewBooking} className="new-booking-btn">
            Book Another Appointment
          </button>
          
          <Link to="/" className="home-link">Return to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-page">
      <div className="booking-header">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1>TEST WEBSITE</h1>
        <p>Schedule Your Appointment</p>
      </div>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div className={`progress-step ${bookingStep >= 1 ? 'active' : ''}`}>
          <div className="step-number">1</div>
          <span>Select Date & Time</span>
        </div>
        <div className={`progress-line ${bookingStep >= 2 ? 'active' : ''}`}></div>
        <div className={`progress-step ${bookingStep >= 2 ? 'active' : ''}`}>
          <div className="step-number">2</div>
          <span>Your Details</span>
        </div>
        <div className={`progress-line ${bookingStep >= 3 ? 'active' : ''}`}></div>
        <div className={`progress-step ${bookingStep >= 3 ? 'active' : ''}`}>
          <div className="step-number">3</div>
          <span>Confirm</span>
        </div>
      </div>

      <div className="booking-container">
        {/* Step 1: Date and Time Selection */}
        {bookingStep === 1 && (
          <div className="booking-step">
            <h2>Select Date & Time</h2>
            
            <div className="date-selection">
              <h3>Available Dates</h3>
              <div className="date-grid">
                {availableDates.map((date) => (
                  <button
                    key={date.full}
                    className={`date-btn ${selectedDate === date.full ? 'selected' : ''}`}
                    onClick={() => handleDateSelect(date.full)}
                  >
                    {date.display}
                  </button>
                ))}
              </div>
            </div>

            {selectedDate && (
              <div className="time-selection">
                <h3>Available Times</h3>
                <div className="time-grid">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      className={`time-btn ${selectedTime === time ? 'selected' : ''}`}
                      onClick={() => handleTimeSelect(time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="step-actions">
              <button 
                className="next-btn"
                disabled={!selectedDate || !selectedTime}
                onClick={handleNextStep}
              >
                Next: Your Details →
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Customer Details */}
        {bookingStep === 2 && (
          <div className="booking-step">
            <h2>Your Information</h2>
            
            <div className="service-selection">
              <h3>Select Service</h3>
              <div className="service-grid">
                {services.map((service) => (
                  <button
                    key={service.id}
                    className={`service-btn ${selectedService === service.name ? 'selected' : ''}`}
                    onClick={() => handleServiceSelect(service.name)}
                  >
                    <span className="service-name">{service.name}</span>
                    <span className="service-price">{service.price}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="customer-details-form">
              <h3>Your Details</h3>
              
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="(555) 123-4567"
                  required
                />
              </div>

              <div className="form-group">
                <label>Email (for confirmation)</label>
                <input
                  type="email"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-group">
                <label>Vehicle (Year, Make, Model) *</label>
                <input
                  type="text"
                  value={customerCar}
                  onChange={(e) => setCustomerCar(e.target.value)}
                  placeholder="2020 Toyota Camry"
                  required
                />
              </div>
            </div>

            <div className="step-actions">
              <button className="prev-btn" onClick={handlePrevStep}>
                ← Back
              </button>
              <button 
                className="next-btn"
                disabled={!selectedService || !customerName || !customerPhone || !customerCar}
                onClick={handleNextStep}
              >
                Next: Confirm →
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Confirmation */}
        {bookingStep === 3 && (
          <div className="booking-step">
            <h2>Confirm Your Appointment</h2>
            
            <div className="confirmation-details">
              <div className="detail-row">
                <span className="detail-label">Service:</span>
                <span className="detail-value">{selectedService}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Date:</span>
                <span className="detail-value">
                  {availableDates.find(d => d.full === selectedDate)?.display}
                </span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Time:</span>
                <span className="detail-value">{selectedTime}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Name:</span>
                <span className="detail-value">{customerName}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Phone:</span>
                <span className="detail-value">{customerPhone}</span>
              </div>
              {customerEmail && (
                <div className="detail-row">
                  <span className="detail-label">Email:</span>
                  <span className="detail-value">{customerEmail}</span>
                </div>
              )}
              <div className="detail-row">
                <span className="detail-label">Vehicle:</span>
                <span className="detail-value">{customerCar}</span>
              </div>
            </div>

            <div className="terms-notice">
              <p>By confirming, you agree to our cancellation policy. Please arrive 10 minutes before your appointment time.</p>
            </div>

            <div className="step-actions">
              <button className="prev-btn" onClick={handlePrevStep}>
                ← Back
              </button>
              <button className="confirm-btn" onClick={handleConfirmBooking}>
                Confirm Booking
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookingPage;