import React from 'react'
import "./Error.css"
import {useHistory} from "react-router-dom"

const Error = () => {
    const history = useHistory();
    const redirect = () =>{
        return history.push("/");
    }
    return (
        <div className="Error">
            <div className="text_404">404</div>
            <h3 className="oops">Oops!!</h3>
            <div className="unavailable">This Page doesn't exist or is unavailable</div>
            <button onClick={redirect}>Go Back To Home</button>
           
        </div>

              )
}

export default Error
