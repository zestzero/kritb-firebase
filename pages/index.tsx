import React from "react";
import App from "../src/App";
import reportWebVitals from '../src/reportWebVitals';

const Index = ({ sample }) => {
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
