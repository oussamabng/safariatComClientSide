import React from "react";
//?import components
import FormLogin from "../../components/FormLogin/FormLogin.jsx";
//*import css
import { Container, Grid, GridRow, GridColumn } from "semantic-ui-react";
const Login = () => {
  return (
    <Container fluid style={{ height: "100vh" }}>
      <Grid columns="equal" style={{ height: "100%" }}>
        <GridRow style={{ paddingBottom: 0 }}>
          <GridColumn className="_register_photo">
            <div className="register_cover"></div>
          </GridColumn>
          <GridColumn>
            <FormLogin />
          </GridColumn>
        </GridRow>
      </Grid>
    </Container>
  );
};
export default Login;
