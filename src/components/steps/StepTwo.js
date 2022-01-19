import React, { Fragment } from "react";
import {
  Button,
  Circle,
  NextButton,
  PrevButton,
  Progress,
  ProgressContainer
} from "../styled.components";

const data = {
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496"
    }
  }
};

const StepTwo = ({ goToNext, goToPrev }) => {
  return (
    <Fragment>
      <ProgressContainer>
        <Progress />
        <Circle>1</Circle>
        <Circle>2</Circle>
        <Circle>3</Circle>
      </ProgressContainer>
      <PrevButton onClick={() => goToPrev()}>Back</PrevButton>
      <NextButton onClick={() => goToNext(data)}>Next</NextButton>
    </Fragment>
  );
};

export default StepTwo;
