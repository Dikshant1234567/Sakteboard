import React from "react";
import Header from "./components/Header.jsx";
import Menu from "./components/Menu.jsx";
import "./App.css";
import Discover from "./components/Discover.jsx";
import Trending from "./components/Trending.jsx";
import Common from "./components/Common.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Streaming from "./components/Streaming.jsx";
import PlayList from "./components/PlayList.jsx";
import Bookmark from "./components/Bookmark.jsx";
import LiveStreaming from "./components/LiveStreaming.jsx";
import Competition from "./components/Competition.jsx";
import Tuitorial from "./components/Tuitorial.jsx";
import Community from "./components/Community.jsx";

function App() {
  return (
    <>
      <div className="page">
        <Menu />
        <div>
          <Header />
            <Routes>
              <Route exact path="/" element={<Discover />} />
              <Route exact path="/trending" element={<Trending />} />
              <Route exact path="/streaming" element={<Streaming />} />
              <Route exact path="/playList" element={<PlayList />} />
              <Route exact path="/bookmark" element={<Bookmark />} />
              <Route exact path="/livestream" element={<LiveStreaming />} />
              <Route exact path="/competition" element={<Competition />} />
              <Route exact path="/tutorial" element={<Tuitorial />} />
              <Route exact path="/community" element={<Community />} />
            </Routes>
          
        </div>
      </div>
    </>
  );
}

export default App;
