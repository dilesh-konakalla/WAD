import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import your custom CSS file for styling

const Home = () => {
  const [analyticsData, setAnalyticsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://wad-server-xev2.onrender.com/web');
        const data = await response.json();
        setAnalyticsData(data);
      } catch (error) {
        console.error('Error fetching analytics data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home-container">
      <div className="card-container">
      
        <div className="card">
        <h2>Top Referrers</h2>
        <div className="scrollable-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Visit Duration</th>
                <th>Visitors</th>
                <th>Bounce Rate</th>
              </tr>
            </thead>
            <tbody>
              {analyticsData.map((referrer, index) => (
                <tr key={index}>
                  <td>
                    <Link to="/visualization">{referrer.name}</Link>
                  </td>
                  <td>{referrer.visit_duration}</td>
                  <td>{referrer.visitors}</td>
                  <td>{referrer.bounce_rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Home;
