import Layout from "components/Layout/Layout";
import LoginPage from "containers/LoginPage/LoginPage";
import { StrictMode } from "react";

const Login = () => {
  return (
    <StrictMode>
      <Layout>
        <LoginPage />
      </Layout>
    </StrictMode>
  );
};

Login.getInitialProps = async function () {
  return { sample: "test data" };
};

export default Login;
