import React from "react";
import { Container } from "react-bootstrap";
import { useGlobalContext } from "../Context";

const WeightSumView = () => {
  const { weightSum, setWeightSum } = useGlobalContext();
  return (
    <>
      <Container></Container>
    </>
  );
};

const WeightElement = () => {
  return (
    <>
      <Container></Container>
    </>
  );
};

export default WeightSumView;
