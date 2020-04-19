import React from "react";
//?import components
import FormRegister from "../../components/FormRegister/FormRegister.jsx";
import Header from "../../components/Header/Header.jsx";
//*import css
import { Container, Grid, GridRow, GridColumn } from "semantic-ui-react";
const Register = () => {
  return (
    <Container fluid>
      <Grid columns="equal">
        <GridRow>
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
