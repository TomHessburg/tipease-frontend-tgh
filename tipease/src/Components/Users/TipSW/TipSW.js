import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

export default function TipSW(props) {
  const [amount, setAmmount] = useState(0);
  const [rating, setRating] = useState(0);

  return (
    <TipWorkerWrapper>
      <Typography variant="h5" gutterBottom>
        Tip {props.worker.fullName}
      </Typography>
      <hr />
      <Typography variant="h6" gutterBottom>
        ammount:
      </Typography>
      <TextField
        id="filled-adornment-amount"
        label="Amount"
        type="number"
        value={amount}
        onChange={e => {
          console.log(e.target.value);
          setAmmount(e.target.value);
        }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>
        }}
      />
      <Typography variant="h6" gutterBottom>
        rating:
      </Typography>
    </TipWorkerWrapper>
  );
}

const TipWorkerWrapper = styled(Paper)`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 2;
  padding: 16px;
`;
