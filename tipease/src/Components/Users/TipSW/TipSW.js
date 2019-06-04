import React, { useState } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";

import ReactStars from "react-stars";

import { rateServiceWorker, tipServiceWorker } from "../../../actions";

function TipSW(props) {
  const [amount, setAmmount] = useState(0);
  const [rating, setRating] = useState(0);

  return (
    <TipWorkerWrapper
      style={props.show ? { display: "flex" } : { display: "none" }}
    >
      <div>
        <button
          style={{
            cursor: "pointer",
            position: "absolute",
            top: "10px",
            left: "10px"
          }}
          onClick={e => props.setShowing(false)}
        >
          x
        </button>
        <Typography variant="h5" gutterBottom>
          Tip {props.worker.fullName}
        </Typography>
        <hr />
        <Typography variant="h6" gutterBottom>
          amount
        </Typography>
        <TextField
          id="filled-adornment-amount"
          type="number"
          value={amount}
          onChange={e => {
            setAmmount(e.target.value);
          }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>
          }}
        />
        <Typography variant="h6" gutterBottom>
          rating
        </Typography>
        <div
          style={{
            margin: "auto",
            width: "100%",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <ReactStars
            count={5}
            value={rating}
            onChange={setRating}
            size={24}
            color2={"#EB3D17"}
          />
        </div>
      </div>
      <Button
        onClick={e => {
          if (amount > 0) {
            const tip = {
              senderUsername: props.username,
              payment: amount
            };
            props.tipServiceWorker(props.worker.id, tip);
            setAmmount(0);
          }
          if (rating > 0) {
            props.rateServiceWorker(props.worker.id, { rating });
            setRating(0);
          }
        }}
        variant="contained"
        color="primary"
      >
        submit
      </Button>
    </TipWorkerWrapper>
  );
}

const mapStateToProps = state => {
  return {
    username: state.username
  };
};

export default connect(
  mapStateToProps,
  { rateServiceWorker, tipServiceWorker }
)(TipSW);

const TipWorkerWrapper = styled(Paper)`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 2;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
