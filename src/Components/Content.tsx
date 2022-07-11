import { ClipboardText, PlusCircle } from "phosphor-react"
import { ChangeEvent, FormEvent, useState } from "react"
import { Task } from "./Task";

export function Content() {
  const [tasks, setTask] = useState([
    'post mt bacana'
  ]);

  const [ newTaskText, setNewTaskText ] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event?.preventDefault();

    setTask([...tasks, newTaskText])
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTaskText(event.target.value)
  }

  return (
    <div className="flex justify-center ">
      <div className="w-[736px] mt-[-27px]">
        <form onSubmit={handleCreateNewTask} className="flex gap-2 mb-16">
          <input
            className="box-border w-full font-inter p-3 font-normal text-base text-person-300 rounded-lg bg-person-500 border-solid border-[1px] border-person-700"
            type="text"
            onChange={handleNewTaskChange}
            name="newtask"
            id="newtask"
            placeholder="Adicione uma nova tarefa"
          />
          <button
            className="flex bg-blueDark rounded-lg p-4 gap-2 font-inter font-bold text-person-100 justify-center items-center text-sm"
          >
            Criar
            <PlusCircle size={16} weight="bold" />
          </button>
        </form>

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

          {tasks.length == 0 ? (
            <div className="flex flex-col items-center justify-center py-16 border-t rounded-lg border-person-400 font-inter">
              <div className="flex flex-col items-center justify-center text-person-300 text-base">
                <ClipboardText size={56} weight="thin" />
                <p className="font-bold mt-4">
                  Você ainda não tem tarefas cadastradas
                </p>
                <p className="">Crie tarefas e organize seus itens a fazer</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {tasks.map(taskss => {                
                return (
                  <Task content={taskss}/>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
