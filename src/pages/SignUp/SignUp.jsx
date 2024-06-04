import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./SignUp.scss";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <>
      <Header />
      <main className="signup">
        <div className="signup__back">
          <Link to={'/'} className="signup__back-link">
            <h4 className="signup__back-t">BACK</h4>
          </Link>
        </div>
        <section className="signup__section">
          <h2 className="signup__section-h2">Sign up</h2>
          <h3 className="signup__section-h3">
            Welcome to The Local Shop. Create your account.
          </h3>
            <form className="signup__section-form" action="">
              <div className="signup__section-top">
                <input
                  className="signup__section-top-i"
                  type="text"
                  placeholder="*Name"
                />
                <input
                  className="signup__section-top-i"
                  type="email"
                  placeholder="*Email"
                />
                <input
                  className="signup__section-top-i"
                  type="password"
                  placeholder="*Password"
                />
                <input
                  className="signup__section-top-i"
                  type="password"
                  placeholder="*Confirm Paswword"
                />
              </div>
              <div className="signup__section-bottom">
                <Link className="signup__section-bottom-link">
                  <h4 className="signup__section-bottom-t">NEXT</h4>
                </Link>
                <div className="signup__section-bottom-orc">
                  <hr className="signup__section-bottom-hr" />
                  <p className="signup__section-bottom-p"> or </p>
                  <hr className="signup__section-bottom-hr" />
                </div>
                <Link className="signup__section-bottom-link">
                  <h4 className="signup__section-bottom-t">
                    SIGN UP WITH GOOGLE
                  </h4>
                </Link>
              </div>
            </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
