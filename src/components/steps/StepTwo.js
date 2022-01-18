import React from "react";

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
    <div>
      <h1>2</h1>
      <button onClick={goToPrev}>Back</button>
      <button onClick={() => goToNext(data)}>Next</button>
    </div>
  );
};

export default StepTwo;
