import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { editUserAccount } from "../../../actions";

import { connect } from "react-redux";

function EditAccountModal(props) {
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [rtPass, setRtPass] = useState("");

  const editAccountMain = () => {
    const newUserInfo = {};

    if (username.length) {
      newUserInfo["username"] = username;
      setUsername("");
    }
    if (fullname.length) {
      newUserInfo["fullName"] = fullname;
      setFullname("");
    }

    props.editUserAccount(newUserInfo, props.id);
    // console.log(newUserInfo);
  };

  const editPassword = () => {
    //need to change be model to require old password comparison.
    //not doing this right this second as to not mess up Viveks application at current.
    if (newPass === rtPass) {
      props.editUserAccount({ password: newPass }, props.id);
      setOldPass("");
      setNewPass("");
      setRtPass("");
    } else {
      //do some error handeling
      // console.log("...");
    }
  };

  return (
    <EditModal
      onClick={e => {
        props.history.push("/users/dashboard");
      }}
    >
      <EditForm
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <Typography variant="h4">Edit Account</Typography>
        <hr />
        <form noValidate autoComplete="off">
          <TextField
            style={{ margin: "8px" }}
            label="user name"
            margin="normal"
            variant="outlined"
            value={username}
            onChange={e => {
              setUsername(e.target.value);
            }}
          />
          <TextField
            style={{ margin: "8px" }}
            label="full name"
            margin="normal"
            variant="outlined"
            value={fullname}
            onChange={e => {
              setFullname(e.target.value);
            }}
          />
          <TextField
            style={{ margin: "8px" }}
            label="photo url"
            margin="normal"
            variant="outlined"
            value={photoUrl}
            onChange={e => {
              setPhotoUrl(e.target.value);
            }}
          />

          <Button
            onClick={e => {
              e.preventDefault();
              editAccountMain();
            }}
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </form>
        <hr />
        <form>
          <TextField
            style={{ margin: "8px" }}
            label="old password"
            margin="normal"
            variant="outlined"
            value={oldPass}
            onChange={e => {
              setOldPass(e.target.value);
            }}
          />
          <TextField
            style={{ margin: "8px" }}
            label="new password"
            margin="normal"
            variant="outlined"
            value={newPass}
            onChange={e => {
              setNewPass(e.target.value);
            }}
          />
          <TextField
            style={{ margin: "8px" }}
            label="re-type password"
            margin="normal"
            variant="outlined"
            value={rtPass}
            onChange={e => {
              setRtPass(e.target.value);
            }}
          />
          <Button
            onClick={e => {
              e.preventDefault();
              editPassword();
            }}
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </form>
      </EditForm>
    </EditModal>
  );
}

const mapStateToProps = state => {
  return {
    id: state.id
  };
};

export default connect(
  mapStateToProps,
  { editUserAccount }
)(EditAccountModal);

const EditModal = styled.div`
  cursor: pointer;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
`;

const EditForm = styled(Paper)`
  cursor: default;
  width: 480px;
  height: 80vh;
  overflow: scroll;
  margin: 60px auto;
  padding: 0 16px 16px 16px;
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    button {
      margin: 8px;
      width: 180px;
      height: 40px;
    }
  }
  h4 {
    padding: 16px;
  }
`;
