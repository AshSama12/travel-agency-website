import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import RegistrationHome from './components/Registration/RegistrationHome';
import Registration1 from './components/Registration/Registration1';
import Registration2 from './components/Registration/Registration2'; // Import Registration2
import Logout from './components/LogOut/Logout';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation bar */}
        <header className="App-header">
          <nav className="nav">
            <Link className="nav-item" to="/">Home</Link>
            <Link className="nav-item" to="/signin">Sign In</Link>
            <Link className="nav-item" to="/signup">Sign Up</Link>
            <Link className="nav-item" to="/registration">Registration</Link>
            <Link className="nav-item" to="/logout">Logout</Link>
          </nav>
        </header>

        {/* Main content */}
        <main className="App-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/registration" element={<RegistrationHome />} />
            <Route path="/registration1" element={<Registration1 />} />
            <Route path="/registration2" element={<Registration2 />} /> {/* Add Registration2 */}
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="App-footer">
          <p>© 2024 Vista Lanka. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
