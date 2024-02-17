import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Explore() {
  const [listings, setListings] = useState([]);
  const [filters, setFilters] = useState({
    teacher: ''
  });

  useEffect(() => {
    // Fetch listings when the component mounts
    fetchListings();
  }, []);

  const fetchListings = async () => {
    try {
      const response = await axios.get('/api/classes');
      setListings(response.data);
    } catch (error) {
      console.error('Error fetching listings:', error);
    }
  };

  const handleFilterChange = (event) => {
    setFilters({ ...filters, [event.target.name]: event.target.value });
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Explore Yoga Classes</h1>
      <div className="flex items-center mb-4">
        <label htmlFor="teacher" className="mr-2">Filter by Teacher:</label>
        <select
          id="teacher"
          name="teacher"
          className="border rounded px-2 py-1"
          value={filters.teacher}
          onChange={handleFilterChange}
        >
          <option value="">All Teachers</option>
          {/* Add options for teachers dynamically if available */}
        </select>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {/* Render listings */}
        {listings.map(listing => (
          <div key={listing._id} className="border p-4">
            <h2 className="text-xl font-bold mb-2">{listing.title}</h2>
            <p className="text-gray-600 mb-2">{listing.teacher}</p>
            <p>{listing.description}</p>
            {/* Add more details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;