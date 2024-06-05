import "./Login.scss";
import axios from "axios";
// import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({setToken}) {
  const [red, setRed] = useState('')
  const nav = useNavigate()
  const submitHandler = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.pwd.value;

    if(!email || !password){
       setRed('login__section-bottom-red')
       return
    }

    const {data} = await axios.post(`${import.meta.env.VITE_LOCALHOST}login`, {email, password})
    const {token} = data

    localStorage.setItem('token', token)
    setToken(token)
    nav('/')
  };
  return (
    <>
      <main className="login">
        <div className="login__back">
          <Link to={"/"} className="login__back-link">
            <h4 className="login__back-t">BACK</h4>
          </Link>
        </div>
        <section className="login__section">
          <h2 className="login__section-h2">Welcome back!</h2>
          <form className="login__section-form" onSubmit={submitHandler}>
            <div className={`${red} login__section-top`} >
              <input
                className={`${red} login__section-top-i`}
                onClick={()=>{if(red=== 'login__section-bottom-red'){setRed('')}}}
                type="email"
                placeholder="*Email"
                name="email"
              />
              <input
                className={`${red} login__section-top-i`}
                onClick={()=>{if(red=== 'login__section-bottom-red'){setRed('')}}}
                type="password"
                placeholder="*Password"
                name="pwd"
              />
            </div>
            <div className="login__section-bottom">
              <button className="login__section-bottom-t">LOG IN</button>
              <div className="login__section-bottom-orc">
                <hr className="login__section-bottom-hr" />
                <p className="login__section-bottom-p"> or </p>
                <hr className="login__section-bottom-hr" />
              </div>
              <button className="login__section-bottom-t">
                LOG IN WITH GOOGLE
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
