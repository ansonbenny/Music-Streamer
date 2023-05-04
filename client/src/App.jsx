import React, { Fragment, useLayoutEffect, useReducer } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Account, Error, Home, Library, Music, Search } from "./pages";
import {
  Auth,
  Footer,
  Header,
  LibraryModal,
  Loading,
  Menu,
  Player,
} from "./components";
import { useRef } from "react";
import { useSelector } from "react-redux";
import "./app.scss";

const reducer = (state, dispatch) => {
  switch (dispatch?.type ? dispatch.type : null) {
    case "login":
      return { login: true, modal: true };
    case "signup":
      return { signup: true, modal: true };
    case "forgot":
      return { forgot: true, modal: true };
    default: {
      return { modal: false };
    }
  }
};

const App = () => {
  let menuRef = useRef();

  const location = useLocation();

  const { library } = useSelector((state) => state);

  const [stateModal, modalDispatch] = useReducer(reducer, {
    modal: false,
  });

  useLayoutEffect(() => {
    menuRef?.current?.themeSwitch();
  }, [location]);

  return (
    <Fragment>
      {
        // Loading Screen
        false && <Loading />
      }

      {
        // for login signup forgot
        stateModal?.modal && (
          <Auth stateModal={stateModal} modalDispatch={modalDispatch} />
        )
      }

      {
        // for library playlist add delete edit
        library["modal"]?.status && <LibraryModal />
      }

      <Menu ref={menuRef} modalDispatch={modalDispatch} />

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
