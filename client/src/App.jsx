import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Music } from "./pages";
import { Footer, Header, Loading, Menu, Player } from "./components";
import { useRef } from "react";

const App = () => {
  let menuRef = useRef();
  return (
    <section className="Main">
      {false && <Loading />}

      <Menu ref={menuRef} />

      <Header menuRef={menuRef} />

      <div className="page">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/artist" element={<Music isArtist />} />
        </Routes>
        <Footer />
      </div>

      <Player />
    </section>
  );
};

export default App;
