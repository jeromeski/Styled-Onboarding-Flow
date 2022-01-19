import StepOne from "./components/steps/StepOne";
import StepThree from "./components/steps/StepThree";
import StepTwo from "./components/steps/StepTwo";
import { Container } from "./components/styled.components";
import UncontrolledOnboardingFlow from "./components/uncontrolled/UncontrolledOnboardingFlow";
import "./styles.css";

export default function App() {
  const onFinish = (userInfo) => {
    console.log("Onboarding Complete!");
  };

  return (
    <Container>
      <UncontrolledOnboardingFlow onFinish={onFinish}>
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledOnboardingFlow>
    </Container>
  );
}
