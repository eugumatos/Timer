import { styled } from "styled-components";

export const TimerContainer = styled.div`
  width: 24%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme["yellow-700"]};
  font-size: 3rem;
  font-weight: bold;
  flex-wrap: wrap;
  border: 2px solid #fa9d33;
  border-radius: 8px;
  padding: 10px 7rem;
`;
