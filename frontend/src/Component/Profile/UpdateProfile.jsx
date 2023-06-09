import React, { useState } from 'react'

import { Button, Modal } from 'react-bootstrap'

export default function UpdateProfile({ show, handleClose, setProfileUpdated }) {

    const [uname, setUName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    const [images, setImages] = useState([]);

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('name', uname);
            formData.append('email', email);
            formData.append('mobile', mobile);
            formData.append('address', address);

            // Append the image only if it is provided by the user
            if (images.length > 0) {
                formData.append('images', images[0]); // Assuming only one image is selected
            }
            const userId = localStorage.getItem('userId');
            const response = await fetch(`https://hotel-backend-tge7.onrender.com/user/${userId}`, {
                method: 'PUT',
                body: formData,
            });

            if (response.ok) {
                setProfileUpdated(true);// Call the onUpdateDone callback
                handleClose()
            } else {
                throw new Error('Failed to update profile');
            }
        } catch (error) {
            console.error(error);
            // Handle error state
        }
    };


    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <>
                    <h1 className="update-profile-heading">Update Profile</h1>
                    <form onSubmit={handleUpdate} className="update-profile-form">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={uname}
                            onChange={(e) => setUName(e.target.value)}
                        />
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="mobile">Mobile:</label>
                        <input
                            type="tel"
                            id="mobile"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                        />
                        <label htmlFor="address">Address:</label>
                        <textarea
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        ></textarea>
                        <label htmlFor="images">Images:</label>
                        <input
                            type="file"
                            id="images"
                            accept="image/*"
                            onChange={(e) => setImages(e.target.files)}
                        />
                        <button type="submit">Update</button>
                    </form>
                </>
            </Modal.Body>
            {/* <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer> */}
        </Modal>
    )
}
