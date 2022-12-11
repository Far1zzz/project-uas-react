import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Protected from "./components/security/Protected";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/Navbar";
import Profil from "./pages/Profil";
import Input from "./pages/InputData";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profil />} />
          <Route path="/Inputdata" element={<Input />} />
        </Route>
      </Routes>
      <Footer />
      <ToastContainer theme="dark" position="top-center" />
    </BrowserRouter>

    /* <Route
          path="/"
          element={
            <Protected>
              <Home />
            </Protected>
          }
        /> */
  );
}

export default App;
