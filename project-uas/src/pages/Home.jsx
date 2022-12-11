import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const getToken = localStorage.getItem("token");
    setToken(getToken);
  }, []);
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/login");
  };
  return (
    <React.Fragment>
      <div className="text-center">
        <h1 className="text-center text-danger"> WELCOME</h1>
        <button className="text-center btn btn-danger" onClick={logout}>
          logout
        </button>
      </div>
    </React.Fragment>
  );
}

export default Home;
