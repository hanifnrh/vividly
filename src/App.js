import React from "react";
import { NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// Pages
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import DetailPage from "./pages/DetailPage";
import LandingPage from "./pages/LandingPage";
import ProfilePage from "./pages/ProfilePage";
import VideoDetail from "./pages/VideoDetail";
// Components
import { HiHome } from 'react-icons/hi';

import "./App.css";
import About from "./pages/AboutPage";
import Channel from "./pages/Channel";
import ChannelVideo from "./pages/ChannelVideo";
function App() {
  return (
    <Router>
      <header>
        <div className="logo-wrapper">
          <a href="/"><img src="https://pbs.twimg.com/media/F-uDiRFb0AAu8Uf?format=png&name=360x360" alt="Logo"></img>
            <h3>Vividly.</h3></a>
        </div>

        <div className="link-wrapper">
          <NavLink to="/" className="iconWrapper">
            <HiHome style={{ fontSize: '2rem' }} className="icon" />
          </NavLink>

          <NavLink to="/channel" className="iconWrapper">
            <SubscriptionsIcon style={{ fontSize: '2rem' }} className="icon" />
          </NavLink>

          <NavLink to="/about" className="iconWrapper">
            <ImportContactsIcon style={{ fontSize: '2rem' }} className="icon" />
          </NavLink>

          <NavLink to="/profile" className="iconWrapper">
            <AccountCircleIcon style={{ fontSize: '2rem' }} className="icon" />
          </NavLink>

        </div>

      </header>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/channel" element={<Channel />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/channel-video/:id" element={<ChannelVideo />} />
          <Route path="/video/:videoId" component={VideoDetail} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
