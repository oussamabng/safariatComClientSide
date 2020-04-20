import React, { useState } from "react";
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
import ValidationData from "../../methods/ValidationData.js";

const FormRegister = () => {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(null);

  const [fullname, setFullname] = useState("");
  const [fullnameError, setfullnameError] = useState(null);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);

  //function for changing data in inputs
  const handleChangeInput = (e) => {
    let id = e.currentTarget.id;
    switch (id) {
      case "username":
        if (usernameError) {
          setUsernameError(null);
        }
        setUsername(e.currentTarget.value);
        break;
      case "full-name":
        if (fullnameError) {
          setfullnameError(null);
        }
        setFullname(e.currentTarget.value);
        break;
      case "email":
        if (emailError) {
          setEmailError(null);
        }
        setEmail(e.currentTarget.value);
        break;
      case "password":
        if (passwordError) {
          setPasswordError(null);
        }
        setPassword(e.currentTarget.value);
        break;
      case "confirm-password":
        if (confirmPasswordError) {
          setConfirmPasswordError(null);
        }
        setConfirmPassword(e.currentTarget.value);
        break;
      default:
        break;
    }
  };

  //function called when user submit the form
  const handleSumbit = () => {
    //initialation of errors if it gonna be the second time of submit
    if (!usernameError) setUsernameError(null);
    if (!fullnameError) setfullnameError(null);
    if (!setEmailError) setEmailError(null);
    if (!setPasswordError) setPasswordError(null);
    if (!confirmPasswordError) setConfirmPasswordError(null);

    //validate inputs
    const errors = ValidationData({
      username,
      fullname,
      email,
      password,
      confirmPassword,
    });

    if (errors.length > 0) {
      //*there is erros
      console.log(errors);
      errors.map((error) => {
        switch (error.id) {
          case "username":
            setUsernameError(error.error);
            break;
          case "full-name":
            setfullnameError(error.error);
            break;
          case "email":
            setEmailError(error.error);
            break;
          case "password":
            setPasswordError(error.error);
            break;
          case "confirm-password":
            setConfirmPasswordError(error.error);
            break;
          default:
            break;
        }
        return true;
      });
    } else {
      //*there is no erros
      console.log("no errors");
    }
  };

  return (
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
          <Form.Input
            error={usernameError}
            fluid
            placeholder="Username"
            id="username"
            value={username}
            type="text"
            onChange={handleChangeInput}
          />
          <Form.Input
            error={fullnameError}
            fluid
            placeholder="Full name"
            id="full-name"
            value={fullname}
            onChange={handleChangeInput}
            type="text"
          />
          <Form.Input
            error={emailError}
            fluid
            placeholder="E-mail address"
            id="email"
            value={email}
            onChange={handleChangeInput}
            type="text"
          />
          <Form.Input
            error={passwordError}
            fluid
            placeholder="password"
            id="password"
            value={password}
            onChange={handleChangeInput}
            type="password"
          />
          <Form.Input
            error={confirmPasswordError}
            fluid
            placeholder="confirm password"
            id="confirm-password"
            value={confirmPassword}
            onChange={handleChangeInput}
            type="password"
          />
          <div className="flex flex-col">
            <Button
              className="_margin_vertical_xs _primary_button shadow border-radius-sm pointer"
              onClick={handleSumbit}
            >
              Sign up
            </Button>
            <a href="/login" className="underline default-color ">
              Already have an account?
            </a>
            <a
              href="/questions"
              className="underline default-color _margin_vertical_xs"
            >
              Need help ?
            </a>
          </div>
        </Form>
      </div>
    </>
  );
};

export default FormRegister;
