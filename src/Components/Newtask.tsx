import { PlusCircle } from "phosphor-react";


export function Newtask() {
  return (
    <div className="flex gap-2 mb-16">
      <input 
        className="box-border w-full font-inter p-3 font-normal text-base text-person-300 rounded-lg bg-person-500 border-solid border-[1px] border-person-700"
        type="text"
        name="newtask"
        id="newtask"
        placeholder="Adicione uma nova tarefa"
      />
      <button
        className="flex bg-blueDark rounded-lg p-4 gap-2 font-inter font-bold text-person-100 justify-center items-center text-sm"
      >
        Criar
        <PlusCircle size={16} weight="bold"/>
      </button>
    </div>
  )
}