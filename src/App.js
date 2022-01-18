import StepOne from "./components/steps/StepOne";
import StepThree from "./components/steps/StepThree";
import StepTwo from "./components/steps/StepTwo";
import UncontrolledOnboardingFlow from "./components/uncontrolled/UncontrolledOnboardingFlow";
import "./styles.css";

export default function App() {
  const onFinish = (userInfo) => {
    console.log("Onboarding Complete!");
  };

  return (
    <div className="App">
      <UncontrolledOnboardingFlow onFinish={onFinish}>
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledOnboardingFlow>
    </div>
  );
}
