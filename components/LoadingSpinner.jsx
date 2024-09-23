import React from "react";
import Spinner from "react-native-loading-spinner-overlay";

const LoadingSpinner = ({
  isLoading,
  textLabel = "default",
  customText = "Loading...",
}) => {
  return (
    <Spinner
      visible={isLoading}
      textContent={
        textLabel === "register" ? "Creating you account..." : customText
      }
      textStyle={{ color: "white" }}
      animation="fade"
    />
  );
};

export default LoadingSpinner;
