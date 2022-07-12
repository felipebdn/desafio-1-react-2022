import { ClipboardText } from "phosphor-react";

export function NoTask() {
  return (
    <div className="flex flex-col items-center justify-center py-16 border-t rounded-lg border-person-400 font-inter">
      <div className="flex flex-col items-center justify-center text-person-300 text-base">
        <ClipboardText size={56} weight="thin" />
        <p className="font-bold mt-4">Você ainda não tem tarefas cadastradas</p>
        <p className="">Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
