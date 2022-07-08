import { ClipboardText } from "phosphor-react";
import { Task } from "./Task";

export function Tasks() {
  return (
    <div>
      <div className="flex justify-between mb-6">
        <div className="flex items-center gap-2">
          <p className="text-blue font-inter font-bold text-sm leading-[17px]">
            Tarefas criadas
          </p>
          <span className="flex flex-col justify-center items-center  text-person-200 font-inter font-bold rounded-full text-xs bg-person-400 py-1 px-2.5">
            5
          </span>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-purple font-inter font-bold text-sm leading-[17px]">
            Cuncluídas
          </p>
          <span className="flex flex-col justify-center items-center  text-person-200 font-inter font-bold rounded-full text-xs bg-person-400 py-1 px-2.5">
            2 de 5
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-16 border-t rounded-lg border-person-400 font-inter">
        <div className="flex flex-col items-center justify-center text-person-300 text-base">
          <ClipboardText size={56} weight="thin" />
          <p className="font-bold mt-4">Você ainda não tem tarefas cadastradas</p>
          <p className="">Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
      <Task />
    </div>
  );
}
