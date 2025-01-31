import { useState, useEffect } from "react";
import "./GetAdded.scss";
import { api } from '../../utils/axios'
import { Geocoder} from "@mapbox/search-js-react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';

export default function GetAdded({ token, setBusinesses }) {
  const [user_id, setUser_id] = useState(null);
  const [red, setRed] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [geoData, setGeoData] = useState("");
  const [values, setValues] = useState({});
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      // console.log('Token exists:', token)
      getProfile();
    } else {
      // console.log('No token found')
      setUser_id(null);
    }
  }, [token]);

  const getProfile = async () => {
    try {
      // console.log('Making profile request with token:', token)
      const { data } = await api.get('/profile', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      // console.log('Profile data received:', data)
      setUser_id(data.id)
    } catch (error) {
      // console.error('Error fetching profile:', error)
      setError('Error fetching user profile')
    }
  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setSubmitted(false);

    setError(null);

    const shop_name = e.target.shop_name.value;
    const category = e.target.category.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const address = geoData;
    const about = e.target.about.value;
    const website_url = e.target.website_url.value;
    const ig_url = e.target.ig_url.value;
    const fb_url = e.target.fb_url.value;
    const x_url = e.target.x_url.value;
    const li_url = e.target.li_url.value;
    const consent = e.target.consent.value;

    if (
      !shop_name ||
      !category ||
      !email ||
      !phone ||
      !address ||
      !about ||
      !category
    ) {
      setRed("added__form-red");
      setError("There's missing information")
      return;
    }

    function emailIsValid(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    
    function validatePhoneNumber(phoneNumber) {
     return /^(\+?[0-9]{1,4}[-.\s]?\(?[0-9]{1,3}\)?[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,9})$/.test(
        phoneNumber
      );
    }

    if(!validatePhoneNumber(phone)){
      return setError("Sorry there is an error with you phone number.")
    } 

    if(!emailIsValid(email)){
      return setError("Sorry there is an error with your email.")
    } 
    
    // console.log(
    //   {
    //     user_id,
    //     shop_name,
    //     category,
    //     email,
    //     phone,
    //     address,
    //     about,
    //     website_url,
    //     ig_url,
    //     fb_url,
    //     x_url,
    //     li_url,
    //     consent,
    //   }
    // )

    try {
      const response = await api.post('/business', {
        user_id,
        shop_name,
        category,
        email,
        phone,
        address,
        about,
        website_url,
        ig_url,
        fb_url,
        x_url,
        li_url,
        consent
      });

      if (response.status === 201) {
        // console.log('Business created successfully:', response.data);
        navigate('/profile');

        // Fetch updated businesses after adding a new one
        const updatedBusinessesResponse = await api.get('/business'); // Adjust the endpoint as needed
        setBusinesses(updatedBusinessesResponse.data); // Assuming setBusinesses updates the state in the parent component
      }
    } catch (error) {
      // console.error('Error submitting business:', error);
      setError(error.response?.data?.error || 'An error occurred while submitting your business');
    }
  };

  return (
    <>
      <main className="added">
        <h2 className="added__header">Submit a Shop</h2>
        <form className="added__form" onSubmit={submitHandler}>
          <label className="added__form-l">Shop Name</label>
          <input
            type="text"
            id="shop-name"
            name="shop_name"
            className={`${red} added__form-i`}
            onClick={() => {
              if (red === "added__form-red") {
                setRed("");
              }
            }}
            value={values.shop_name}
            onChange={(e) =>
              setValues({ ...values, shop_name: e.target.value })
            }
          />

          <label className="added__form-l">Category</label>
          <select
            name="category"
            id="category"
            className={`${red} added__form-i added__form-dd`}
            onClick={() => {
              if (red === "added__form-red") {
                setRed("");
              }
            }}
            value={values.category}
            onChange={(e) => setValues({ ...values, category: e.target.value })}
          >
            <option className="added__form-gray" value="deafult">
              Select a category
            </option>
            <option value="groceries">Groceries</option>
            <option value="fashion">Fashion</option>
            <option value="restaurants">Restaurant</option>
            <option value="recreational">Recreational</option>
            <option value="convenience">Convenience</option>
            <option value="hotel">Hotel</option>
          </select>

          <label className="added__form-l">Email</label>
          <input
            className={`${red} added__form-i`}
            onClick={() => {
              if (red === "added__form-red") {
                setRed("");
              }
            }}
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />

          <label className="added__form-l">Phone</label>
          <input
            className={`${red} added__form-i`}
            onClick={() => {
              if (red === "added__form-red") {
                setRed("");
              }
            }}
            type="tel"
            id="phone"
            name="phone"
            value={values.phone}
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
          />

          <label className="added__form-l">Address</label>
          <Geocoder
            className="added__form-gc"
            accessToken="pk.eyJ1IjoibW9yYWdyYSIsImEiOiJjbHgweXp3OWEwMHo5Mmxwazlna2pzeGQ3In0.XnKqyFAxwHt3jzgBW4OjfQ"
            options={{ language: "en" }}
            name="address"
            value={''}
            onRetrieve={(d) => {
              setGeoData(d);
            }}
          />
          <label className="added__form-l added__form-about">About</label>
          <input
            className={`${red} added__form-i`}
            onClick={() => {
              if (red === "added__form-red") {
                setRed("");
              }
            }}
            type="text"
            id="about"
            name="about"
            value={values.about}
            onChange={(e) => setValues({ ...values, about: e.target.value })}
          />

          <label className="added__form-l">Website URL</label>
          <input
            className={`${red} added__form-i`}
            onClick={() => {
              if (red === "added__form-red") {
                setRed("");
              }
            }}
            type="url"
            id="website-url"
            name="website_url"
            value={values.website_url}
            onChange={(e) =>
              setValues({ ...values, website_url: e.target.value })
            }
          />

          <label className="added__form-l">Instagram URL</label>
          <input
            className={`${red} added__form-i`}
            onClick={() => {
              if (red === "added__form-red") {
                setRed("");
              }
            }}
            type="url"
            id="instagram-url"
            name="ig_url"
            value={values.ig_url}
            onChange={(e) => setValues({ ...values, ig_url: e.target.value })}
          />

          <label className="added__form-l">Facebook URL</label>
          <input
            className={`${red} added__form-i`}
            onClick={() => {
              if (red === "added__form-red") {
                setRed("");
              }
            }}
            type="url"
            id="facebook-url"
            name="fb_url"
            value={values.fb_url}
            onChange={(e) => setValues({ ...values, fb_url: e.target.value })}
          />

          <label className="added__form-l">Twitter URL</label>
          <input
            className={`${red} added__form-i`}
            onClick={() => {
              if (red === "added__form-red") {
                setRed("");
              }
            }}
            type="url"
            id="twitter-url"
            name="x_url"
            value={values.x_url}
            onChange={(e) => setValues({ ...values, x_url: e.target.value })}
          />

          <label className="added__form-l">LinkedIn URL</label>
          <input
            className={`${red} added__form-i`}
            onClick={() => {
              if (red === "added__form-red") {
                setRed("");
              }
            }}
            type="url"
            id="linkedin-url"
            name="li_url"
            value={values.li_url}
            onChange={(e) => setValues({ ...values, li_url: e.target.value })}
          />
          <label className="added__form-l">Consent</label>
          <div className="added__form-consent">
            <input
              className={`${red} added__form-i`}
              onClick={() => {
                if (red === "added__form-red") {
                  setRed("");
                }
              }}
              type="checkbox"
              id="consent"
              name="consent"
              checked={values.consent}
              onChange={(e) =>
                setValues({ ...values, consent: e.target.checked })
              }
            />
            <p className="added__form-t">
              By submitting this form, I authorize NeighborGood to display my
              shop's information and location publicly. I understand that this
              information will be accessible to users of NeighborGood platform
              and may be used to promote my business within the community. I
              consent to the use of my provided data for these purposes and
              acknowledge that I have the right to request the removal or update
              of my information at any time.
            </p>
          </div>
          <button onClick={handleOpen} className="added__form-button">SUBMIT</button>
          {submitted && (
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="box__container"
          >
            <Box className="box">
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Shop submitted!
              </Typography>
            </Box>
          </Modal>
          )}
          {error && <h3 className="added__form-error">{error}</h3>}
        </form>
      </main>
    </>
  );
}
