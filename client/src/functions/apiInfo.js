import axios from "axios"




export async function sendData(data){
   await axios.post("http://localhost:3001", data)
   return "enviado"
}


