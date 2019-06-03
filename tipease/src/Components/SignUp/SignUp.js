import React, { useState } from "react";
import styles from "./SignUp.module.scss";
import { Button, Form, Segment, Icon, Radio } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { loginSuccess } from "../../actions";

const SignUp = props => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [rtPassword, setRtPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [type, setType] = useState("users");
  const [service, setService] = useState("");

  return (
    <div className={styles.login}>
      <Segment placeholder className={styles.loginForm}>
        {/* users form */}
        <Form
          style={type === "users" ? { display: "block" } : { display: "none" }}
        >
          <Form.Input
            label="Full Name"
            type="text"
            value={fullName}
            onChange={e => setFullName(e.target.value)}
          />
          <Form.Input
            label="Photo URL"
            type="text"
            value={photoUrl}
            onChange={e => setPhotoUrl(e.target.value)}
          />
          <Form.Input
            label="Username"
            type="text"
            placeholder="Username"
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
          <Form.Input
            label="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Form.Input
            label="Re-type Password"
            type="password"
            value={rtPassword}
            onChange={e => setRtPassword(e.target.value)}
          />

          {/* set type and submit form */}
          <div className={styles.radioBtns}>
            <Form.Field>
              <Radio
                label="Service Worker"
                name="radioGroup"
                value="serviceWorkers"
                checked={type === "serviceWorkers"}
                onChange={e => setType("serviceWorkers")}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label="User"
                name="radioGroup"
                value="users"
                checked={type === "users"}
                onChange={e => setType("users")}
              />
            </Form.Field>
          </div>
          <Button
            onClick={e => {
              const newUser = {
                fullName: fullName,
                password: password,
                photoUrl: photoUrl,
                username: userName
              };
              if (rtPassword === password) {
                axios
                  .post(
                    "https://buildtipease.herokuapp.com/auth/users/register",
                    newUser
                  )
                  .then(res => {
                    props.history.push("/home/login");
                  })
                  .catch(err => console.log(err));
              }
            }}
            content="Sign Up"
            primary
          />
        </Form>
        {/* service workers form */}
        <Form
          style={
            type === "serviceWorkers"
              ? { display: "block" }
              : { display: "none" }
          }
        >
          <Form.Input
            label="Full Name"
            type="text"
            value={fullName}
            onChange={e => setFullName(e.target.value)}
          />
          <Form.Input
            label="service"
            type="text"
            value={service}
            onChange={e => setService(e.target.value)}
          />
          <Form.Input
            label="Photo URL"
            type="text"
            value={photoUrl}
            onChange={e => setPhotoUrl(e.target.value)}
          />
          <Form.Input
            label="Username"
            type="text"
            placeholder="Username"
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
          <Form.Input
            label="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Form.Input
            label="Re-type Password"
            type="password"
            value={rtPassword}
            onChange={e => setRtPassword(e.target.value)}
          />

          {/* set type and submit form */}
          <div className={styles.radioBtns}>
            <Form.Field>
              <Radio
                label="Service Worker"
                name="radioGroup"
                value="serviceWorkers"
                checked={type === "serviceWorkers"}
                onChange={e => setType("serviceWorkers")}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label="User"
                name="radioGroup"
                value="users"
                checked={type === "users"}
                onChange={e => setType("users")}
              />
            </Form.Field>
          </div>
          <Button
            onClick={e => {
              const newUser = {
                fullName: fullName,
                password: password,
                photoUrl: photoUrl,
                username: userName,
                serviceType: service
              };
              if (rtPassword === password) {
                axios
                  .post(
                    "https://buildtipease.herokuapp.com/auth/serviceWorkers/register",
                    newUser
                  )
                  .then(res => {
                    props.history.push("/home/login");
                  })
                  .catch(err => console.log(err));
              }
            }}
            content="Sign Up"
            primary
          />
        </Form>

        <Link to="/home">
          <Icon className={styles.close} name="window close" size="big" />
        </Link>
      </Segment>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  { loginSuccess }
)(SignUp);
