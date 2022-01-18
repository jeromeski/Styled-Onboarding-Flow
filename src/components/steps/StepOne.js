import React from "react";

const data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz"
};

const StepOne = ({ goToNext, goToPrev }) => {
  return (
    <div>
      <h1>1</h1>
      <button disabled={1}>Back</button>
      <button onClick={() => goToNext(data)}>Next</button>
    </div>
  );
};

export default StepOne;
