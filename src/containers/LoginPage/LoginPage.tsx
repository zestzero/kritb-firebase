import Card from "components/common/Card/Card";
import Button from "components/common/Form/Button/Button";
import Input from "components/common/Form/Input/Input";
import { Grid, GridRow } from "components/common/Grid/Grid";
import React from "react";
import styles from "./LoginPage.module.scss";

const LoginPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Card withBg={true}>
        <h1 className={styles.head}>Login Page</h1>
        <Grid>
          <GridRow ratio={[1]}>
            <Input type="email" placeholder="example@email.com" />
          </GridRow>
          <GridRow ratio={[1]}>
            <Input type="password" placeholder="****" />
          </GridRow>
          <GridRow ratio={[1]}>
            <Button type="primary" text="Login" />
          </GridRow>
        </Grid>
      </Card>
    </div>
  );
};

export default LoginPage;
