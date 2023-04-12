import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function BarStatus() {
  const now = 20;
  return <ProgressBar now={now} label={`${now}%`} />;
}

export default BarStatus;
