import React, { useState } from "react";
import Msgcontext from "./context";


const Msgstate = (props) => {

    const [Msg, setMsg] = useState([]);

    const addMsg = async(name, email, message) => {

        const response = await fetch("myfullstackportfolio.vercel.app/message", {
            method: "POST",             
		    headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify({name, email, message}), // body data type must match "Content-Type" header
          });

           const data = await response.json(); // parses JSON response into native JavaScript objects)
          console.log(data);

        const add = { name: name, email: email, message: message }
        setMsg(Msg.concat(add))
        
    }

return(

    <Msgcontext.Provider value={{Msg, addMsg}}>
        {props.children}
    </Msgcontext.Provider>
)
}

export default Msgstate
