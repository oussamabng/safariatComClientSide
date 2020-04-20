import React from "react";
import { Form, Button, Divider } from "semantic-ui-react";
import RegisterSocial from "../RegisterSocial/RegisterSocial";

const FormLogin = () => (
  <>
    <RegisterSocial type="Login" />
    <Divider className="_margin_vertical" horizontal>
      or
    </Divider>
    <div className="_register_container">
      <Form>
        <Form.Input
          error={null}
          fluid
          placeholder="Username"
          id="username"
          type="text"
          onFocus={() => console.log("qdqsd")}
          onBlur={() => console.log("qdqsd")}
        />

        <Form.Input
          error={null}
          fluid
          placeholder="password"
          id="password"
          type="password"
        />

        <div className="flex flex-col">
          <Button
            className="_margin_vertical_xs _primary_button shadow border-radius-sm pointer"
            type="submit"
          >
            Login
          </Button>
          <a href="/register" className="underline default-color">
            i don't have an account
          </a>
          <a href="/questions" className="underline default-color">
            Need help ?
          </a>
        </div>
      </Form>
    </div>
  </>
);

export default FormLogin;
