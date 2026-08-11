type ContainerProps = {
    color?: string,
    width: string,
    children?: React.ReactNode
}

export const Container = ({ color, width, children }:ContainerProps) => {
  return (
    <section style={{ backgroundColor: color, width: width, padding: "10px 0 10px 0", margin: "0 auto"}}>
        {children}
    </section>
  )
}
