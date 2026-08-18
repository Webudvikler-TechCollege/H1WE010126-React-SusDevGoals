import type { Theme } from "../../../styles/Theme"

export type DivProps = {
    children?: React.ReactNode,
    bgcolor?: "primary" | "secondary" | "tertiary" | "grey",
    height?: string,
    width?: string,
    className?: string
}

export type DivStyledProps = {
    $bgcolor?: keyof Theme["colors"]
    $width?: string
    $height?: string
}