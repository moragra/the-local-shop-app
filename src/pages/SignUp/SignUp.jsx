import "./SignUp.scss";
import { Link } from "react-router-dom";
import { api } from '../../utils/axios'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [signed, setSigned] = useState(false);
  const [error, setError] = useState("");
  const [red, setRed] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors

    const form = e.target;
    const formData = {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
    };

    if(!formData.name || !formData.email || !formData.password){
      setRed('login__section-bottom-red')
       return
    }

    if(formData.password !== form.confirmPassword.value){
      setRed('login__section-bottom-red')
       return
    }

    try {
      const response = await api.post("/signup", formData);
      if (response.status === 201) {
        navigate("/");
      }
    } catch (error) {
      console.error("Signup error:", error);
      setError(error.response?.data?.error || "Error creating account");
    }
  };

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
            Welcome to NeighborGood. Create your account.
          </h3>
          <form className="signup__section-form" onSubmit={handleSubmit}>
            <div className={`${red} signup__section-top`}>
              <input
                className={`${red} signup__section-top-i`}
                onClick={()=>{if(red=== 'login__section-bottom-red'){setRed('')}}}
                type="text"
                placeholder="*Name"
                name="name"
                required
              />
              <input
                className={`${red} signup__section-top-i`}
                onClick={()=>{if(red=== 'login__section-bottom-red'){setRed('')}}}
                type="email"
                placeholder="*Email"
                name="email"
                required
              />
              <input
                className={`${red} signup__section-top-i`}
                onClick={()=>{if(red=== 'login__section-bottom-red'){setRed('')}}}
                type="password"
                placeholder="*Password"
                name="password"
                required
              />
              <input
                className={`${red} signup__section-top-i`}
                onClick={()=>{if(red=== 'login__section-bottom-red'){setRed('')}}}
                type="password"
                placeholder="*Confirm Paswword"
                name="confirmPassword"
                required
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
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
