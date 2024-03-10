import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [analyticsData, setAnalyticsData] = useState([]);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://wad-server-xev2.onrender.com/web';
      try {
        const response = await fetch(url);
        const data = await response.json();
        setAnalyticsData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  const themeClass = isDarkTheme ? 'dark-theme' : 'light-theme';

  return (
    <main className={`home-container ${themeClass}`}>
      <header>
        <h1>Welcome to Your Analytics Dashboard</h1>
        <p>Gain valuable insights into your website's performance and user engagement with our analytics dashboard.</p>
      </header>

      <section className="analytics-overview">
        <article className={`card ${themeClass}`}>
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
                    <td><NavLink to="/visualization">{referrer.name}</NavLink></td>
                    <td>{referrer.visit_duration}</td>
                    <td>{referrer.visitors}</td>
                    <td>{referrer.bounce_rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
      </section>

      <aside className={`info-section ${themeClass}`}>
        <h2>How It Works</h2>
        <p>Our analytics dashboard provides comprehensive information about your website's performance. Monitor top referrers, visit duration, visitors, and bounce rates to make informed decisions and optimize your online presence.</p>
        <p>Explore the details, track trends, and enhance your website's user experience.</p>
      </aside>

      <div className="theme-toggle">
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </main>
  );
};

export default Home;
