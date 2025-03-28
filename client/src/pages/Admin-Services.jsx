import React, { useState } from 'react';
import { useAuth } from '../store/auth';

const defaultContactFormData = {
  photo: '',
  description: '',
  place: '',
  need: '',
  price:''
};

function AdminServices() {
  const [contact, setContact] = useState(defaultContactFormData);
  const { authorizationToken } = useAuth();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/admin/services', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: authorizationToken
        },
        body: JSON.stringify(contact)
      });
      if (response.ok) {
        setContact(defaultContactFormData);
        const data = await response.json();
        console.log(data);
        alert('Message sent successfully');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Post Data</h1>
      <section id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="photo" className="form-label">
                    Photo
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="photo"
                    name="photo"
                    value={contact.photo}
                    onChange={handleInput}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    value={contact.description}
                    onChange={handleInput}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="place" className="form-label">
                    Place
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="place"
                    name="place"
                    value={contact.place}
                    onChange={handleInput}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="need" className="form-label">
                    Need
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="need"
                    name="need"
                    value={contact.need}
                    onChange={handleInput}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="price"
                    name="price"
                    value={contact.price}
                    onChange={handleInput}
                  />
                </div>
                <button type="submit" className="btn btn-outline-primary rounded-pill px-4">
                  Send Message <i className="fa fa-paper-plane ms-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdminServices;
