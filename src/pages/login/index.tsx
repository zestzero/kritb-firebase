import Layout from "components/common/Layout/Layout";
import LoginPage from "containers/LoginPage/LoginPage";
import { StrictMode } from "react";
import { GetServerSideProps } from 'next';

interface Props {
  sample: string;
}

const Login = ({ sample }: Props) => {
  return (
    <StrictMode>
      <Layout>
        <LoginPage />
      </Layout>
    </StrictMode>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      sample: process.env.SITE_NAME,
    },
  };
};

export default Login;
