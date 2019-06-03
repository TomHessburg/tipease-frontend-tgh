import React, { useEffect } from "react";
// import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import moduleStyles from "./UsersDashboard.module.scss";
import Grid from "@material-ui/core/Grid";

import { getAllServiceWorkers } from "../../../actions";

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
              <img src={props.photoUrl} alt="profile" />
              <Typography variant="h5" gutterBottom>
                {props.fullName}
              </Typography>
            </div>
            <hr />
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Paper style={{ minHeight: "230px" }} className={classes.paper}>
                  <Typography variant="h6" gutterBottom>
                    Tip a User!
                  </Typography>
                  <hr />
                  {/* <Typography variant="body1" gutterBottom>
                    rating:
                  </Typography> */}
                  {props.serviceWorkers &&
                    props.serviceWorkers.map(worker => {
                      console.log(worker);
                      return (
                        <div key={worker.id}>
                          <Typography variant="body1" gutterBottom>
                            {worker.fullName}
                          </Typography>
                        </div>
                      );
                    })}
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
