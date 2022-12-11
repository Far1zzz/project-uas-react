import React, { useState } from "react";
import { useEffect } from "react";
import "../assets/css/style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const getToken = localStorage.getItem("token");
    setToken(getToken);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      toast.error("Email is required");
      return;
    }
    if (password === "") {
      toast.error("Password is required");
      return;
    }
    if (email !== "" && password !== "") {
      const data = {
        email,
        password,
      };
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          `${process.env.REACT_APP_API_PENDUDUK}/auth/login`,
          data,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          setToken(response.data.token);
          navigate("/");
        }
      } catch (err) {
        toast.error("error");
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };
  return (
    <>
      <section className="h-100 gradient-form">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-800">
            <div className="col-xl-6">
              <div className="card bg-dark rounded-4 text-black">
                <div className="row g-0">
                  <div className="col-lg-12">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <img
                          src="https://dukcapil.kemendagri.go.id/images/logo.png"
                          width="400"
                          alt="logo"
                        />
                        <h4 className="text-white mt-1 mb-5 pb-1">
                          Login Panel
                        </h4>
                      </div>

                      {!token ? (
                        <form onSubmit={handleSubmit}>
                          <div className="form-outline mb-4">
                            <label
                              className="text-white form-label"
                              for="form2Example11"
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              id="form2Example11"
                              className="form-control"
                              placeholder="YourEmail@example.com"
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>

                          <div className="form-outline mb-4">
                            <label
                              className="form-label text-white"
                              for="form2Example22"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              id="form2Example22"
                              className="form-control"
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>

                          <div className="text-center pt-1 mb-5 pb-1">
                            <button
                              className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                              type="submit"
                            >
                              Log in
                            </button>
                          </div>

                          <div className="d-flex align-items-center justify-content-center pb-4">
                            <p className="text-white mb-0 me-2">
                              Don't have an account?
                            </p>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                navigate("/register");
                              }}
                              type="submit"
                              className="btn btn-outline-danger"
                            >
                              Sign Up
                            </button>
                          </div>
                        </form>
                      ) : (
                        <>
                          <button
                            onClick={handleLogout}
                            className="btn btn-danger"
                          >
                            Log Out
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
