import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import './Home.css'; // Import your custom CSS file for styling

const Home = () => {
  const [analyticsData, setAnalyticsData] = useState([]);
  const [pagesData, setPagesData] = useState([]);

  useEffect(() => {
    const fetchData = async (url, setData) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
      }
    };

    fetchData('https://wad-server-xev2.onrender.com/web', setAnalyticsData);
    fetchData('https://wad-server-xev2.onrender.com/pages', setPagesData);
  }, []);

  // Extract names and visitors from pagesData for the line chart
  const pageNames = pagesData.map((page) => page.name);
  const pageVisitors = pagesData.map((page) => page.visitors);

  const lineChartData = {
    labels: pageNames,
    datasets: [
      {
        label: 'Visitors',
        data: pageVisitors,
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

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

        <div className="card">
          <h2>Page Statistics</h2>
          <div className="line-chart">
            <Line data={lineChartData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
