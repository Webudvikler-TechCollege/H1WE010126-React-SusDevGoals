import { useEffect, useState } from "react"
import { CustomGoalDesignerStyled } from "./CustomGoalDesigner.styled.ts"
import { Label } from "../../atoms/Label/Label.tsx"
import { Input } from "../../atoms/Input/Input.tsx"


export const CustomGoalDesigner = () => {
    const [text, setText] = useState("Din tekst")
    const [textcolor, setTextColor] = useState("000")
    const [backgroundcolor, setBackgroundColor] = useState("efefef")
    const [error, setError] = useState('')

    useEffect(() => {
        if (!text) {
            setError('Tekst må ikke være tom')
        } else {
            setError('')
        }
    }, [text, textcolor, backgroundcolor])

    return (
        <CustomGoalDesignerStyled>
            <div>
                <div>
                    <Label htmlFor="goaltext" title="Indtast tekst" />
                    <Input type="text" name="goaltext" onChange={(e) => setText(e.target.value)} />
                    {error && <span style={{ color: "red" }}>{error}</span>}
                </div>
                <div>
                    <Label htmlFor="textcolor" title="Indtast farvekode til tekst" />
                    <Input type="text" name="color" onChange={(e) => setTextColor(e.target.value)} />
                    {error && <span style={{ color: "red" }}>{error}</span>}
                </div>
                <div>
                    <Label htmlFor="backgroundcolor" title="Indtast farvekode" />
                    <Input type="text" name="color" onChange={(e) => setBackgroundColor(e.target.value)} />
                    {error && <span style={{ color: "red" }}>{error}</span>}
                </div>
            </div>

            <div>
                <div 
                    className="customgoal" 
                    style={
                        { 
                            backgroundColor: `#${backgroundcolor}`,
                            color: `#${textcolor}`
                        }
                    }
                    >
                    {text}
                </div>
            </div>
        </CustomGoalDesignerStyled>
    )
}
