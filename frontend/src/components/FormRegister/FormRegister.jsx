import React from "react";
import {
  Form,
  Button,
  Grid,
  GridRow,
  GridColumn,
  Divider,
  Item,
  Icon,
  Container,
} from "semantic-ui-react";
import "./FormRegister.css";

const FormRegister = () => (
  <>
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
                        Sign up using Facebook
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
                        Sign up using Google
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
    <Divider className="_margin_vertical" horizontal>
      or
    </Divider>
    <div className="_register_container ">
      <Form>
        <Form.Input error={null} fluid placeholder="Username" id="username" />
        <Form.Input error={null} fluid placeholder="Full name" id="full-name" />
        <Form.Input
          error={null}
          fluid
          placeholder="E-mail address"
          id="email"
        />
        <Form.Input error={null} fluid placeholder="password" id="password" />
        <Form.Input
          error={null}
          fluid
          placeholder="confirm password"
          id="confirm-password"
        />
        <div className="flex flex-col">
          <Button
            className="_margin_vertical_xs _primary_button shadow border-radius-sm pointer"
            type="submit"
          >
            Sign up
          </Button>
          <a href="/login" className="underline default-color">
            Already have an account?
          </a>
          <a href="/questions" className="underline default-color">
            Need help ?
          </a>
        </div>
      </Form>
    </div>
  </>
);

export default FormRegister;
