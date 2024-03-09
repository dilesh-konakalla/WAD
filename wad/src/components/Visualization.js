import React, { useState, useEffect } from 'react';
import 'chart.js/auto';
import { Pie, Bar, Doughnut, Line } from 'react-chartjs-2';

const styles = {
    container: {
      textAlign: 'center',
      margin: 'auto',
      width: '80%',
      backgroundColor: '#fff',
      padding: '20px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      marginBottom: '30px',
    },
    heading: {
      color: '#333',
      marginBottom: '15px',
    },
    card: {
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      marginBottom: '20px',
      padding: '15px',
    },
    doughnutContainer: {
      maxWidth: '400px', // Set a maximum width for the Doughnut chart container
      margin: '0 auto', // Center the chart within its container
    },
    footer: {
      marginTop: '30px',
      padding: '10px',
      backgroundColor: '#333',
      color: '#fff',
    },
    link: {
      color: '#FFCE56',
    },
  };
  


const WebAnalyticsDashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/data'); // Update the URL with your server's address
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Web Analytics Dashboard</h2>

      {data ? ( // Check if data is not null before accessing its properties
        <>
          {/* About Us Card */}
          <div style={{ ...styles.card, textAlign: 'left' }}>
            <h3>About Us</h3>
            <p>
              Welcome to our Web Analytics Dashboard! We provide insightful data visualizations to help you understand
              and analyze your website's performance.
            </p>
          </div>

          {/* Traffic Overview Card */}
          <div style={styles.card}>
            <h3>Traffic Overview</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ flex: 1 }}>
                {data.traffic_sources ? (
                  <Pie
                    data={{
                      labels: Object.keys(data.traffic_sources),
                      datasets: [
                        {
                          data: Object.values(data.traffic_sources),
                          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
                          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
                        },
                      ],
                    }}
                    options={{ maintainAspectRatio: false }}
                  />
                ) : (
                  <div>Data is not available or structured incorrectly for Pie Chart.</div>
                )}
              </div>

              <div style={{ flex: 1 }}>
                {data.popular_browsers ? (
                  <Bar
                    data={{
                      labels: Object.keys(data.popular_browsers),
                      datasets: [
                        {
                          label: 'Number of Users',
                          data: Object.values(data.popular_browsers),
                          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
                          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
                        },
                      ],
                    }}
                    options={{ maintainAspectRatio: false }}
                  />
                ) : (
                  <div>Data is not available or structured incorrectly for Bar Graph.</div>
                )}
              </div>
            </div>
          </div>

          {/* Geo Location Distribution Card */}
          <div style={{ ...styles.card, textAlign: 'center' }}>
            <h3>Geo Location Distribution</h3>
            {data.geo_location ? (
              <div style={styles.doughnutContainer}>
                <Doughnut
                  data={{
                    labels: Object.keys(data.geo_location),
                    datasets: [
                      {
                        data: Object.values(data.geo_location),
                        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
                        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
                      },
                    ],
                  }}
                  options={{
                    maintainAspectRatio: false,
                    responsive: true,
                  }}
                />
              </div>
            ) : (
              <div>Data is not available or structured incorrectly for Doughnut Chart.</div>
            )}
          </div>

          {/* Page Views Over Time Card */}
          <div style={styles.card}>
            <h3>Page Views Over Time</h3>
            {data.page_views_over_time ? (
              <Line
                data={{
                  labels: Object.keys(data.page_views_over_time),
                  datasets: [
                    {
                      label: 'Page Views',
                      data: Object.values(data.page_views_over_time),
                      borderColor: '#FFCE56',
                      backgroundColor: 'rgba(255,206,86,0.2)',
                    },
                  ],
                }}
                options={{ maintainAspectRatio: false }}
              />
            ) : (
              <div>Data is not available or structured incorrectly for Line Chart.</div>
            )}
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}

      {/* Contact Us Card */}
      <div style={{ ...styles.card, textAlign: 'left' }}>
        <h3>Contact Us</h3>
        <p>
          Have questions or need assistance? Feel free to contact our support team at{' '}
          <a href="mailto:support@webanalytics.com" style={styles.link}>
            support@webanalytics.com
          </a>
        </p>
      </div>

      {/* Additional content: Footer */}
      <footer style={styles.footer}>
        <p>Data provided by <a href="https://your-data-source.com" style={styles.link}>Your Data Source</a></p>
        <p>Charts powered by <a href="https://www.chartjs.org" style={styles.link}>Chart.js</a></p>
      </footer>
    </div>
  );
};

export default WebAnalyticsDashboard;
