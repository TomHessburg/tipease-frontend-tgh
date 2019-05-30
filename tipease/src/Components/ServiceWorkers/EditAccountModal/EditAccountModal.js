import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { transferToBank, payYourself20Bucks } from "../../../actions";

import { connect } from "react-redux";

function EditAccountModal(props) {
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [tagLine, setTagLine] = useState("");
  const [timeAtJob, setTimeAtJob] = useState("");
  const [workplace, setWorkpalce] = useState("");
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [rtPass, setRtPass] = useState("");

  return (
    <EditModal
      onClick={e => {
        props.history.push("/ServiceWorkers/dashboard");
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
          <TextField
            style={{ margin: "8px" }}
            label="service type"
            margin="normal"
            variant="outlined"
            value={serviceType}
            onChange={e => {
              setServiceType(e.target.value);
            }}
          />
          <TextField
            style={{ margin: "8px" }}
            label="tagline"
            margin="normal"
            variant="outlined"
            value={tagLine}
            onChange={e => {
              setTagLine(e.target.value);
            }}
          />
          <TextField
            style={{ margin: "8px" }}
            label="time at job"
            margin="normal"
            variant="outlined"
            value={timeAtJob}
            onChange={e => {
              setTimeAtJob(e.target.value);
            }}
          />
          <TextField
            style={{ margin: "8px" }}
            label="workplace"
            margin="normal"
            variant="outlined"
            value={workplace}
            onChange={e => {
              setWorkpalce(e.target.value);
            }}
          />
          <Button
            onClick={e => {
              e.preventDefault();
              const accountChanges = {
                username,
                fullname,
                photoUrl,
                serviceType,
                timeAtJob,
                tagLine,
                workplace
              };
              console.log(accountChanges);
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
              if (newPass === rtPass) {
                console.log({
                  oldPass,
                  newPass
                });
              }
            }}
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </form>
        <hr />
        <Typography variant="h6">balance: ${props.accountBalance}</Typography>
        <Button
          onClick={e => {
            props.transferToBank(props.id);
          }}
          style={{ margin: "16px" }}
          variant="contained"
          color="primary"
        >
          Transfer money to bank
        </Button>
        <Button
          onClick={e => {
            props.payYourself20Bucks(props.id);
          }}
          style={{ margin: "16px" }}
          variant="contained"
          color="primary"
        >
          pay yourself 20 bucks (for testing purposes, of course :) )
        </Button>
      </EditForm>
    </EditModal>
  );
}

const mapStateToProps = state => {
  const refactoredACB = `${state.accountBalance}`;
  const [one, two] = refactoredACB.split(".");
  let answerPiece = one
    .split("")
    .reverse()
    .map((num, i) => {
      let num2 = i + 1;
      if (num2 % 3 === 0) {
        return "," + num;
      } else {
        return num;
      }
    })
    .reverse()
    .join("");

  if (two) {
    answerPiece += "." + two;
    if (`${two}`.length === 1) {
      answerPiece += "0";
    }
  }
  return {
    accountBalance: answerPiece,
    id: state.id
  };
};

export default connect(
  mapStateToProps,
  { transferToBank, payYourself20Bucks }
)(EditAccountModal);

const EditModal = styled.div`
  cursor: pointer;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
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
