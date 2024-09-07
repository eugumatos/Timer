import { useEffect, useContext } from "react";
import { differenceInSeconds } from "date-fns";
import { CountdownContainer, Separator, Negative } from "./styles";
import { CyclesContext } from "../../../../contexts/CyclesContext";
import { Minus } from "phosphor-react";

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    amountSecondsPassed,
    setSecondsPassed,
    markCurrentCycleAsFinished,
    addOneMinuteToCycle,
    lessOneMinuteToCycle,
  } = useContext(CyclesContext);

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;

  const remainingSeconds = activeCycle
    ? Math.max(totalSeconds - amountSecondsPassed, 0)
    : 0;

  const elapsedSeconds =
    amountSecondsPassed > totalSeconds ? amountSecondsPassed - totalSeconds : 0;

  const currentSeconds = remainingSeconds || elapsedSeconds;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, "0");
  const seconds = String(secondsAmount).padStart(2, "0");

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "M" || event.key === "m") {
        addOneMinuteToCycle();
      } else if (event.key === "L" || event.key === "l") {
        lessOneMinuteToCycle();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [addOneMinuteToCycle, lessOneMinuteToCycle]);

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`;
    }
  }, [activeCycle, minutes, seconds]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate)
        );

        if (secondsDifference >= totalSeconds) {
          setSecondsPassed(secondsDifference);
        } else {
          setSecondsPassed(secondsDifference);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [
    activeCycle,
    activeCycleId,
    totalSeconds,
    setSecondsPassed,
    markCurrentCycleAsFinished,
  ]);

  const isTimeout = amountSecondsPassed > totalSeconds;
  const isWarning = remainingSeconds <= 59 && remainingSeconds > 0;

  return (
    <div style={{ position: "relative" }}>
      {isTimeout && (
        <Negative>
          <Minus size={30} />
        </Negative>
      )}
      <CountdownContainer timeout={isTimeout} warning={isWarning}>
        <span>{minutes[0]}</span>
        <span>{minutes[1]}</span>
        <Separator>:</Separator>
        <span>{seconds[0]}</span>
        <span>{seconds[1]}</span>
      </CountdownContainer>
    </div>
  );
}
