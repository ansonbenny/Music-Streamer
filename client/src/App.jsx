import React, { Fragment, useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import {
  Account,
  Error,
  Home,
  Library,
  Music,
  Search,
  Verification,
} from "./pages";
import { Footer, Header, LibraryModal, Loading, Menu } from "./components";
import { Auth, Player } from "./features";
import { useRef } from "react";
import { useSelector } from "react-redux";
import ProtectedRoute from "./utils/ProtectedRoute";
import "./app.scss";

const App = () => {
  let menuRef = useRef();

  const location = useLocation();

  const { library, additional, auth } = useSelector((state) => state);

  useLayoutEffect(() => {
    // for theme
    menuRef?.current?.themeSwitch();
  }, [location]);

  return (
    <Fragment>
      {
        // Loading Screen
        additional?.loading ? <Loading /> : null
      }

      {
        // for login signup forgot
        auth && <Auth />
      }

      {
        // for library playlist add delete edit
        library["modal"]?.status && <LibraryModal />
      }

      <Menu ref={menuRef} />

      <Header menuRef={menuRef} />

      <div className="page">
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route exact path="/" element={<Home />} />
            <Route path="/music" element={<Music />} />
            <Route path="/artist" element={<Music isArtist />} />
            <Route path="/search" element={<Search />} />
            <Route
              path="/register/pending/:userId/:secret"
              element={<Verification isRegister />}
            />
            <Route
              path="/forgot/pending/:userId/:secret"
              element={<Verification />}
            />
          </Route>
          <Route element={<ProtectedRoute isAuth />}>
            <Route path="/library" element={<Library />} />
            <Route path="/account" element={<Account />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </div>

      <Footer />

      <Player />
    </Fragment>
  );
};

export default App;
