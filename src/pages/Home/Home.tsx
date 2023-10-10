import { Play } from "phosphor-react";

export function Home() {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="task">I'll work at</label>
          <input id="task" />

          <label htmlFor="minutesAmount">during</label>
          <input type="number" id="minutesAmount" />

          <span>minutes.</span>
        </div>

        <div>
          <span>0</span>
          <span>0</span>
          <span>:</span>
          <span>0</span>
          <span>0</span>
        </div>

        <button type="submit">
          <Play size={24} />
          Start
        </button>
      </form>
    </div>
  );
}
