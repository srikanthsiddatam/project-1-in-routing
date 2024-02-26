import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Contact from "./Contact";
import "./App.css";
const Routing = () => {
  return (
    <>
      

      <div className="Routing-main">
        <BrowserRouter>
          
          <div className="link-main1">
            <div className="link-main">
              
                
                  <Link to="/Home"> <button className="link-sub">Home</button></Link>
                

                
                  <Link to="/Contact"> <button className="link-sub">Contact</button></Link>
                
                
                  <Link to="/About"> <button className="link-sub">About</button></Link>
                
                
                  <Link to="/Login"><button className="link-sub">Login</button></Link>
                
              
            </div>
          </div>

          <div className="route-sub">
            <Routes>
              <Route
                path="/Home"
                element={
                  <div className="routing-text">
                    <Home />
                  </div>
                }
              />

              <Route
                path="/About"
                element={
                  <div className="routing-text">
                    <About />
                  </div>
                }
              />
              <Route
                path="/Login"
                element={
                  <div className="routing-text">
                    <Login />
                  </div>
                }
              />
              <Route
                path="/Contact"
                element={
                  <div className="routing-text">
                    <Contact />
                  </div>
                }
              />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
};
export default Routing;
