import Layout from "components/common/Layout/Layout";
import { StrictMode } from "react";
import reportWebVitals from "utils/reportWebVitals";

const Index = () => {
  return (
    <StrictMode>
      <Layout>
        <h1>NEXTJS FIREBASE KRIT B.</h1>
      </Layout>
    </StrictMode>
  );
};

Index.getInitialProps = async function () {
  return { sample: "test data" };
};
reportWebVitals();
export default Index;
