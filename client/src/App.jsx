import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { Account, Error, Home, Library, Music, Search } from "./pages";
import { Footer, Header, Loading, Menu, Player } from "./components";
import { useRef } from "react";
import "./app.scss";

const App = () => {
  let menuRef = useRef();
  return (
    <Fragment>
      {
        false && <Loading />
        // Loading Screen
      }

      <Menu ref={menuRef} />

      <Header menuRef={menuRef} />

      <div className="page">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/artist" element={<Music isArtist />} />
          <Route path="/library" element={<Library />} />
          <Route path="/search" element={<Search />} />
          <Route path="/account" element={<Account />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>

      <Footer />

      <Player />
    </Fragment>
  );
};

export default App;
