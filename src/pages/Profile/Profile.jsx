import "./Profile.scss";
import ig from "../../assets/instagram.svg";
import fb from "../../assets/facebook.png";
import x from "../../assets/twitter.svg";
import li from "../../assets/linkedin.png";
import edit from "../../assets/edit.svg";
import { useEffect, useState } from "react";
import { api } from '../../utils/axios'
import { Link } from "react-router-dom";

export default function Profile({ token }) {
  const [user, setUser] = useState(null);
  const [business, setBusiness] = useState(null);

  useEffect(() => {
    if (token) {
      getData();
    } else {
      setUser(null);
      setBusiness(null);
    }
  }, [token]);

  const getData = async () => {
    const resp1 = await api.get('/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      mode: "cors",
    });
    const profile = resp1.data;
    setUser(profile);

    const resp2 = await api.get(`/business/${profile.id}`);
    const business = resp2.data;
    setBusiness(business);
  };

  return (
    <>
      {user ? (
        <main className="profile">
          <div className="profile__container">
            <div className="profile__top">
              <div className="profile__left">
                {/* <div className="profile__img">
                  <img className="profile__img-i" src="" alt="" />
                </div> */}
                <div className="profile__name">
                  <h2 className="profile__name-t">{user.name.toUpperCase()}</h2>
                </div>
              </div>
              <div className="profile__right">
                <img className="profile__right-i" src={edit} alt="" />
              </div>
            </div>
            {business ? (
              <div>
                <hr className="profile__hr" />
                <div className="profile__mid">
                  <h2 className="profile__mid-t">
                    {business.shop_name.toUpperCase()}
                  </h2>
                  <hr className="profile__mid-hr" />
                  <Link to={business.website_url} className="profile__mid-link">
                    <h2 className="profile__mid-t">WEBSITE</h2>
                  </Link>
                </div>
                <hr className="profile__hr" />
                <div className="profile__socials">
                  <div className="profile__socials-ic">
                    <Link to={business.ig_url}>
                      <img className="profile__socials-i" src={ig} alt="" />
                    </Link>
                  </div>
                  <hr className="profile__socials-hr" />
                  <div className="profile__socials-ic">
                    <Link to={business.fb_url}>
                      <img className="profile__socials-i" src={fb} alt="" />
                    </Link>
                  </div>
                  <hr className="profile__socials-hr" />
                  <div className="profile__socials-ic">
                    <Link to={business.x_url}>
                      <img className="profile__socials-i" src={x} alt="" />
                    </Link>
                  </div>
                  <hr className="profile__socials-hr" />
                  <div className="profile__socials-ic">
                    <Link to={business.li_url}>
                      <img className="profile__socials-i" src={li} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </main>
      ) : (
        ""
      )}
    </>
  );
}
