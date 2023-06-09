import React from 'react';
import styles from './partner.module.css';
import {useLocation} from "react-router-dom"

const Partner = () => {
  return (
    <div className={styles.partner}>
      <div className={styles.section1}>
        <h2>Our Partners</h2>
        <div className={styles.first}>
          <div className={styles.card}>
            <img src="https://d25wybtmjgh8lz.cloudfront.net/sites/default/files/styles/ph_masthead_1900x750/public/property/img-mastheads/22_022_Website%20Rotation_March_The%20Leela%20Palace%20Jaipur.jpg" alt="image1" />
            <h3 >Hotel Leela Palace</h3>
          </div>
          <div className={styles.card}>
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/0b/7d/0d/premier-rooms-with-semi.jpg?w=700&h=-1&s=1" alt="image2" />
            <h3>Hotel Oberoi</h3>
          </div>
          <div className={styles.card}>
            <img src="https://qph.cf2.quoracdn.net/main-qimg-fa982d416b9d46bc16ec1cc5ee7a9b66.webp" alt="image3" />
            <h3>Hotel Van vilas</h3>
          </div>
          <div className={styles.card}>
            <img src="https://www.intermiles.com/_next/image?url=https://www.intermilesresources.com/iwov-resources/images/blog/top-10-best-7-star-luxury-hotels-in-india/Rambagh%20Palace%20Jaipur_250x250.jpg&w=640&q=75" alt="image4" />
            <h3>Tree House</h3>
          </div>
        </div>
      </div>
      <div className={styles.section2}>
        <h2>Become Our Partner</h2>
        <p>Are you interested in partnering with our hotel? Contact us below:</p>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
const Partners = () => {
    const location = useLocation();
  
    if (location.pathname !== '/partner') {
      return null;
    }
  
    return <Partner />;
  };
export default Partners;
