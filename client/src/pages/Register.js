import { useState, useEffect } from "react";
import { registerUser } from "../api/serverAuth";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [authData, setAuthData] = useState({});
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (isReady) {
      registerUser(formData).then((data) => setAuthData(data));
    }
  }, [isReady, formData]);

  console.log(authData);

  const { name, email, password, confirmPassword } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      setIsReady(true);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            placeholder="Enter your name"
            onChange={onChange}
          />
        </div>
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
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm password"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
};

export default Register;
