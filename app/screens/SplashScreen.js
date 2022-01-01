import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { autoLoginAsync, getFromAsyncStorage } from "../features/authSlice";
import LoadingScreen from "./LoadingScreen";

const SplashScreen = ({ setIsLoading }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = await getFromAsyncStorage("token");
        if (!token) {
          setIsLoading(false);
          return;
        }

        await dispatch(autoLoginAsync(token));
      } catch (error) {
        console.log(`Login error: ${error.response.data}`);
      }
      setIsLoading(false);
    };

    fetchUser();
  }, [dispatch, setIsLoading]);

  return <LoadingScreen />;
};

export default SplashScreen;
