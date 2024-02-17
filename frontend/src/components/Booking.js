import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

function Booking() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    mobile: ''
  });

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleChange = (event) => {
    setBookingDetails({ ...bookingDetails, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const bookingData = {
        date: selectedDate,
        time: selectedTime,
        name: bookingDetails.name,
        email: bookingDetails.email,
        mobile: bookingDetails.mobile
      };
      const response = await axios.post('/api/bookings', bookingData);
      console.log('Booking successful:', response.data);
      // Redirect to booking confirmation page or user profile page
    } catch (error) {
      console.error('Error booking:', error);
      // Handle booking error (e.g., display error message)
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Book Yoga Class</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700">Select Date:</label>
          <DatePicker
            id="date"
            selected={selectedDate}
            onChange={handleDateChange}
            className="border rounded px-3 py-1 w-full"
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block text-gray-700">Select Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={selectedTime}
            onChange={handleTimeChange}
            className="border rounded px-3 py-1 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={bookingDetails.name}
            onChange={handleChange}
            className="border rounded px-3 py-1 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={bookingDetails.email}
            onChange={handleChange}
            className="border rounded px-3 py-1 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="mobile" className="block text-gray-700">Mobile:</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={bookingDetails.mobile}
            onChange={handleChange}
            className="border rounded px-3 py-1 w-full"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Book Now
        </button>
      </form>
    </div>
  );
}

export default Booking;