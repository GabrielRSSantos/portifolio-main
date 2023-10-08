

import { useState } from "react"

export default function Sobre(){
    const [useNum, setNum] = useState(0);

    

    return(
        <div className="bg-slate-500">  


            <h1>Sobre</h1>
            <h3>Numero {useNum}</h3>
            <button onClick={() => setNum(useNum + 1)}>Clicar</button>
        </div>
    )
}