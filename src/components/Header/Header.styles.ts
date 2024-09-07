import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme["gray-100"]};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme["green-500"]};
      }

      &:focus {
        box-shadow: none;
      }

      &.active {
        color: ${(props) => props.theme["green-500"]};
      }
    }
  }
`;

export const Controls = styled.div`
  width: 3rem;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-bottom: 3px solid ${(props) => props.theme["green-500"]};
  }
`;

export const ManagementCycleButtonBase = styled.button`
  width: 2.2rem;
  height: 2.2rem;
  background: transparent;
  color: ${(props) => props.theme["gray-400"]};
  font-weight: bold;
  padding: 5px;
  border: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 2px;

  &.active {
    color: ${(props) => props.theme["green-500"]};
  }

  &:focus {
    box-shadow: none; /* Ensure that no outline is shown on focus */
  }
`;

export const AddMinuteButton = styled(ManagementCycleButtonBase)`
  border: 2px solid ${(props) => props.theme["gray-500"]};
`;
