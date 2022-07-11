import { Trash } from "phosphor-react";

interface tasksProps {
  content: string
}

export function Task({content}:tasksProps) {
  return (
    <div className="flex p-4 gap-3 items-start bg-person-500 border border-person-400 rounded-lg">
      <input
        id="checkbox-task"
        type="checkbox"
        className="
              peer
              flex
              appearance-none
              w-5
              h-5
              border-2
              border-blue
              rounded-full
              hover:border-blueDark
              hover:bg-blueDark
              hover:bg-opacity-20
              checked:border-none
              checked:bg-purpleDark
              focus:outline-none
              checked:hover:bg-purple
            "
      />

      <label
        htmlFor="checkbox-task"
        className="
            flex
            font-inter
            text-sm
            font-normal
            text-person-100
            peer-checked:line-through
            peer-checked:text-person-300
            cursor-pointer
            w-full
          "
      >
        {content}
      </label>
      <a
        href="#"
        className="flex rounded-[4px] text-person-300 p-1 hover:bg-person-400 hover:text-danger"
      >
        <Trash size={24} />
      </a>
    </div>
  );
}
