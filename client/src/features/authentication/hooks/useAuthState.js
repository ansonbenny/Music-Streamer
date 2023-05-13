import { useState } from "react";

const useAuthState = () => {
  const [state, _setState] = useState({
    mail: false,
    form: {},
  });

  const setState = (e) => {
    if (typeof e === "function") {
      _setState((state) => e(state));
    } else if (typeof e === "object") {
      if (e?.target?.name === "email") {
        _setState((state) => ({
          ...state,
          form: {
            ...state.form,
            google: undefined,
            [e?.target?.name]: e?.target?.value || "",
          },
        }));
      } else {
        _setState((state) => ({
          ...state,
          form: {
            ...state.form,
            [e?.target?.name]: e?.target?.value || "",
          },
        }));
      }
    }
  };
  return [state, setState];
};

export default useAuthState;
