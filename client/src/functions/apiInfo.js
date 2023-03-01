import axios from "axios"


const apiRailway = process.env.BACKEND_URL

export async function sendData(data){
   await axios.post(apiRailway, data)
   return "enviado"
}

export async function visitAdd(query){
   await axios.put(apiRailway + "?visit="+ query)
}


