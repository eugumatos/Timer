import {
  createContext,
  useState,
  useReducer,
  ReactNode,
  useEffect,
} from "react";
import { differenceInSeconds } from "date-fns";
import { cyclesReducer, Cycle } from "../reducers/cycles/reducer";
import {
  addNewCycleAction,
  addOneMinuteToCycleAction,
  markCurrentCycleAsFinishedAction,
  interruptCurrentCycleAction,
  lessOneMinuteFromCycleAction,
} from "../reducers/cycles/actions";

interface CreateCycleData {
  task: string;
  minutesAmount: number;
}

interface CyclesContextType {
  cycles: Cycle[];
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  amountSecondsPassed: number;
  markCurrentCycleAsFinished: () => void;
  setSecondsPassed: (seconds: number) => void;
  createNewCycle: (data: CreateCycleData) => void;
  interruptCurrentCycle: () => void;
  nextQueeCycle: () => void;
  addOneMinuteToCycle: () => void;
  lessOneMinuteToCycle: () => void;
}

export const CyclesContext = createContext({} as CyclesContextType);

interface CyclesContextProviderProps {
  children: ReactNode;
}

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    (initialState) => {
      const storagedAsJSON = localStorage.getItem("@timer:cycles-state-1.0.0");

      if (storagedAsJSON) {
        return JSON.parse(storagedAsJSON);
      }

      return initialState;
    }
  );

  const { cycles, activeCycleId } = cyclesState;

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  const [queuedCycles, setQueuedCycles] = useState<Cycle[]>([]);

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate));
    }

    return 0;
  });

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
  }

  function markCurrentCycleAsFinished() {
    dispatch(markCurrentCycleAsFinishedAction());
  }

  function createNewCycle(data: CreateCycleData) {
    const id = String(new Date().getTime());

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };

    if (activeCycle) {
      setQueuedCycles((prevQueuedCycles) => [...prevQueuedCycles, newCycle]);
      return;
    }

    dispatch(addNewCycleAction(newCycle));

    setAmountSecondsPassed(0);
  }

  function interruptCurrentCycle() {
    dispatch(interruptCurrentCycleAction());
    setAmountSecondsPassed(0);
  }

  function nextQueeCycle() {
    if (queuedCycles.length > 0) {
      const [nextCycle, ...remainingCycles] = queuedCycles;
      dispatch(addNewCycleAction(nextCycle));
      setQueuedCycles(remainingCycles); // Update the queue to remove the dispatched cycle
      setAmountSecondsPassed(0);
    }
  }

  function addOneMinuteToCycle() {
    if (activeCycle) {
      dispatch(addOneMinuteToCycleAction(activeCycle.id));
    }
  }

  function lessOneMinuteToCycle() {
    if (activeCycle) {
      dispatch(lessOneMinuteFromCycleAction(activeCycle.id));
    }
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState);

    localStorage.setItem("@timer:cycles-state-1.0.0", stateJSON);
  }, [cyclesState]);

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        markCurrentCycleAsFinished,
        setSecondsPassed,
        createNewCycle,
        interruptCurrentCycle,
        addOneMinuteToCycle,
        lessOneMinuteToCycle,
        nextQueeCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  );
}
