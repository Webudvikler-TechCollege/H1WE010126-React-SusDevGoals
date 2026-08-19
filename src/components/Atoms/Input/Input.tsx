import type { ReactEventHandler } from "react"

type InputProps = {
    type: string,
    name: string,
    onChangeEvent?: ReactEventHandler
}

export const Input = ({ type, name, onChangeEvent }: InputProps) => {
  return (
    <input 
      type={type}
      name={name}
      onChange={onChangeEvent}
    />
  )
}
