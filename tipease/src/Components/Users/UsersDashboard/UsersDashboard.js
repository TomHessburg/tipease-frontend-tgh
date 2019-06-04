import React, { useState, useEffect } from "react";
// import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import moduleStyles from "./UsersDashboard.module.scss";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";

import SingleWorker from "../SingleWorker/SingleWorker.js";

import { getAllServiceWorkers } from "../../../actions";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  input: {
    marginLeft: 8,
    flex: 1
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

  const [searching, setSearching] = useState("");

  useEffect(() => {
    props.getAllServiceWorkers();
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
              <img
                className={moduleStyles.profileImg}
                src={props.photoUrl}
                alt="profile"
              />
              <Typography variant="h5" gutterBottom>
                {props.fullName}
              </Typography>
            </div>
            <hr />

            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Paper style={{ minHeight: "230px" }} className={classes.paper}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between"
                    }}
                  >
                    <Typography variant="h6" gutterBottom>
                      Tip a User!
                    </Typography>
                    <div>
                      <InputBase
                        className={classes.input}
                        placeholder="Search Service Workers"
                        value={searching}
                        onChange={e => {
                          setSearching(e.target.value);
                        }}
                      />

                      <IconButton
                        className={classes.iconButton}
                        aria-label="Search"
                      >
                        <SearchIcon />
                      </IconButton>
                    </div>
                  </div>
                  <hr />
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "center"
                    }}
                  >
                    {props.serviceWorkers &&
                      props.serviceWorkers
                        .filter(
                          worker =>
                            worker.fullName
                              .toUpperCase()
                              .includes(searching.toUpperCase()) ||
                            worker.username
                              .toUpperCase()
                              .includes(searching.toUpperCase())
                        )
                        .map(worker => {
                          return (
                            <SingleWorker
                              history={props.history}
                              worker={worker}
                              key={worker.id}
                            />
                          );
                        })}
                  </div>
                </Paper>
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
  return {
    ...state
  };
};

export default connect(
  mapStateToProps,
  { getAllServiceWorkers }
)(withStyles(styles)(DashBoard));
