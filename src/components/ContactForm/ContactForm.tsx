
import { Input } from "../Atoms/Input/Input.tsx"
import { Label } from "../Atoms/Label/Label.tsx"
import { ContactFormStyled } from "./ContactForm.styled.ts"

export const ContactForm = () => {

    return (
        <ContactFormStyled>
            <fieldset>
                <div>
                    <Label htmlFor="fullname" title="Navn" />
                    <Input type="text" name="fullname" />
                </div>
                <div>
                    <Label htmlFor="email" title="Email" />
                    <Input type="email" name="email" />
                </div>
                <div>
                    <Label htmlFor="message" title="Besked" />
                    <Input type="message" name="message" />
                </div>
                <div>
                </div>
            </fieldset>
        </ContactFormStyled>
    )
}
