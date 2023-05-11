import React, {
  Fragment,
  useEffect,
  useLayoutEffect,
  useReducer,
  useState,
} from "react";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import { Account, Error, Home, Library, Music, Search } from "./pages";
import { Footer, Header, LibraryModal, Loading, Menu } from "./components";
import { Auth, Player } from "./features";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "./redux/additional";
import { setUser } from "./redux/user";
import instance from "./lib/axios";
import axios from "axios";
import "./app.scss";

const ProtectedRoute = ({ isAuth }) => {
  const dispatch = useDispatch();

  const [customErr, setCustomErr] = useState(null);

  useEffect(() => {
    setCustomErr(null);
    dispatch(setLoading(true));

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
        } else {
          console.log(err);
          setCustomErr({
            status: err?.response?.status || 500,
            statusText: err?.response?.statusText || "Something went wrong",
          });
        }

        setTimeout(() => {
          dispatch(setLoading(false));
        }, 1000);
      } finally {
        console.log(response?.data);
        if (response?.["data"]?.data) {
        }
      }
    })();

    return () => {
      cancelToken.cancel();
    };
  }, []);

  return customErr ? <Error customErr={customErr} /> : <Outlet />;
};

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

  const { library, additional } = useSelector((state) => state);

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
        additional?.loading && <Loading />
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
          <Route element={<ProtectedRoute />}>
            <Route exact path="/" element={<Home />} />
            <Route path="/music" element={<Music />} />
            <Route path="/artist" element={<Music isArtist />} />
            <Route path="/search" element={<Search />} />
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
