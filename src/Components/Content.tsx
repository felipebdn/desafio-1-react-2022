import { Newtask } from "./Newtask";
import { Tasks } from "./Tasks";

export function Content() {
  return (
    <div className="flex justify-center ">
      <div className="w-[736px] mt-[-27px]">
        <Newtask/>
        <Tasks />
      </div>
    </div>
  );
}
