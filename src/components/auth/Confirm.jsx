import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { startLogin } from "../../store/slices/auth/authThunk";

export const Confirm = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const query = () => {
    return new URLSearchParams(location.search);
  };

  const code = query().get("code");
  console.log(code);

  useEffect(() => {
    if (code) {
      dispatch(startLogin({ code }));
    }
  }, [code, dispatch]);

  return (
    <div>
      <h1>Confirm</h1>
    </div>
  );
};
