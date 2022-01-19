import styled, { css } from "styled-components/macro";
import Button from "./Button";

const colors = {
  lineBorderFill: "#3498db",
  lineBorderEmpty: "#e0e0e0"
};

const { lineBorderFill, lineBorderEmpty } = colors;

export const Container = styled.div`
  text-align: center;
`;

export const ProgressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 30px;
  max-width: 100%;
  width: 350px;
  &:before {
    content: " ";
    background-color: ${lineBorderEmpty};
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 4px;
    width: 100%;
    z-index: -1;
  }
`;

export const Progress = styled.div`
  background-color: ${lineBorderFill};
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 4px;
  width: 0%;
  z-index: -1;
  transition: 0.4s ease;
  ${({ step1 }) =>
    step1 &&
    css`
      width: 50%;
    `}
  ${({ step2 }) =>
    step2 &&
    css`
      width: 100%;
    `}
`;

export const Circle = styled.div`
  background-color: #fff;
  color: #999;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #e0e0e0;
  z-index: 1;
  ${({ marked }) =>
    marked &&
    css`
      border-color: ${lineBorderFill};
    `}
`;

export const NextButton = styled(Button)`
  background-color: ${lineBorderFill};
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
  font-family: inherit;
  padding: 8px 30px;
  margin: 5px;
  font-size: 14px;
`;

export const PrevButton = styled(Button)`
  background-color: ${lineBorderFill};
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
  font-family: inherit;
  padding: 8px 30px;
  margin: 5px;
  font-size: 14px;
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: lightgray;
    `}
`;
