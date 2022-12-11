import React, { useState } from "react";
import { useEffect } from "react";
import "../assets/css/style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

function Register() {
  const [nama, setNama] = useState("");
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
    if (nama === "") {
      toast.error("Nama is required");
      return;
    }
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
        nama,
      };
      try {
        await axios.post(
          `${process.env.REACT_APP_API_PENDUDUK}/auth/register`,
          data
        );
        toast.success("Berhasil Register");
        navigate("/login");
        return true;
      } catch (err) {
        alert("error");
      }
    }
  };

  return (
    <>
      <section class="h-100 gradient-form ">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-800">
            <div class="col-xl-6">
              <div class="card bg- rounded-5 text-black">
                <div class="row g-0">
                  <div class="col-lg-12">
                    <div class="card-body p-md-5 mx-md-4">
                      <div class="text-center">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Seal_of_the_Ministry_of_Internal_Affairs_of_the_Republic_of_Indonesia_%282020_version%29.svg/1200px-Seal_of_the_Ministry_of_Internal_Affairs_of_the_Republic_of_Indonesia_%282020_version%29.svg.png"
                          width="120"
                          alt="logo"
                        />
                        <h4 class="mt-1 mb-5 pb-1">SIGN UP</h4>
                      </div>
                      <form onSubmit={handleSubmit}>
                        <div class="form-outline mb-4">
                          <label class="form-label" for="form2Example11">
                            Username
                          </label>
                          <input
                            type="text"
                            id="form2Example11"
                            class="form-control"
                            placeholder="Nama Lengkap"
                            onChange={(e) => setNama(e.target.value)}
                          />
                        </div>

                        <div class="form-outline mb-4">
                          <label class="form-label" for="form2Example11">
                            Email
                          </label>
                          <input
                            type="email"
                            id="form2Example11"
                            class="form-control"
                            placeholder="Phone number or email address"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>

                        <div class="form-outline mb-4">
                          <label class="form-label" for="form2Example22">
                            Password
                          </label>
                          <input
                            type="password"
                            id="form2Example22"
                            class="form-control"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>

                        <div class="text-center pt-1 mb-5 pb-1">
                          <button
                            class="btn btn-dark btn-block fa-lg  mb-3 mx-3"
                            type="submit"
                          >
                            Sign In
                          </button>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              navigate("/login");
                            }}
                            type="submit"
                            class="btn btn-danger btn-block fa-lg mb-3 mx-3"
                          >
                            Back
                          </button>
                        </div>
                      </form>
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

export default Register;
