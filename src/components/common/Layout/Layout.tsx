import * as React from "react";
import Head from "next/head";

interface Props {
  title?: string;
}

const Layout: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <Head>
        <title>{`KritB${props.title ? ` - ${props.title}` : ""}`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>
      {props.children}
    </React.Fragment>
  );
};

export default Layout;
