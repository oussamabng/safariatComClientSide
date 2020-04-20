import React from "react";
import {
  Grid,
  GridColumn,
  GridRow,
  Item,
  Container,
  Icon,
} from "semantic-ui-react";

const RegisterSocial = (props) => {
  const { type } = props;
  return (
    <div className="flex flex-col _form_register">
      <Grid columns={1} textAlign="center">
        <GridRow>
          <GridColumn>
            <p className="title black-txt">Welcome to our platform</p>
          </GridColumn>
        </GridRow>
      </Grid>
      <Container className="_margin_vertical_xs mobile" fuild>
        <Grid columns="equal" className="_register_social">
          <GridRow>
            <GridColumn>
              <div className="_register_other active pointer">
                <Item.Group className="_register_facebook">
                  <Item>
                    <Icon name="facebook f" />
                    <Item.Content
                      className="_padding_other"
                      verticalAlign="middle"
                    >
                      <p className="small _padding_other">
                        {type} using Facebook
                      </p>
                    </Item.Content>
                  </Item>
                </Item.Group>
              </div>
            </GridColumn>
            <GridColumn>
              <div className="_register_other pointer">
                <Item.Group className="_register_google">
                  <Item>
                    <Icon name="google plus g" />
                    <Item.Content
                      className="_padding_other"
                      verticalAlign="middle"
                    >
                      <p className="small _padding_other">
                        {type} using Google
                      </p>
                    </Item.Content>
                  </Item>
                </Item.Group>
              </div>
            </GridColumn>
          </GridRow>
        </Grid>
        <div className="_register_social mobile">
          <div className="item _register_facebook">
            <Icon name="facebook f" />
            <p>Login using Facebook</p>
          </div>
          <div className="item _register_google">
            <Icon name="google plus g" />
            <p className="_padding_other">Login using Google</p>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default RegisterSocial;
