import React, { useEffect, useState } from "react";
import {
  Banner,
  Collections as CollectionsComp,
  LoadMore,
  Row,
} from "../components";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/additional";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import instance from "../lib/axios";
import { setAuth } from "../redux/auth";

const Playlist = ({}) => {
  const location = useLocation();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { id } = useParams();

  const { user } = useSelector((state) => state);

  const [response, setResponse] = useState();

  const loadMoreTracks = async () => {};

  const libraryAction = () => {};

  useEffect(() => {
    document.title = `Musicon - Playlist`;

    const cancelToken = axios.CancelToken.source();

    if (user) {
      setTimeout(() => {
        dispatch(setLoading(false));
      }, 1000);
    } else {
      dispatch(setLoading(true));
    }

    return () => {
      cancelToken.cancel();
    };
  }, [location, user]);

  return (
    <div className="container" id="collections">
      {response?.album ? (
        <Banner
          data={response?.album}
          inLibrary={response?.inLibrary || false}
          libraryAction={libraryAction}
        />
      ) : (
        response?.artist && (
          <Banner
            data={response?.artist}
            inLibrary={response?.inLibrary || false}
            libraryAction={libraryAction}
          />
        )
      )}

      {response?.tracks?.[0] && <CollectionsComp data={response?.tracks} />}

      {response?.tracks?.length < response?.total && (
        <LoadMore onHandle={loadMoreTracks} />
      )}

      {response?.related?.[0] && (
        <Row
          title={isArtist ? "Popular Albums" : "New Releases"}
          data={response?.related}
        />
      )}
    </div>
  );
};

export default Playlist;
