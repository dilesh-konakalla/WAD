import React from 'react';

const Footer = () => {
  return (
   <div>
    <p></p>
    <p></p>
    <footer style={styles.footerContainer}>
      <p> Disclaimer: The data displayed  is sample data and not original. 
        It has been randomly generated for demonstration purposes to showcase how the application works. </p>
        <p>&copy; 2024 Your Website Name. All rights reserved.</p>

    </footer>
   </div>
  );
};

const styles = {
  footerContainer: {
    backgroundColor: '#283e53',
    padding: '10px',
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    color: 'white',
  },
};

export default Footer;
