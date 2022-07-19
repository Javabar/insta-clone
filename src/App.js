import { useState } from "react";
// styles
import { TheApp, Content } from "./css/App.styled";
import HeaderBanner from "./components/Header";
import Navbar from "./components/Navbar";
import FooterBanner from "./components/Footer";
// router dom
import { BrowserRouter, Route, Routes } from "react-router-dom";
// pages for router dom
import Home from "./pages/Home";
import Photos from "./pages/Photos";

const App = ({ setter }) => {
  const [user, setUser] = useState([]);

  return (
    // all is flexed
    <TheApp>
      <HeaderBanner />
      <BrowserRouter>
        <Navbar />
        <Content>
          <Routes>
            <Route path="/" element={<Home user={user} setUser={setUser} />} />
            <Route
              path="/Photos"
              element={<Photos user={user} setter={setter} />}
            />
          </Routes>
        </Content>
        <FooterBanner />
      </BrowserRouter>
    </TheApp>
  );
};

export default App;