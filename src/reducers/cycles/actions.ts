import { Cycle } from "./reducer";

export enum ActionTypes {
  ADD_NEW_CYCLE = "ADD_NEW_CYCLE",
  ADD_ONE_MINUTE_TO_CYCLE = "ADD_ONE_MINUTE_TO_CYCLE",
  LESS_ONE_MINUTE_TO_CYCLE = "LESS_ONE_MINUTE_TO_CYCLE",
  INTERRUPT_CURRENT_CYCLE = "INTERRUPT_CURRENT_CYCLE",
  MARK_CURRENT_CYCLE_AS_FINISHED = "MARK_CURRENT_CYCLE_AS_FINISHED",
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  };
}

export function addOneMinuteToCycleAction(id: string) {
  return {
    type: ActionTypes.ADD_ONE_MINUTE_TO_CYCLE,
    payload: {
      id,
    },
  };
}

export function lessOneMinuteFromCycleAction(cycleId: string) {
  return {
    type: ActionTypes.LESS_ONE_MINUTE_TO_CYCLE,
    payload: {
      cycleId,
    },
  };
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  };
}

export function interruptCurrentCycleAction() {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
  };
}
