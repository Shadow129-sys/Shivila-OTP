import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from './footer.module.css';

function Footer() {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <h3>Company</h3>
          <ul>
            <li><a href="/about-us" class="no-underline text-black">About Us</a></li>
            <li><a href="/contact-us" class="no-underline text-black">Contact Us</a></li>
            <li><a href="/help" class="no-underline text-black">Help</a></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Services</h3>
          <ul>
            <li><a href="/hotels-kolkata" class="no-underline text-black">Hotels in Punjab</a></li>
            <li><a href="/hotels-jaipur" class="no-underline text-black">Hotels in Maharashtra</a></li>
            <li><a href="/hotels-goa" class="no-underline text-black">Hotels in Goa</a></li>
            <li><a href="/hotels-tamilnadu" class="no-underline text-black">Hotels in Tamilnadu</a></li>
            <li><a href="/hotels-uttarpradesh" class="no-underline text-black">Hotels in UttarPradesh</a></li>
            <li><a href="/hotels-uttarpradesh" class="no-underline text-black">Hotels in UttarPradesh</a></li>
          </ul>
          <ul>
            <li><a href="/hotels-kolkata" class="no-underline text-black">Hotels in Punjab</a></li>
            <li><a href="/hotels-jaipur" class="no-underline text-black">Hotels in Maharashtra</a></li>
            <li><a href="/hotels-goa" class="no-underline text-black">Hotels in Goa</a></li>
            <li><a href="/hotels-tamilnadu" class="no-underline text-black">Hotels in Tamilnadu</a></li>
            <li><a href="/hotels-uttarpradesh" class="no-underline text-black">Hotels in UttarPradesh</a></li>
            <li><a href="/hotels-uttarpradesh" class="no-underline text-black">Hotels in UttarPradesh</a></li>
          </ul>
          <ul>
            <li><a href="/hotels-kolkata" class="no-underline text-black">Hotels in Punjab</a></li>
            <li><a href="/hotels-jaipur" class="no-underline text-black">Hotels in Maharashtra</a></li>
            <li><a href="/hotels-goa" class="no-underline text-black">Hotels in Goa</a></li>
            <li><a href="/hotels-tamilnadu" class="no-underline text-black">Hotels in Tamilnadu</a></li>
            <li><a href="/hotels-uttarpradesh" class="no-underline text-black">Hotels in UttarPradesh</a></li>
            <li><a href="/hotels-uttarpradesh" class="no-underline text-black">Hotels in UttarPradesh</a></li>
          </ul>
          <ul>
            <li><a href="/hotels-tamilnadu" class="no-underline text-black">Hotels in Tamilnadu</a></li>
            <li><a href="/hotels-uttarpradesh" class="no-underline text-black">Hotels in UttarPradesh</a></li>
            <li><a href="/hotels-uttarpradesh" class="no-underline text-black">Hotels in UttarPradesh</a></li>
            <li><a href="/hotels-tamilnadu" class="no-underline text-black">Hotels in Tamilnadu</a></li>
            <li><a href="/hotels-uttarpradesh" class="no-underline text-black">Hotels in UttarPradesh</a></li>
            <li><a href="/hotels-uttarpradesh" class="no-underline text-black">Hotels in UttarPradesh</a></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Follow Us</h3>
          <ul className={styles.socialIcons}>
            <li>
              <a href="https://www.facebook.com/yourcompany" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/yourcompany" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/yourcompany" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
