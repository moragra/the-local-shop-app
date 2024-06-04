import './Login.scss'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
    <Header />
    <main className="login">
      <div className="login__back">
        <Link to={'/'} className="login__back-link">
          <h4 className="login__back-t">BACK</h4>
        </Link>
      </div>
      <section className="login__section">
        <h2 className="login__section-h2">Welcome back!</h2>
          <form className="login__section-form" action="">
            <div className="login__section-top">
              <input
                className="login__section-top-i"
                type="email"
                placeholder="*Email"
              />
              <input
                className="login__section-top-i"
                type="password"
                placeholder="*Password"
              />
            </div>
            <div className="login__section-bottom">
              <Link className="login__section-bottom-link">
                <h4 className="login__section-bottom-t">LOG IN</h4>
              </Link>
              <div className="login__section-bottom-orc">
                <hr className="login__section-bottom-hr" />
                <p className="login__section-bottom-p"> or </p>
                <hr className="login__section-bottom-hr" />
              </div>
              <Link className="login__section-bottom-link">
                <h4 className="login__section-bottom-t">
                  LOG IN WITH GOOGLE
                </h4>
              </Link>
            </div>
          </form>
      </section>
    </main>
    <Footer />
  </>
  )
}
