

import { useState } from "react"

function App () {

    const [todo, settodo] = useState("")
    const [liste, setliste] = useState([])

    return(

        <div>

            <input type="text"
            value={todo}
            onChange={(e) => settodo(e.target.value)} />

            <button onClick={() => {if (todo !== "") setliste([...liste, {text: todo, done: false}])}}>hinzufügen</button>

            {liste.map((l, index) => (
                <li key={index}>
                    <p> <button onClick={() => (setliste(liste.filter((_, i) => i !== index )))}>löschen</button>{l.text}</p>
                </li>
            ))}

        </div>
        
    )

}

export default App

console.log("hallo")
