import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";

import TipSW from "../TipSW/TipSW.js";

function SingleWorker(props) {
  const [showing, setShowing] = useState(false);

  return (
    <Card
      style={{
        width: 345,
        margin: "40px",
        position: "relative"
      }}
    >
      <TipSW setShowing={setShowing} worker={props.worker} show={showing} />
      <img
        style={{
          background: "black",
          height: "100px",
          width: "auto",
          borderRadius: "50%",
          marginTop: "16px"
        }}
        src={props.worker.photoUrl}
        alt={props.worker.fullName}
      />
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.worker.fullName}
          </Typography>
          <Typography
            style={{ minHeight: 100 }}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {props.worker.bio || "this service worker dosnt have a bio"}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={e => {
            setShowing(!showing);
          }}
          size="small"
          color="primary"
        >
          tip
        </Button>
        <Button
          onClick={e => {
            props.history.push(`/worker/account/${props.worker.id}`);
          }}
          size="small"
          color="primary"
        >
          See Profile
        </Button>
      </CardActions>
    </Card>
  );
}

export default SingleWorker;
