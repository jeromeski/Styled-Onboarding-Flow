import React, { Fragment } from "react";
import {
  Circle,
  NextButton,
  PrevButton,
  Progress,
  ProgressContainer
} from "../styled.components";

const data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz"
};

const StepOne = ({ goToNext, goToPrev }) => {
  return (
    <Fragment>
      <ProgressContainer>
        <Progress />
        <Circle marked>1</Circle>
        <Circle>2</Circle>
        <Circle>3</Circle>
      </ProgressContainer>
      <PrevButton disabled={1}>Back</PrevButton>
      <NextButton onClick={() => goToNext(data)}>Next</NextButton>
    </Fragment>
  );
};

export default StepOne;
