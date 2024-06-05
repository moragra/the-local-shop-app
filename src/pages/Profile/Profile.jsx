import "./Profile.scss";
import ig from "../../assets/instagram.svg";
import fb from "../../assets/facebook.png";
import x from "../../assets/twitter.svg";
import li from "../../assets/linkedin.png";
import edit from '../../assets/edit.svg'

export default function Profile() {
  return (
    <>
      <main className="profile">
        <div className="profile__container">
          <div className="profile__top">
            <div className="profile__left">
              <div className="profile__img">
                <img className="profile__img-i" src="" alt="" />
              </div>
              <div className="profile__name">
                <h2 className="profile__name-t">Graciela Mora Mejias</h2>
              </div>
            </div>
            <div className="profile__right">
                <img className="profile__right-i" src={edit} alt="" />
            </div>
          </div>
          <hr className="profile__hr" />
          <div className="profile__mid">
            <h2 className="profile__mid-t">SHOP NAME</h2>
            <hr className="profile__mid-hr" />
            <h2 className="profile__mid-t">WEBSITE</h2>
          </div>
          <hr className="profile__hr" />
          <div className="profile__socials">
            <div className="profile__socials-ic">
              <img className="profile__socials-i" src={ig} alt="" />
            </div>
            <hr className="profile__socials-hr" />
            <div className="profile__socials-ic">
              <img className="profile__socials-i" src={fb} alt="" />
            </div>
            <hr className="profile__socials-hr" />
            <div className="profile__socials-ic">
              <img className="profile__socials-i" src={x} alt="" />
            </div>
            <hr className="profile__socials-hr" />
            <div className="profile__socials-ic">
              <img className="profile__socials-i" src={li} alt="" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
