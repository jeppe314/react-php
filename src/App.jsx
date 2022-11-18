import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"

function App() {
    const [name, setName] = useState("")
    const [result, setresult] = useState("")

    const handleChange = (e) => {
        setName(e.target.value)
        console.log(e.target)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="App">
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>

            <form
                action="http://localhost:8000/server.php"
                method="post"
                onSubmit={(e) => handleSubmit(e)}
            >
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => handleChange(e)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default App
