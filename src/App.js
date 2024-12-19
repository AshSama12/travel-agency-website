import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/NavBar/Nav'; // Import NavBar
import Footer from './components/Footer/Footer'; // Import Footer
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import RegistrationHome from './components/Registration/RegistrationHome';
import Registration1 from './components/Registration/Registration1';
import Registration2 from './components/Registration/Registration2';
import Registration3 from './components/Registration/Registration3';
import Logout from './components/LogOut/Logout';
import Booking from './components/Bookings/Booking';
import Search from './components/Search/Search'; // Import Search

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <Nav />

        {/* Main Content */}
        <main className="App-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/registration" element={<RegistrationHome />} />
            <Route path="/registration1" element={<Registration1 />} />
            <Route path="/registration2" element={<Registration2 />} />
            <Route path="/registration3" element={<Registration3 />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/search" element={<Search />} /> {/* Search route */}
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
