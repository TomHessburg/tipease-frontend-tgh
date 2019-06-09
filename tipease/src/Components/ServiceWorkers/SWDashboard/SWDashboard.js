import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import moduleStyles from "./SWDashboard.module.scss";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    margin: "10px"
  }
});

function DashBoard(props) {
  const { classes } = props;

  const [tips, setTips] = useState([]);

  useEffect(() => {
    axios
      .get(`https://buildtipease.herokuapp.com/tickets/tipHistory/${props.id}`)
      .then(res => setTips(res.data))
      .catch(err => {
        //console.log(err)
      });
  }, []);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h4" gutterBottom>
          Welcome, {props.username}!
        </Typography>
        <div className={moduleStyles.dashboard}>
          <div className={moduleStyles.mainDashSection}>
            <div className={moduleStyles.topDash}>
              <img src={props.photoUrl} alt="profile" />
              <Typography variant="h5" gutterBottom>
                Account Balance: ${props.accountBalance}
              </Typography>
            </div>
            <div className={moduleStyles.bio}>
              <Typography variant="body1" gutterBottom>
                {props.bio}
              </Typography>
            </div>
            <hr />
            <Grid container spacing={0}>
              <Grid item lg={4} sm={6} xs={12}>
                <Paper style={{ minHeight: "230px" }} className={classes.paper}>
                  <Typography variant="h6" gutterBottom>
                    Ratings and Bank Stats
                  </Typography>
                  <hr />
                  <Typography variant="body1" gutterBottom>
                    rating: {props.rating}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    # of ratings: {props.numOfRatings}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    accout balance: ${props.accountBalance}
                  </Typography>
                </Paper>
              </Grid>
              <Grid item lg={4} sm={6} xs={12}>
                <Paper style={{ minHeight: "230px" }} className={classes.paper}>
                  <Typography variant="h6" gutterBottom>
                    Account Details
                  </Typography>
                  <hr />
                  <Typography variant="body1" gutterBottom>
                    full name: {props.fullName}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    time at job: {props.timeAtJob}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    service: {props.serviceType}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    workplace: {props.workplace}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    tagline: {props.tagline}
                  </Typography>
                </Paper>
              </Grid>
              <Grid item lg={4} sm={12} xs={12}>
                <div className={moduleStyles.tips}>
                  <Paper
                    style={{ maxHeight: "230px", overflowY: "scroll" }}
                    className={classes.paper}
                  >
                    <Typography variant="h6" gutterBottom>
                      Tip History
                    </Typography>
                    <hr />
                    {tips.map(tip => {
                      return (
                        <div key={tip.id}>
                          <Typography variant="h6" gutterBottom>
                            {tip.senderUsername
                              ? tip.senderUsername
                              : "no name supplied"}
                          </Typography>
                          <Typography variant="body1" gutterBottom>
                            amount: ${tip.tipAmount}
                          </Typography>
                          <Typography variant="body1" gutterBottom>
                            date: {tip.dateRecieved.substring(0, 10)}
                          </Typography>
                          {tip.senderUsername !== "not supplied" ? (
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                              }}
                            />
                          ) : null}

                          <hr />
                        </div>
                      );
                    })}
                  </Paper>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </Paper>
    </div>
  );
}

DashBoard.propTypes = {
  classes: PropTypes.object.isRequired
};

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
    ...state,
    accountBalance: answerPiece
  };
};

export default connect(mapStateToProps)(withStyles(styles)(DashBoard));
