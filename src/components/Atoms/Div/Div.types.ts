import type { Theme } from "../../../styles/Theme.styled"

export type DivProps = {
    children?: React.ReactNode
    bgcolor?: keyof Theme["colors"]
    height?: string
    width?: string
}