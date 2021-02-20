import React from "react";
import App from "../App";
import reportWebVitals from '../reportWebVitals';

const Index = () => {
  return (
    <React.StrictMode>
    <App />
  </React.StrictMode>
  );
};

Index.getInitialProps = async function () {
  return { sample: "test data" };
};
reportWebVitals();
export default Index;
