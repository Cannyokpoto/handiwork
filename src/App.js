import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home";
import NoPage from "./Pages/NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./Components/GlobalStyles/GlobalStyles";
import MarketPlace from "./Pages/MarketPlace";


function App() {
    return (
      <div className="App">
        <GlobalStyles />
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/market-place" element={<MarketPlace />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
      </div>
    );
  }
  
  export default App;