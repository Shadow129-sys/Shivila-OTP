import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './user.module.css';

class UserAccount extends React.Component {
  state = {
    activeSection: null,
    complaintDescription: '',
    feedbackText: '',
    bookingId: ''
  };

  setActiveSection = (section) => {
    this.setState((prevState) => ({
      activeSection: prevState.activeSection === section ? null : section
    }));
  };

  handleComplaintDescriptionChange = (event) => {
    this.setState({ complaintDescription: event.target.value });
  };

  handleFeedbackTextChange = (event) => {
    this.setState({ feedbackText: event.target.value });
  };

  handleBookingIdChange = (event) => {
    this.setState({ bookingId: event.target.value });
  };

  handleSubmitComplaint = () => {
    const { complaintDescription } = this.state;
    const id = localStorage.getItem('id');

    const requestBody = {
      complaintDescription: complaintDescription
    };
    console.log(id);
    fetch(`http://localhost:5000/post/complaint/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
      .then(response => {
        if (response.ok) {
          console.log('Complaint submitted successfully!');
          // Perform any additional actions upon successful submission
        } else {
          console.error('Failed to submit complaint.');
          // Handle the error case
        }
      })
      .catch(error => {
        console.error('An error occurred while submitting the complaint:', error);
        // Handle the error case
      });
  };

  handleSubmitFeedback = () => {
    const { feedbackText } = this.state;
    const id = localStorage.getItem('id');

    const requestBody = {
      feedbackText: feedbackText
    };

    fetch(`http://localhost:5000/feedback/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
      .then(response => {
        if (response.ok) {
          console.log('Feedback submitted successfully!');
          // Perform any additional actions upon successful submission
        } else {
          console.error('Failed to submit feedback.');
          // Handle the error case
        }
      })
      .catch(error => {
        console.error('An error occurred while submitting the feedback:', error);
        // Handle the error case
      });
  };

  handleSubmitCancelBooking = () => {
    const { bookingId } = this.state;
    const id = localStorage.getItem('id');

    const requestBody = {
      bookingId: bookingId
    };

    fetch(`http://localhost:5000/cancel-booking/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
      .then(response => {
        if (response.ok) {
          console.log('Booking canceled successfully!');
          // Perform any additional actions upon successful cancellation
        } else {
          console.error('Failed to cancel booking.');
          // Handle the error case
        }
      })
      .catch(error => {
        console.error('An error occurred while canceling the booking:', error);
        // Handle the error case
      });
  };

  render() {
    const { activeSection, complaintDescription, feedbackText, bookingId } = this.state;

    return (
      <div className={styles.UserAccount}>
        <h2 className={styles.AccountSettingsTitle}>User Account Settings</h2>
        <div>
          <button
            className={activeSection === 'services' ? styles.activeButton : ''}
            onClick={() => this.setActiveSection('services')}
          >
            Services
          </button>
          <br />
          <button
            className={activeSection === 'help' ? styles.activeButton : ''}
            onClick={() => this.setActiveSection('help')}
          >
            Help
          </button>
          <br />
          <button
            className={activeSection === 'complaints' ? styles.activeButton : ''}
            onClick={() => this.setActiveSection('complaints')}
          >
            Complaints
          </button>
          <br />
          <button
            className={activeSection === 'feedback' ? styles.activeButton : ''}
            onClick={() => this.setActiveSection('feedback')}
          >
            Feedback
          </button>
          <br />
          <button
            className={activeSection === 'bookings' ? styles.activeButton : ''}
            onClick={() => this.setActiveSection('bookings')}
          >
            Bookings
          </button>
          <br />
          <button
            className={activeSection === 'cancelBooking' ? styles.activeButton : ''}
            onClick={() => this.setActiveSection('cancelBooking')}
          >
            Cancel your booking
          </button>

        </div>
        <div>
          {activeSection === 'services' && (
            <div className={styles.activeSection}>

              {/* Add your services component here */}
            </div>
          )}
          {activeSection === 'help' && (
            <div className={styles.activeSection}>

              {/* Add your help component here */}
            </div>
          )}
          {activeSection === 'complaints' && (
            <div className={styles.activeSection}>

              <form onSubmit={this.handleSubmitComplaint}>
                <textarea
                  value={complaintDescription}
                  onChange={this.handleComplaintDescriptionChange}
                  placeholder="Enter your complaint description"
                  required
                />
                <button type="submit-a">Submit</button>
              </form>
            </div>
          )}
          {activeSection === 'feedback' && (
            <div className={styles.activeSection}>

              <form onSubmit={this.handleSubmitFeedback}>
                <textarea
                  value={feedbackText}
                  onChange={this.handleFeedbackTextChange}
                  placeholder="Enter your feedback"
                  required
                />
                <button type="submit-a">Submit</button>
              </form>
            </div>
          )}
          {activeSection === 'bookings' && (
            <div className={styles.activeSection}>

              {/* Add your bookings component here */}
            </div>
          )}
          {activeSection === 'cancelBooking' && (
            <div className={styles.activeSection}>

              <form onSubmit={this.handleSubmitCancelBooking}>
                <input
                  type="text-a"
                  value={bookingId}
                  onChange={this.handleBookingIdChange}
                  placeholder="Enter your booking ID"
                  required
                />
                <button type="submit-a">Cancel</button>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const UserSettings = () => {
  const location = useLocation();

  if (location.pathname !== '/profile') {
    return null;
  }

  // return <UserAccount />;
  return null;
};

export default UserSettings;
