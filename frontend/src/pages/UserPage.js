import React from "react";
import { useParams } from "react-router-dom";
export const UserPage = () => {
    let param = useParams();
    return (
        <div>
            User Page

            {param.name && 
            <p>Hello {param.name}</p>
            }
        </div>
    )
}