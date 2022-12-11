import axios from "axios";
import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Protected({ children, token, setToken }) {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (token) {
        try {
          await axios.get(`${process.env.REACT_APP_API_PENDUDUK}/auth/login`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        } catch (error) {
          if (error.response.status === 401) {
            localStorage.removeItem("token");
            navigate("/login");
          }
        }
      }
    })();
  }, [token, navigate, setToken]);

  // jika tidak ada token kembalikan ke halaman login
  if (!token) {
    return <Navigate to={`/login`} />;
  }

  return children;
}

export default Protected;
