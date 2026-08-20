import type { ChangeEvent } from "react"

export type InputProps = {
    type: string,
    name: string,
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}