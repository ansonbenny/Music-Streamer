import React, { Fragment, useEffect, useLayoutEffect, useState } from "react";
import {
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
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
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "./redux/additional";
import { setUser } from "./redux/user";
import instance from "./lib/axios";
import axios from "axios";
import "./app.scss";

const ProtectedRoute = ({ isAuth, isAll }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { user, additional } = useSelector((state) => state);

  const [customErr, setCustomErr] = useState(null);

  useEffect(() => {
    setCustomErr(null);
    dispatch(setLoading({ api: true, site: true }));

    const cancelToken = axios.CancelToken.source();

    (async () => {
      let response;

      try {
        response = await instance.get("/user/checkLogged", {
          cancelToken: cancelToken.token,
        });
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Cancelled");
        } else if (err?.response?.data?.status === 405) {
          console.log("User Not Logged");
          dispatch(setUser(null));
          if (isAuth) {
            navigate("/");
          }
        } else {
          console.log(err);
          setCustomErr({
            status: err?.response?.status || 500,
            statusText: err?.response?.statusText || "Something went wrong",
          });
        }
        dispatch(setLoading({ api: false, site: true }));
      } finally {
        console.log(response?.data);
        if (response?.["data"]?.data) {
          dispatch(setUser(response["data"].data));

          if (!isAll && !isAuth) {
            navigate("/");
          }
        }
      }
    })();

    return () => {
      cancelToken.cancel();
    };
  }, []);

  return !additional?.loading?.api ? (
    customErr ? (
      <Error customErr={customErr} />
    ) : user ? (
      isAll || isAuth ? (
        <Outlet />
      ) : null
    ) : (
      !isAuth && <Outlet />
    )
  ) : null;
};

const App = () => {
  let menuRef = useRef();

  const location = useLocation();

  const { library, additional, auth } = useSelector((state) => state);

  useLayoutEffect(() => {
    menuRef?.current?.themeSwitch();
  }, [location]);

  return (
    <Fragment>
      {
        // Loading Screen
        additional?.loading?.site && <Loading />
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
          <Route element={<ProtectedRoute isAll />}>
            <Route exact path="/" element={<Home />} />
            <Route path="/music" element={<Music />} />
            <Route path="/artist" element={<Music isArtist />} />
            <Route path="/search" element={<Search />} />
          </Route>
          <Route element={<ProtectedRoute />}>
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
