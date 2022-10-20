import { useState } from "react";

export default function ChangeProfile(props)
{
    const [newUserName,setNewUserName] = useState("");
    return <div>
        <input type="text" onChange={ (event) => setNewUserName(event.target.value) } />
        <button onClick={ () => {props.setUsername(newUserName)} } >Update uSername</button>
    </div>
}