import { useState, useEffect } from "react";
import "./GetAdded.scss";
import axios from "axios";
import { AddressAutofill } from "@mapbox/search-js-react";

export default function GetAdded({ token }) {
  const [user_id, setUser_id] = useState(null);
  const [red, setRed] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (token) {
      getProfile();
    } else {
      setUser_id(null);
    }
  }, [token]);

  const getProfile = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_LOCALHOST}profile`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        mode: "cors",
      }
    );
    setUser_id(data.id);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    setError(null);
    const shop_name = e.target.shop_name.value;
    const category = e.target.category.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;
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
      !website_url ||
      !ig_url ||
      !fb_url ||
      !x_url ||
      !li_url ||
      !category
    ) {
      setRed("added__form-red");
      return;
    }
    try {
      await axios.post(`${import.meta.env.VITE_LOCALHOST}business`, {
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
        consent,
      });
      setSubmitted(true);

      // clean input fields after submitting
    } catch (error) {
      setError(
        "Sorry there was an error, we can't complete your request at the moment."
      );
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
          />

          <label className="added__form-l">Category</label>
          <input
            className={`${red} added__form-i`}
            onClick={() => {
              if (red === "added__form-red") {
                setRed("");
              }
            }}
            type="text"
            id="category"
            name="category"
          />

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
          />

          <label className="added__form-l">Address</label>
          <AddressAutofill accessToken='pk.eyJ1IjoibW9yYWdyYSIsImEiOiJjbHgweXp3OWEwMHo5Mmxwazlna2pzeGQ3In0.XnKqyFAxwHt3jzgBW4OjfQ'>
            <input
              className={`${red} added__form-i`}
              onClick={() => {if (red === "added__form-red") {setRed("");}}}
              type="text"
              id="address"
              name="address"
              autoComplete="address"
            />
          </AddressAutofill>
          <label className="added__form-l">About</label>
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
            />
            <p className="added__form-t">
              By submitting this form, I authorize The Local Shop to display my
              shop's information and location publicly. I understand that this
              information will be accessible to users of The Local Shop platform
              and may be used to promote my business within the community. I
              consent to the use of my provided data for these purposes and
              acknowledge that I have the right to request the removal or update
              of my information at any time.
            </p>
          </div>
          <button className="added__form-button">SUBMIT</button>
          {submitted && (
            <h3 className="added__form-submitted">Business submitted!</h3>
          )}
          {error && <h3 className="added__form-error">{error}</h3>}
        </form>
      </main>
    </>
  );
}
