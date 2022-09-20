import { useState, useEffect } from "react";
import { loginUser } from "../api/serverAuth";

const Login = ({ isAuthorized }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (isReady) {
      loginUser(formData);
      setIsReady(false);
    }
  }, [isReady, formData, isAuthorized]);

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsReady(true);
    window.location.reload();
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder="Enter your email"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            placeholder="Enter your password"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
};

export default Login;
