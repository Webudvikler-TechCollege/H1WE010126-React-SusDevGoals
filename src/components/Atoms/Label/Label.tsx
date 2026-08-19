type LabelProps = {
    htmlFor: string,
    title: string
}

export const Label = ({ htmlFor, title }: LabelProps) => {
  return (
    <label htmlFor={htmlFor}>
        {title}
    </label>
  )
}
