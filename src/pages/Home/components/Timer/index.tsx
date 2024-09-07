import { TimerContainer } from "./styles";

export const Timer = () => {
  const brazilTime = new Date();

  const formattedTime = brazilTime.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <TimerContainer>
      <span>{formattedTime}</span>
    </TimerContainer>
  );
};
