import React from "react";
import { useState } from "react";
import { useGlobalContext } from "../context/Context";
import './admin.css'
export interface InputProps {
    id: string;
    idValue: string;
    value: string;
    ref: any;
}


function InputComponent(props: InputProps){
    const { updateUser } = useGlobalContext();

    const [name, setName] = useState(props.value);
  
    const handleChange = (e:any) => {
      const input = e.target.value;
      setName(input);
    };

    const keyPress = (event:any) => {
        const [newName, newEmail, newRole] = [
          (document.getElementById(`nameEdit-${props.id}`) as HTMLInputElement).value,
          (document.getElementById(`emailEdit-${props.id}`) as HTMLInputElement).value,
          (document.getElementById(`roleEdit-${props.id}`) as HTMLInputElement).value
        ];
        let newUser = { id: "", name: "", email: "", role: "" };
    
        if (event.key === "Enter") {
          newUser["id"] = props.id
          newUser["name"] = newName
          newUser["email"] = newEmail
          newUser["role"] = newRole
    
          updateUser(newUser);
        }
      };

      return (
          <>
            <input
                ref={props.ref}
                type="text"
                id={props.idValue}
                value={name}
                className="editInput"
                name="nameEdit"
                onChange={handleChange}
                onKeyDown={keyPress}
            />
          </>
      )
}

const Input = InputComponent

export { Input }