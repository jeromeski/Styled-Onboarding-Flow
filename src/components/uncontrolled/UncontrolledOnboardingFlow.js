import React, { useState } from "react";

const UncontrolledOnboardingFlow = ({ children, onFinish }) => {
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = (stepData) => {
    const nextIndex = currentIndex + 1;

    const updatedData = {
      ...onboardingData,
      ...stepData
    };

    if (nextIndex < children.length) {
      setCurrentIndex(nextIndex);
    } else {
      onFinish(updatedData);
    }

    setOnboardingData(updatedData);
  };

  console.log(onboardingData);

  const goToPrev = () => {
    if (currentIndex <= 0) {
      return;
    }
    setCurrentIndex(currentIndex - 1);
  };

  const currentChild = React.Children.toArray(children)[currentIndex];
  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext, goToPrev });
  }
  return currentChild;
};

export default UncontrolledOnboardingFlow;
