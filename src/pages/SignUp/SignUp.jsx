import "./SignUp.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function SignUp() {
  const [signed, setSigned] = useState(false);
  const [error, setError] = useState(null);
  const [red, setRed] = useState('')

  const submitHandler = async (e) => {
    e.preventDefault()

    setError(null);
    setSigned(false);

    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.pwd.value
    const confirmPassword = e.target.pwdC.value

    if(!name || !email || !password || !confirmPassword){
      setRed('login__section-bottom-red')
       return
    }

    if(password !== confirmPassword){
      setRed('login__section-bottom-red')
       return
    }

    try {
      await axios.post('http://localhost:5050/signup', {
        name,
        email,
        password
      })
      console.log('in')
      setSigned(true)
    } catch (error) {
      setError("Sorry there was an error, we can't complete your request at the moment")
    }
  }

  return (
    <>
      <main className="signup">
        <div className="signup__back">
          <Link to={"/"} className="signup__back-link">
            <h4 className="signup__back-t">BACK</h4>
          </Link>
          {signed && <h3 className="signup__section-signed">Sign up successful, please log in!</h3>}
          {error && <h3 className="signup__section-error">{error}</h3>}
        </div>
        <section className="signup__section">
          <h2 className="signup__section-h2">Sign up</h2>
          <h3 className="signup__section-h3">
            Welcome to The Local Shop. Create your account.
          </h3>
          <form className="signup__section-form" onSubmit={submitHandler}>
            <div className={`${red} signup__section-top`}>
              <input
                className={`${red} signup__section-top-i`}
                onClick={()=>{if(red=== 'login__section-bottom-red'){setRed('')}}}
                type="text"
                placeholder="*Name"
                name="name"
              />
              <input
                className={`${red} signup__section-top-i`}
                onClick={()=>{if(red=== 'login__section-bottom-red'){setRed('')}}}
                type="email"
                placeholder="*Email"
                name="email"
              />
              <input
                className={`${red} signup__section-top-i`}
                onClick={()=>{if(red=== 'login__section-bottom-red'){setRed('')}}}
                type="password"
                placeholder="*Password"
                name="pwd"
              />
              <input
                className={`${red} signup__section-top-i`}
                onClick={()=>{if(red=== 'login__section-bottom-red'){setRed('')}}}
                type="password"
                placeholder="*Confirm Paswword"
                name="pwdC"
              />
            </div>
            <div className="signup__section-bottom">
              <button onClick={()=>{
                if(error){
                  setError(null)
                }
              }} className="signup__section-bottom-t">
                NEXT
                </button>
              <div className="signup__section-bottom-orc">
                <hr className="signup__section-bottom-hr" />
                <p className="signup__section-bottom-p"> or </p>
                <hr className="signup__section-bottom-hr" />
              </div>
              <button className="signup__section-bottom-t">
                SIGN UP WITH GOOGLE
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
