import React, { Fragment } from "react";
import {
  Circle,
  NextButton,
  PrevButton,
  Progress,
  ProgressContainer
} from "../styled.components";

const data = {
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets"
  }
};

const StepThree = ({ goToNext, goToPrev, currentIndex }) => {
  return (
    <Fragment>
      <ProgressContainer>
        <Progress step2 />
        <Circle marked>1</Circle>
        <Circle marked>2</Circle>
        <Circle marked>3</Circle>
      </ProgressContainer>
      <PrevButton onClick={() => goToPrev()}>Back</PrevButton>
      <NextButton onClick={() => goToNext(data)}>
        {currentIndex === 2 ? "Submit" : "Next"}
      </NextButton>
    </Fragment>
  );
};

export default StepThree;
