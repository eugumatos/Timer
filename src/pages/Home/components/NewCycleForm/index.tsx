import { useFormContext } from "react-hook-form";
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";

export function NewCycleForm() {
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor="task">Set timer to</label>
      <TaskInput
        id="task"
        list="task-sugestions"
        placeholder="Project Name"
        // disabled={!!activeCycle}
        {...register("task")}
      />

      <datalist id="task-sugestions">
        <option value="Abertura" />
        <option value="Adoração" />
        <option value="Oferta" />
        <option value="Fluxo oferta" />
        <option value="Avisos / Transição" />
        <option value="Ministração" />
      </datalist>

      <label htmlFor="minutesAmount">during</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        // step={5}
        min={1}
        max={60}
        // disabled={!!activeCycle}
        {...register("minutesAmount", { valueAsNumber: true })}
      />

      <span>minutes.</span>

      {/* 
      <QueeButtonContainer>
        <QueeButton type="submit">
          <PlusCircle size={30} />
        </QueeButton>
        <QueeButton type="button" onClick={nextQueeCycle}>
          <ArrowCircleRight size={30} />
        </QueeButton>
      </QueeButtonContainer>
    */}
    </FormContainer>
  );
}
