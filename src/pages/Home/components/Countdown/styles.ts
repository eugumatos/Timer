import { styled, keyframes, css } from "styled-components";

type CountdownProps = {
  timeout: boolean;
  warning: boolean;
};

const blink = keyframes`
  0%, 100% {
    color: ${(props) => props.theme["red-700"]};
  }
  50% {
    color: transparent;
  }
`;

export const Negative = styled.span`
  background: transparent;
  position: absolute;
  left: -3rem;
  top: 50%;
  color: #7a1921;
`;

export const CountdownContainer = styled.div<CountdownProps>`
  font-family: "Roboto Mono", monospace;
  font-size: 14rem;
  line-height: 10rem;
  color: ${(props) =>
    props.timeout ? props.theme["red-700"] : props.theme["gray-100"]};

  ${(props) =>
    props.warning &&
    css`
      color: ${(props) => props.theme["yellow-100"]};
      // animation: ${blink} 0.5s step-start infinite;
    `}

  display: flex;
  gap: 1rem;

  span {
    background: ${(props) => props.theme["gray-700"]};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`;

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme["red-100"]};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;
