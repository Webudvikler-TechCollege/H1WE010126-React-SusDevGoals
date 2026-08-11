import { Navbar } from "../Navbar/Navbar"

export const Header = () => {
    return (
        <header style={{ border: "solid 1px #000", width: "80%", margin: "0 auto" }}>
            <h1>Min nye react app</h1>
            <Navbar />
        </header>
    )
}