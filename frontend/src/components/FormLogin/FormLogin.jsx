import React, { useState } from "react";
import { Form, Button, Divider, Message } from "semantic-ui-react";
import RegisterSocial from "../RegisterSocial/RegisterSocial";
import ValidationData from "../../methods/ValidationData.js";
import axios from "axios";

const FormLogin = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(null);

  const [password, setPassword] = useState("");

  const handleChangeInput = (e) => {
    let id = e.currentTarget.id;
    switch (id) {
      case "username":
        if (error) {
          setError(null);
        }
        if (usernameError) {
          setUsernameError(null);
        }
        setUsername(e.currentTarget.value);
        break;
      case "password":
        if (error) {
          setError(null);
        }
        setPassword(e.currentTarget.value);
        break;
      default:
        break;
    }
  };
  const handleSumbit = () => {
    let login = true;
    //initialation of errors if it gonna be the second time of submit
    if (!usernameError) setUsernameError(null);
    //validate inputs
    const errors = ValidationData({
      username,
      password,
      login,
    });

    if (errors.length > 0) {
      //*there is erros
      errors.map((error) => {
        switch (error.id) {
          case "username":
            setUsernameError(error.error);
            break;
          default:
            break;
        }
        return true;
      });
    } else {
      //*there is no erros => fetch api
      //? post request
      setLoading(true);
      axios.get("http://localhost:3000/users").then((res) => {
        const result = res.data.filter(
          (user) => user.username === username && user.password === password
        );
        if (result.length <= 0) {
          setError(true);
        }
        setLoading(false);
      });
    }
  };

  return (
    <>
      <RegisterSocial type="Login" />
      <Divider className="_margin_vertical" horizontal>
        or
      </Divider>
      <div className="_register_container">
        <Form error={error}>
          <Form.Input
            error={usernameError}
            fluid
            placeholder="Username"
            id="username"
            type="text"
            value={username}
            onChange={handleChangeInput}
          />

          <Form.Input
            error={null}
            fluid
            placeholder="password"
            id="password"
            type="password"
            value={password}
            onChange={handleChangeInput}
          />
          <Message error content="Incorrect username or password." />
          <div className="flex flex-col">
            <Button
              loading={loading}
              className="_margin_vertical_sm _primary_button shadow border-radius-sm pointer"
              onClick={handleSumbit}
              type="submit"
            >
              Login
            </Button>
            <a href="/register" className="underline default-color">
              i don't have an account
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

export default FormLogin;
