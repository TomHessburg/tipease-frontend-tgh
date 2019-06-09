import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import UsersTopBar from "../Users/TopBar/UsersTopBar.js";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import styled from "styled-components";

import TipSW from "../Users/TipSW/TipSW.js";

function SWProfile(props) {
  const [worker, setWorker] = useState({});

  useEffect(() => {
    const singleWorker = props.serviceWorkers.filter(sw => {
      return sw.id === parseInt(props.match.params.id);
    });
    setWorker(...singleWorker);
  }, []);

  return (
    <Wrapper>
      <UsersTopBar history={props.history} fullName={props.fullName} />
      <Hero>
        <TopImg style={{ backgroundImage: `url(${worker.photoUrl})` }} />

        <Typography variant="h3">{worker.fullName}</Typography>
        <Typography variant="h5">{worker.username}</Typography>
        <Typography variant="p">"{worker.tagline}"</Typography>
        <hr style={{ margin: "16px" }} />
        <Typography variant="p" style={{ marginBottom: "16px" }}>
          {worker.bio}
        </Typography>
        <WorkerInfo>
          <Typography variant="p">rating: {worker.rating}</Typography>
          <Typography variant="p">service: {worker.serviceType}</Typography>
          <Typography variant="p">workplace: {worker.workplace}</Typography>
          <Typography variant="p">time at job: {worker.timeAtJob}</Typography>
        </WorkerInfo>
      </Hero>
    </Wrapper>
  );
}

const mapStateToProps = state => {
  return {
    fullName: state.fullName,
    serviceWorkers: state.serviceWorkers
  };
};

export default connect(
  mapStateToProps,
  {}
)(SWProfile);

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.03);
`;

const Hero = styled(Paper)`
  width: 90%;
  max-width: 1100px;
  min-height: 400px;
  margin: 40px auto;
  padding: 8px;
`;

const TopImg = styled.div`
  width: 100%;
  margin: 16px auto;
  height: 250px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  box-shadow: 0 12px 12px -5px rgba(0, 0, 0, 0.4);
`;

const WorkerInfo = styled.div`
  width: 100%;
  padding: 16px;
  text-align: left;
  background: rgba(0, 0, 0, 0.03);
`;
