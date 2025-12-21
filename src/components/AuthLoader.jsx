import React, { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { loadSessionThunk } from "../store/authSlice";

const AuthLoader = ({ children }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((s) => s.auth);

  useEffect(() => {
    dispatch(loadSessionThunk());
  }, [dispatch]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#7B3F00" />
      </View>
    );
  }

  return children || null;
};

export default AuthLoader;
