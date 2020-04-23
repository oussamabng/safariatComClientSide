import React from "react";
//?import components
import FormRegister from "../../components/FormRegister/FormRegister.jsx";
//*import css
import "./Register.css";
import { Container, Grid, GridRow, GridColumn } from "semantic-ui-react";
const Register = () => {
  return (
    <Container fluid style={{ height: "100vh" }}>
      <Grid columns="equal" style={{ height: "100%" }}>
        <GridRow style={{ paddingBottom: 0 }}>
          <GridColumn className="_register_photo">
            <div className="register_cover"></div>
          </GridColumn>
          <GridColumn>
            <FormRegister />
          </GridColumn>
        </GridRow>
      </Grid>
    </Container>
  );
};
export default Register;
