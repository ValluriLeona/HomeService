import axios from "axios";
import "./style.css";

function Login({ store }) {
  function Fun1(event) {
    event.preventDefault();
    const email = document.getElementById("usr").value;
    const password = document.getElementById("pwd").value;
    console.log({ email, password });

    axios.post("http://localhost:8081/auth/check", { email, password })
      .then((res) => {
        if (res.data.role !== 0) {
          localStorage.setItem("un", res.data.name);
          localStorage.setItem("role", res.data.role);
          store.dispatch({ type: "page", data: "Electronics" });
        } else {
          alert("Login Failed, Retry or Signup");
        }
      });
  }

  function Mover() {
    document.getElementById("f1").className = "mover-form";
  }

  function Mleave() {
    document.getElementsByName("nf1")[0].className = "login-form";
  }

  return (
    <div className="signin-container">
      <div className="left-panel">
        <div>
          <h1>Welcome Back!</h1>
          <p>Login to continue your journey</p>
        </div>
      </div>
      <div className="right-panel">
        <form id="f1" name="nf1" className="login-form" onMouseOver={Mover} onMouseLeave={Mleave}>
          <div className="form-card">
            <h3>Login</h3>
            <div className="form-group">
              <label htmlFor="usr">Email</label>
              <input type="email" id="usr" required />
            </div>
            <div className="form-group">
              <label htmlFor="pwd">Password</label>
              <input type="password" id="pwd" required />
            </div>
            <button className="signin-btn" onClick={Fun1}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
