import { PlusCircle } from "phosphor-react"
import { ChangeEvent, FormEvent, useState } from "react"
import { NoTask } from "./NoTask";
import { Task } from "./Task";

interface task {
  id: number
  title: string
  isComplet: boolean
}

export function Content() {

  const [tasks, setTask] = useState<task[]>([]);

  const [ newTaskText, setNewTaskText ] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event?.preventDefault();

    const task:task = {
      id: Math.floor(Math.random() * 10),
      title: newTaskText,
      isComplet: false
    }

    setTask([...tasks, task])
    setNewTaskText('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTaskText(event.target.value)
  }

  function deleteTask(deleteTaskId: number,deleteTaskTitle: string){
    const tasksWithoutDeleteOne = tasks.filter(task => {
      return task.id !== deleteTaskId && task.title !== deleteTaskTitle
    })
    setTask(tasksWithoutDeleteOne)
  }

  function changeCompletedTask(changeCompletedTask: boolean, changeIdTask: number) {
    const taskModifiedStatus = tasks.map(task => {
      if(task.id === changeIdTask && task.isComplet === changeCompletedTask){
        task.isComplet = true
      }
    })
    
    setTask(taskModifiedStatus)
  }

  const isNewTaskEmpty = newTaskText.length === 0

  return (
    <div className="flex justify-center ">
      <div className="w-[736px] mt-[-27px]">
        <form onSubmit={handleCreateNewTask} className="flex gap-2 mb-16">
          <input
            className="box-border w-full font-inter p-3 font-normal text-base text-person-300 rounded-lg bg-person-500 border-solid border-[1px] border-person-700"
            type="text"
            value={newTaskText}
            onChange={handleNewTaskChange}
            name="newtask"
            id="newtask"
            placeholder="Adicione uma nova tarefa"
          />
          <button 
            disabled={isNewTaskEmpty}
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
            <NoTask />
          ) : (
            <div className="flex flex-col gap-3">
              {tasks.map(taskss => {
                return (
                  <Task
                    id={taskss.id}
                    title={taskss.title}
                    isCompleted={taskss.isComplet}
                    onCompletedTask={changeCompletedTask}
                    onDeleteTask={deleteTask}
                  />
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
