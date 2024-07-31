import { createContext } from "react";
import run from "../Config/gemini";

export const context = createContext();

const ContextProvider = (props)=>{

   const onSend = async (prompt) =>{
     await run(prompt)
   }

   onSend("what is javascript.")

 const contextValue = {

 }
 return(
    <context.Provider value={contextValue}>
      {props.children}
     </context.Provider>
 )
}

export default ContextProvider;