import React from "react";

const data = {
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets"
  }
};

const StepThree = ({ goToNext, goToPrev }) => {
  return (
    <div>
      <h1>3</h1>
      <button onClick={goToPrev}>Back</button>
      <button onClick={() => goToNext(data)}>Next</button>
    </div>
  );
};

export default StepThree;
