import "./App.css";
import React, { useState } from "react";
import Navbar from "./component/Navbar";
import { TextForm } from "./component/TextForm";
import AboutUs from "./component/AboutUs";
import Alert from "./component/Alert";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // default background color of navbar

  // alert message as alert function
  const [message, setMessage] = useState(null);
  const showMessage = (message, type) => {
    setMessage({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      // light is a boostrap class so we are passing here it as string literals
      setMode("dark"); // dark also class of boostrap
      document.body.style.backgroundColor = "#042743";
      showMessage("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showMessage("Light mode has been enabled", "success");
    }
  };

  return (
    <BrowserRouter>
      <Navbar title="NanduChopade" mode={mode} toggleMode={toggleMode} />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Alert message={message} />
              <TextForm showMessage={showMessage} mode={mode} />
              {/* Use <Outlet> to render nested routes */}
              <Outlet />
            </div>
          }
        />
        <Route path="/about" element={<AboutUs mode={mode} />} />
        {/* <Route path="/textform" element={} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
