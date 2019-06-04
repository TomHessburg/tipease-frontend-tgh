import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import UsersTopBar from "../Users/TopBar/UsersTopBar.js";

import styled from "styled-components";

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
      <UsersTopBar fullName={props.fullName} />
      <p>{worker.id}</p>
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
  background: black;
`;
